<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  computed,
  defineProps,
  defineEmit,
  reactive,
} from 'vue'
import {
  solicitudIntentoPago,
  consultaTerminal,
  stateTerminal,
  stateTerminalData,
  paymentIntentTerminal,
  paymentIntentTerminalData,
  stopTerminal,
} from '/@src/models/ManualPayment'
import { locationsSelect, company } from '/@src/models/Companies'
import { moneda, notyf, getInput } from '/@src/models/Mixin'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

//import Swal from 'sweetalert2'

const emit = defineEmit(['onPayment'])

const openModal = ref(false)

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  define_status: {
    type: Boolean,
    default: true,
  },
})

const terminales = ref([])

const onOpenModal = () => {
  openModal.value = true

  let locaciones = company.value.locations

  if (locaciones.length) {
    if (cookies.get('locations_id')) {
      let locacion = locaciones.find((e) => e.id == cookies.get('locations_id'))
      if (locacion != undefined) {
        let terminalesData = locacion.terminales
        if (terminalesData.length) {
          terminales.value = terminalesData
        }
      }
    }
  }
  if (terminales.value == 0) {
    notyf.error('No terminals found at this location')
  }
}

const terminalActiveData = {
  id: null,
  label: '',
  status: false,
  amount: 0,
}

const terminalActive = reactive(JSON.parse(JSON.stringify(terminalActiveData)))
const isLoaderActive = ref(false)

const onSelectTerminal = (terminal: object) => {
  terminalActive.id = terminal.id
  terminalActive.label = terminal.label
  terminalActive.status = terminal.status
  terminalActive.amount = props.total

  enviarIntentoDePago()
}

watch(
  () => openModal.value,
  (to) => {
    terminalActive.id = null
    terminalActive.label = ''
    terminalActive.status = false
    terminalActive.amount = 0
    isLoaderActive.value = false
    isLoadingConsultaTerminal.value = false
    isPush.value = false

    stateTerminal.value = JSON.parse(JSON.stringify(stateTerminalData))
    paymentIntentTerminal.value = JSON.parse(
      JSON.stringify(paymentIntentTerminalData)
    )
  }
)

const isPush = ref(false)

watch(
  () => stateTerminal.value.status,
  (to) => {
    if (isPush.value) {
      if (to == 'succeeded') {
        notyf.success('Payment Success')
        openModal.value = false
      } else if (to == 'failed') {
        notyf.error(stateTerminal.value.failure_message)
      } else if (to == 'in_progress') {
        notyf.success('Payment in progress')
      }
    }
  }
)

const estadoTerminal = computed(() => {
  let obj = {
    status: '',
    message: '',
    color: '',
  }

  obj.status = stateTerminal.value.status

  if (obj.status == 'succeeded') {
    obj.color = 'success'
  }

  if (obj.status == 'failed') {
    obj.color = 'danger'
  }

  if (obj.status == 'in_progress') {
    obj.color = 'info'
  }

  return obj
})

const enviarIntentoDePago = () => {
  if (stateTerminal.value.status == 'in_progress') {
    notyf.error('Terminal busy')
    return
  }

  if (stateTerminal.value.status == 'succeeded') {
    notyf.error('Payment processed')
    return
  }

  if (terminalActive.id != null) {
    initPusher()
    isLoaderActive.value = true
    solicitudIntentoPago(terminalActive)
      .then((response: any) => {
        isLoaderActive.value = false
        notyf.success(response.data.message)
        // payment(response)
      })
      .catch((error: any) => {
        isLoaderActive.value = false
      })
  } else {
    console.log('alert. no selecciono el terminal de pago')
  }
}

const payment = (response) => {
  openModal.value = false
  emit('onPayment', {
    amount: props.total,
    payment_type_id: 5,
  })
}

const isLoadingConsultaTerminal = ref(false)
const onConsultaTerminal = (terminal: object) => {
  if (stateTerminal.value.status == 'succeeded') {
    return
  }
  isLoadingConsultaTerminal.value = true
  consultaTerminal({ id: terminal.id })
    .then(() => {
      isLoadingConsultaTerminal.value = false
    })
    .catch(() => {
      isLoadingConsultaTerminal.value = false
    })
}

const onStopTerminal = (terminal: object) => {
  if (stateTerminal.value.status == 'succeeded') {
    return
  }
  isLoadingConsultaTerminal.value = true
  stopTerminal({
    id: terminal.id,
    payment_type_id: paymentIntentTerminal.value.id,
  })
    .then(() => {
      openModal.value = false
      isLoadingConsultaTerminal.value = false
    })
    .catch(() => {
      isLoadingConsultaTerminal.value = false
    })
}

const validaNoClose = computed(() => {
  if (terminalActive.id == null) {
    return false
  }
  return true
})

const onCloseModal = () => {
  if (!validaNoClose.value) {
    openModal.value = false
  }

  // :noclose="false"
}

