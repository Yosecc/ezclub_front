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
import { remplazarSuscripcion } from '/@src/models/Subscriptions'
import moment from 'moment'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const emit = defineEmit(['reload'])

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: 'new',
  },
})

const isLoaderActive = ref(false)

const data = reactive({
  next_payment_date: '',
  amount: 0,
  amounts_not_ids: [],
})

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

const onChangeMembership = () => {
  isPaymentOptions.value = false
}

const onPayment = (data: any) => {
  const obj3 = Object.assign({}, data, dataSend.value)
  isLoaderActive.value = true

  if (props.type == 'reprocess') {
    remplazarSuscripcion(props.suscripcion.id, obj3)
      .then((response) => {
        isLoaderActive.value = false
        emit('reload')
        // window.location.reload()
      })
      .catch((error) => {})
  }
}
</script>

<template>
  <div>
    <p class="title is-4 mt-4">New subscription</p>
    <membershipsGrid
      @onReady="onReady"
      v-model="presupuesto"
      @changeMembership="onChangeMembership"
      class="mb-4"
    />
    <!-- <p>{{ presupuesto }}fgff</p> -->
    <subscription-payment-methods-select
      v-if="isPaymentOptions && presupuesto"
      :methods="['debit_automatic', 'cash', 'terminal']"
      :suscripcion="props.suscripcion"
      :amount="presupuesto.total"
      :is-loader-active="isLoaderActive"
      @onPayment="onPayment"
      class="mt-4"
    />
  </div>
</template>

<style lang="scss"></style>
