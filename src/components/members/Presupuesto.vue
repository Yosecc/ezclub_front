<script setup lang="ts">
import {
  computed,
  ref,
  reactive,
  defineProps,
  defineEmit,
  watch,
  onMounted,
} from 'vue'

import { moneda } from '/@src/models/Mixin.ts'
const props = defineProps({
  presupuesto: {
    type: Object,
    required: true,
  },
})

const totales = computed(() => {
  //!props.presupuesto.discount
  // if(true){
  return {
    tax: moneda(
      props.presupuesto.totales.upfront.total_details.amount_tax * 10
    ),
    total: moneda(props.presupuesto.totales.upfront.amount_total * 10),
    recurrente: moneda(props.presupuesto.totales.recurring.amount_total * 10),
  }
  // }else{

  //   let subtotal = props.presupuesto.totales.upfront.amount_subtotal * 10

  //   let tax = 0
  //   let descuento = 0
  //   let total = 0
  //   if(props.presupuesto.discount.type == 'percentaje'){
  //     descuento = (subtotal * props.presupuesto.discount.value) / 100
  //     tax = (descuento * 7) / 100

  //     total = (subtotal - descuento) + tax
  //   }

  //   return {
  //     descuento: descuento,
  //     tax: moneda(tax),
  //     total: moneda(total),
  //     recurrente: null
  //   }
  // }
})
</script>

<template>
  <VCard class="mb-4" v-if="presupuesto">
    <h1 class="title is-6"></h1>
    <table class="table is-hoverable is-striped is-fullwidth">
      <thead>
        <tr>
          <th scope="col">Membership Name</th>
          <th scope="col">Plan</th>
          <th scope="col">Quantity</th>
          <th scope="col">Cost</th>
          <th scope="col">Import</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(membresia, key) in presupuesto.membresias"
          :key="`membresia-${key}`"
        >
          <td>{{ membresia.description }}</td>
          <td class="text-capitalize">
            {{ membresia.type ? membresia.type : 'Initiation Fee' }}
          </td>
          <td>{{ membresia.quantity }}</td>
          <td style="text-align: right">
            {{ moneda((membresia.amount_subtotal / membresia.quantity) * 10) }}
          </td>
          <td style="text-align: right">
            {{ moneda(membresia.amount_subtotal * 10) }}
          </td>
        </tr>

        <tr v-if="presupuesto.discount">
          <td colspan="4">
            {{ presupuesto.discount.name }}
            <span v-if="presupuesto.discount.type == 'percentaje'">
              ( {{ presupuesto.discount.value }}% off )
            </span>
            <span v-else> ( ${{ presupuesto.discount.value }} off ) </span>
          </td>
          <td>
            <!-- - {{ moneda(totales.descuento) }} -->
          </td>
        </tr>
        <tr style="text-align: right">
          <td colspan="4" style="text-align: right"><b>Subtotal</b></td>
          <td>
            {{ moneda(presupuesto.totales.upfront.amount_subtotal * 10) }}
          </td>
        </tr>

        <tr style="text-align: right">
          <td colspan="4" style="text-align: right">Tax 7%</td>
          <td>
            {{ totales.tax }}
          </td>
        </tr>

        <tr style="text-align: right">
          <td colspan="4" style="text-align: right"><b>Total to pay</b></td>
          <td>
            {{ totales.total }}
          </td>
        </tr>
        <tr v-if="presupuesto.totales.recurring" style="text-align: right">
          <td v-if="totales.recurrente" colspan="4" style="text-align: right">
            Recurring total
          </td>
          <td>{{ totales.recurrente }}</td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </VCard>
</template>
