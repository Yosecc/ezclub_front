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
// import {
//   solicitudIntentoPago,
//   consultaTerminal,
//   stateTerminal,
//   stateTerminalData,
//   paymentIntentTerminal,
//   paymentIntentTerminalData,
//   stopTerminal,
// } from '/@src/models/ManualPayment'

import { queuePayments } from '/@src/models/Subscriptions'

import { locationsSelect, company } from '/@src/models/Companies'
import { moneda, notyf, getInput } from '/@src/models/Mixin'
import { useCookies } from 'vue3-cookies'
import { error } from '/@src/models/Members'
const { cookies } = useCookies()

//import Swal from 'sweetalert2'

const emit = defineEmit(['onPayment'])

const openModal = ref(false)

const props = defineProps({
  id_seleccionados: {
    type: Object,
    required: true,
  },
  suscripciones: {
    type: Object,
  },
})

const suscripcionesSeleccionadas = computed(() => {
  if (Object.keys(props.suscripciones).length) {
    let arr = Object.keys(props.suscripciones).map(function (key) {
      return props.suscripciones[key]
    })

    return arr.filter((e) => props.id_seleccionados.data.includes(e.id))
  }
  return []
})

const terminales = ref([])

const onOpenModal = () => {
  openModal.value = true
}

const isLoaderActive = ref(false)

watch(
  () => openModal.value,
  (to) => {
    console.log('cambio,modal', to)
  }
)

const payment = () => {
  if (
    confirm(
      'This action could result in charges to the member. do you wish to continue?'
    )
  ) {
    isLoaderActive.value = true
    queuePayments({
      data: props.id_seleccionados,
    })
      .then((response) => {
        onCloseModal()
        emit('onPayment', {})
        isLoaderActive.value = true
      })
      .catch((error) => {
        onCloseModal()
        emit('onPayment', {})
        isLoaderActive.value = true
      })
  } else {
    onCloseModal()
  }
  // openModal.value = false
}

const onCloseModal = () => {
  openModal.value = false
}
</script>

<template>
  <div class="d-flex align-items-center">
    <p class="mb-0 mr-3">Selected: {{ props.id_seleccionados.data.length }}</p>
    <VButton @click="onOpenModal" color="primary">Payment Automatic</VButton>
  </div>
  <VModal
    :title="`Selected Subscription: ${props.id_seleccionados.data.length}`"
    :open="openModal"
    actions="center"
    size="big"
    noclose
    @close="onCloseModal"
  >
    <template #content>
      <p class="title is-5">
        Please confirm the selection of the following subscriptions.
      </p>
      <p class="title is-7">
        When confirming, a work queue will be entered to carry out the automatic
        collections, keep in mind that the change of status or result of the
        payment attempt may take a few minutes to update.
      </p>
      <p class="title" style="font-size: 15px">
        Click the confirm button to continue
      </p>

      <subscription-list
        v-if="suscripcionesSeleccionadas.length"
        :suscripciones="suscripcionesSeleccionadas"
        :filters="''"
        :isselectedmultiple="false"
        :ispaginator="false"
        class="mt-4"
      />
    </template>

    <template #action>
      <!-- <VButton @click="cash = 0" class="d-flex justify-content-center" raised
        >Reset</VButton
      >-->
      <VLoader :active="isLoaderActive">
        <VButton
          color="success"
          @click="payment"
          class="d-flex justify-content-center"
          raised
          >Confirm</VButton
        >
      </VLoader>
    </template>
  </VModal>
</template>

<style lang="scss"></style>
