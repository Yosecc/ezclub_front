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
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'
import {
  upgradeSuscripcion,
  calculoSuscripcionRestante,
  restartSolicitud,
} from '/@src/models/Subscriptions'
import moment from 'moment'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const emit = defineEmit(['reload'])

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const isLoaderActive = ref(false)

const data = reactive({
  next_payment_date: '',
  amount: 0,
  amounts_not_ids: [],
})

const onAction = () => {
  centeredActionsOpen.value = true
  calculoSuscripcionRestante(props.suscripcion.id)
    .then((response) => {
      data.next_payment_date = response.data.next_payment_date
      data.amount = response.data.amount
      data.amounts_not_ids = response.data.amounts_not_ids
    })
    .catch((error) => {
      // isLoaderActive.value = false
    })
}

onMounted(() => {})

const centeredActionsOpen = ref(false)
const closeModal = () => {
  centeredActionsOpen.value = false
}

const dataSend = ref(null)
const onReady = (data: any) => {
  dataSend.value = data
  console.log('ready', data)
  isPaymentOptions.value = true
}

const presupuesto = ref(null)
const isPaymentOptions = ref(false)

const amountTotal = computed(() => {
  let total = presupuesto.value.total

  total = total - data.amount

  if (total < -0) {
    total = 0
  }

  return total
})

watch(
  () => presupuesto.value,
  (to) => {
    // if (to == null) {
    isPaymentOptions.value = false
    // }
  }
)

watch(centeredActionsOpen, (to) => {
  console.log('cambia', to)
  restartSolicitud()
})

const onChangeMembership = () => {
  isPaymentOptions.value = false
}

const onPayment = (data: any) => {
  const obj3 = Object.assign({}, data, dataSend.value)
  isLoaderActive.value = true

  upgradeSuscripcion(props.suscripcion.id, obj3)
    .then((response) => {
      isLoaderActive.value = false
      closeModal()
      emit('reload')
      //   window.location.reload()
    })
    .catch((error) => {
      isLoaderActive.value = false
    })
}
</script>

<template>
  <!-- <VLoader class="h-100" size="small" :active="isLoaderActive"> -->
  <VCard
    color="primary"
    outlined
    @click="onAction"
    class="
      mr-4
      btn-card
      text-center
      px-2
      h-100
      d-flex
      align-items-center
      justify-content-center
    "
    style="font-size: 14px"
  >
    <p><b>Upgrade Subscription</b></p>
  </VCard>

  <VModal
    :open="centeredActionsOpen"
    size="big"
    actions="center"
    noscroll
    @close="closeModal"
  >
    <template #content>
      <div>
        <VCard class="mb-4">
          <p class="title is-7 mb-2">
            Next payment date:
            {{
              moment(data.next_payment_date, 'MM-DD-YYYY').format('MM-DD-YYYY')
            }}
          </p>
          <p class="title is-7 mb-2">Remaining Amount</p>
          <p class="title is-3">{{ moneda(data.amount) }}</p>
        </VCard>

        <membershipsGrid
          @onReady="onReady"
          v-model="presupuesto"
          @changeMembership="onChangeMembership"
          :is_config="false"
          :is_recurrence="false"
          :restar="{ text: 'Remaining Amount', amount: data.amount }"
          :amounts_not_ids="data.amounts_not_ids"
          class="mb-4"
        />
        <!-- <p>{{ presupuesto }}fgff</p> -->
        <subscription-payment-methods-select
          v-if="isPaymentOptions"
          :methods="['debit_automatic', 'cash', 'terminal']"
          :suscripcion="props.suscripcion"
          :amount="amountTotal"
          :is-loader-active="isLoaderActive"
          @onPayment="onPayment"
          class="mt-4"
        />
      </div>
    </template>
    <template #action>
      <!-- <VButton color="primary" @click="onAction"> Confirm</VButton> -->
    </template>
  </VModal>
  <!-- </VLoader> -->
</template>

<style lang="scss"></style>