const initPusher = () => {
  //   console.log('pasa')
  var pusher = new Pusher(import.meta.env.VITE_KEY_PUSHER, {
    cluster: 'us2',
  })

  var channel = pusher.subscribe('terminal_channel')
  channel.bind('terminal_event', function (data) {
    isPush.value = true
    if (data.terminal == null) {
      stateTerminal.value = JSON.parse(JSON.stringify(stateTerminalData))
    } else {
      stateTerminal.value = data.terminal
    }

    if (data.payment_intent == null) {
      paymentIntentTerminal.value = JSON.parse(
        JSON.stringify(paymentIntentTerminalData)
      )
    } else {
      paymentIntentTerminal.value = data.payment_intent
    }
  })
}
</script>

<template>
  <VCard
    @click="onOpenModal"
    :color="props.define_status ? 'info' : undefined"
    class="btn-card w-100 justify-content-center"
  >
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <p class="title is-3">
          <i class="fas fa-mobile" aria-hidden="true"></i>
        </p>
        <p class="title is-5">Terminal</p>
      </div>
      <p class="title is-6">
        <slot name="righttop" />
        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
      </p>
    </div>
  </VCard>
  <VModal
    :title="''"
    :open="openModal"
    actions="center"
    size="big"
    noscroll
    noclose
    @close="onCloseModal"
  >
    <template #content>
      <div v-show="!props.define_status">
        <slot name="modalprev" />
      </div>
      <p>{{ props.define_status }}</p>
      <p v-if="terminales.length == 0">'No terminals found at this location'</p>
      <p>{{ isLoaderActive }}</p>
      <div v-show="props.define_status">
        <div class="mt-4 mx-2" v-if="terminales.length">
          <VLoader size="small" :active="isLoaderActive">
            <VCard
              v-for="(terminal, key) in terminales"
              :key="`terminal-${key}`"
              class="columns is-multiline mb-4"
            >
              <!-- <p>{{ terminal }}</p> -->
              <div class="column is-8">
                <VCard
                  class="p-4 btn-card d-flex justify-content-between"
                  :color="
                    terminalActive.id == terminal.id
                      ? estadoTerminal.color
                      : undefined
                  "
                  @click="onSelectTerminal(terminal)"
                >
                  <div>
                    <p class="title is-1">
                      <i class="lnir lnir-postcard" aria-hidden="true"></i>
                    </p>
                    <p class="title is-5 mb-0">{{ terminal.label }}</p>
                    <p>Status: {{ terminal.status }}</p>
                  </div>
                  <div>
                    <p style="font-size: 10px" class="is-7 mb-0">
                      ID: {{ paymentIntentTerminal.id }}
                    </p>
                    <p style="font-size: 10px" class="is-7 mb-0">
                      Amount: {{ moneda(paymentIntentTerminal.amount / 100) }}
                    </p>
                    <p style="font-size: 10px" class="is-7 mb-0">
                      Date: {{ paymentIntentTerminal.created }}
                    </p>
                    <p style="font-size: 10px" class="is-7 mb-0">
                      PI. Status: {{ paymentIntentTerminal.status }}
                    </p>
                    <p style="font-size: 10px" class="is-7 mb-0">
                      Status: {{ stateTerminal.status }}
                    </p>
                    <div v-if="stateTerminal.status == 'failed'">
                      <VCard
                        class="
                          d-flex
                          justify-content-between
                          mt-4
                          p-2
                          align-items-center
                        "
                      >
                        <p class="title is-7 text-capitalize m-0">retry</p>
                        <p class="title is-6">
                          <i class="lnil lnil-reload"></i>
                        </p>
                      </VCard>
                    </div>
                  </div>
                </VCard>
              </div>
              <div class="column is-4">
                <VLoader size="small" :active="isLoadingConsultaTerminal">
                  <VCard
                    color="warning"
                    outlined
                    @click="onConsultaTerminal(terminal)"
                    class="d-flex justify-content-between mb-4"
                  >
                    <div>
                      <p class="title is-6 mb-0">Terminal status</p>
                    </div>

                    <p class="title is-5">
                      <i class="lnil lnil-reload"></i>
                    </p>
                  </VCard>
                </VLoader>
                <VLoader size="small" :active="isLoadingConsultaTerminal">
                  <VCard
                    color="danger"
                    outlined
                    @click="onStopTerminal(terminal)"
                    class="d-flex justify-content-between"
                  >
                    <div>
                      <p class="title is-6 mb-0">Cancel payment</p>
                    </div>

                    <p class="title is-5">
                      <i class="lnil lnil-trash-can"></i>
                    </p>
                  </VCard>
                </VLoader>
              </div>
              <!---->
            </VCard>
          </VLoader>
        </div>
      </div>
    </template>
    <template #action>
      <!-- <VButton @click="cash = 0" class="d-flex justify-content-center" raised
        >Reset</VButton
      >
      <VButton
        color="success"
        @click="payment"
        :disabled="total > cash"
        class="d-flex justify-content-center"
        raised
        >Confirm</VButton
      > -->
    </template>
  </VModal>
</template>

<style lang="scss"></style>
