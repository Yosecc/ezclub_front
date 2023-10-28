<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  computed,
  reactive,
  defineProps,
  defineEmit,
} from 'vue'
import moment from 'moment'
import { moneda, monedaDecimal } from '/@src/models/Mixin'
import * as pieChart from '/@src/models/v2/reports/pieChart'
import * as barChart from '/@src/models/v2/reports/barChart'

const payments = ref(null)

const props = defineProps({
  payments: { type: Object, required: true, default: null },
})

const emit = defineEmit(['search'])

// const grupoSeleccionado = ref(null)
// const reload = ref(true)

// watch(grupoSeleccionado, () => {
//   reload.value = false
//   setTimeout(() => {
//     reload.value = true
//   }, 100)
// })

onMounted(() => {
  payments.value = props.payments
})

/**
 *
 */

const paymentType = computed(() => {
  if (payments.value) {
    return payments.value.payment_type
  }
  return null
})

/**
 *
 */
const paymentTypeGrafico = computed(() => {
  if (paymentType.value) {
    let arr = []
    for (var i in paymentType.value) {
      arr.push([i, paymentType.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Payment Type`
    chart.options.pie = pieConfig()
    return chart
  }
  return null
})

const paymentTypeAmountGrafico = computed(() => {
  if (paymentType.value) {
    let arr = []
    for (var i in paymentType.value) {
      arr.push([i, paymentType.value[i].payments.amount])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Payment Type Amount`
    chart.options.pie = pieConfig('$')
    return chart
  }
  return null
})

/**
 *
 */

const isTable = ref(false)

const onChangeFilter = () => {
  emit('search', {
    fecha_inicio: payments.value.fecha_inicio,
    fecha_fin: payments.value.fecha_fin,
    payment_method_id: payments.value.payment_method_id,
  })
}

const pieConfig = (pre = '') => {
  return {
    label: {
      format: function (value, ratio, id) {
        return `${pre}${value}`
      },
    },
  }
}
</script>

<template>
  <div class="columns is-multiline column is-12">
    <!-- <p>{{ payments }}</p> -->
    <div class="column is-12" v-if="payments">
      <VCard>
        <p class="title is-5">Payments Subscriptions</p>
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <VField class="mr-2">
              <label>Date start</label>
              <VControl icon="feather:calendar">
                <input
                  class="input v-input"
                  type="date"
                  v-model="payments.fecha_inicio"
                  @change="onChangeFilter"
                />
              </VControl>
            </VField>
            <VField class="mr-2">
              <label>Date end</label>
              <VControl icon="feather:calendar">
                <input
                  class="input v-input"
                  type="date"
                  v-model="payments.fecha_fin"
                  @change="onChangeFilter"
                />
              </VControl>
            </VField>
            <VField class="mr-2">
              <label>Payment method</label>
              <VControl icon="fa fa-list">
                <select
                  name=""
                  id=""
                  @change="onChangeFilter"
                  v-model="payments.payment_method_id"
                  class="v-input input"
                >
                  <option value="">All</option>
                  <option value="1">Cash</option>
                  <option value="3">Debit Card</option>
                  <option value="5">BBPOS</option>
                </select>
              </VControl>
            </VField>
          </div>
          <div>
            <p><b>Payments:</b> {{ payments.count }}</p>
            <p><b>Amount:</b> {{ moneda(payments.payments.amount) }}</p>
          </div>
        </div>
        <div class="column is-12 columns is-multiline">
          <div class="column is-6">
            <VCard v-if="paymentType && paymentTypeGrafico">
              <V-BillboardJS :options="paymentTypeGrafico.options" />
            </VCard>
          </div>
          <div class="column is-6">
            <VCard v-if="paymentType && paymentTypeAmountGrafico">
              <V-BillboardJS :options="paymentTypeAmountGrafico.options" />
            </VCard>
          </div>
        </div>
        <div class="column is-12">
          <VCard>
            <div class="d-flex justify-content-between mb-4">
              <VButton color="primary" @click="isTable = !isTable">
                <i class="fa fa-eye"></i> View Payments
              </VButton>

              <p class="title is-5">{{ payments.count }}</p>
            </div>
            <table class="table is-hoverable is-fullwidth" v-if="isTable">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Suscription</th>
                  <th scope="col">Member</th>
                  <th scope="col" class="is-end">User</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, key) in payments.payments.data"
                  :key="`payment-${key}`"
                >
                  <td>{{ item.id }}</td>
                  <td>{{ item.payment_type_id }}</td>
                  <td>{{ item.status ? 'success' : 'error' }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.created_at }}</td>
                  <td>{{ item.suscripcion.membership }}</td>
                  <td>{{ item.suscripcion.member }}</td>
                  <td class="is-end">
                    {{ item.user }}
                  </td>
                </tr>
              </tbody>
            </table>
          </VCard>
        </div>
      </VCard>
    </div>
  </div>
</template>
