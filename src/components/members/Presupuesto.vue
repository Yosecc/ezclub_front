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
</script>

<template>
  <VCard class="mb-4" v-if="presupuesto">
    <!-- <h1 @click="window.print()" class="title is-6">PRINT</h1> -->
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
            {{ moneda(membresia.amount_subtotal / membresia.quantity / 100) }}
          </td>
          <td style="text-align: right">
            {{ moneda(membresia.amount_subtotal / 100) }}
          </td>
        </tr>
        <tr style="text-align: right">
          <td colspan="4" style="text-align: right"><b>Subtotal</b></td>
          <td>
            {{ moneda(presupuesto.totales.upfront.amount_subtotal / 100) }}
          </td>
        </tr>
        <tr style="text-align: right" v-if="presupuesto.discount">
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
        </tr>

        <tr style="text-align: right">
          <td colspan="4" style="text-align: right">Tax 7%</td>
          <td>
            {{
              moneda(presupuesto.totales.upfront.total_details.amount_tax / 100)
            }}
          </td>
        </tr>

        <tr style="text-align: right">
          <td colspan="4" style="text-align: right">
            <p>
              <small
                >Scheduled Membership:
                {{ moment(presupuesto.schedules).format('MM-DD-YYYY') }}</small
              >
            </p>
            <b>Total to pay</b>
          </td>
          <td>
            {{ moneda(presupuesto.totales.upfront.amount_total / 100) }}
          </td>
        </tr>

        <tr v-if="presupuesto.totales.recurring" style="text-align: right">
          <td colspan="4" style="text-align: right">Recurring total</td>
          <td>
            {{ moneda(presupuesto.totales.recurring.amount_total / 100) }}
          </td>
        </tr>
      </tbody>
    </table>

    <slot></slot>
  </VCard>
</template>
