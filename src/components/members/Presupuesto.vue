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
import moment from 'moment'
const props = defineProps({
  presupuesto: {
    type: Object,
    required: true,
  },
})

onMounted(() => {
  console.log(props.presupuesto)
})
</script>

<template>
  <VCard class="mb-4" v-if="true">
    <table class="table is-hoverable is-striped is-fullwidth">
      <thead>
        <tr>
          <th scope="col">Membership</th>
          <th scope="col">Description</th>
          <th style="text-align: center" scope="col">Quantity</th>
          <th style="text-align: right" scope="col">Cost</th>
          <th style="text-align: right" scope="col">Import</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in presupuesto.items" :key="`membresia-${key}`">
          <td>
            <p>{{ item.description }}</p>
            <p v-if="item.date_between">
              <small
                >{{ item.date_between.start }} -
                {{ item.date_between.end }}</small
              >
            </p>
          </td>
          <td style="text-transform: capitalize">
            {{ item.interval_count }} {{ item.type }}
          </td>
          <td style="text-align: center">{{ item.quantity }}</td>
          <td style="text-align: right">{{ moneda(item.amount_subtotal) }}</td>
          <td style="text-align: right">
            <p>
              <small v-if="item.discount"
                >({{ item.discount.value }} off)</small
              >
              {{ moneda(item.amount_total) }}
            </p>
          </td>
        </tr>
        <tr style="text-align: right">
          <td colspan="4" style="text-align: right"><b>Subtotal</b></td>
          <td>
            {{ moneda(presupuesto.subtotal) }}
          </td>
        </tr>
        <!-- <tr style="text-align: right" v-if="presupuesto.discount">
          <td colspan="4">
            {{ presupuesto.discount.name }}
            <span v-if="presupuesto.discount.type == 'percentaje'">
              ( {{ presupuesto.discount.value }}% off )
            </span>
            <span v-else> ( ${{ presupuesto.discount.value }} off ) </span>
          </td>
          <td>
            -
            {{
              moneda(
                presupuesto.totales.upfront.total_details.amount_discount / 100
              )
            }}
          </td>
        </tr> -->
        <tr style="text-align: right">
          <td colspan="4" style="text-align: right">
            Tax {{ presupuesto.tax.percentage }}%
          </td>
          <td>{{ moneda(presupuesto.tax.value) }}</td>
        </tr>
        <tr style="text-align: right">
          <td colspan="4"><b>Total to pay today</b></td>
          <td style="font-size: 20px; font-weight: 900">
            {{ moneda(presupuesto.total) }}
          </td>
        </tr>
        <tr style="text-align: right">
          <td colspan="4">
            <p><b>Recurring Payment</b></p>
            <p>
              <small
                >Next payment date:
                {{ presupuesto.fechas.next_payment_date }}</small
              >
            </p>
          </td>
          <td>{{ moneda(presupuesto.recurrente) }}</td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </VCard>
</template>
