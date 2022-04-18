<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import moment from 'moment'
import {
  memberMermship,
  membershipsData,
  member,
  memberMembershipsHistory,
  putMembership,
  cancelMembershipMembers,
  isSolvente,
  setInputsEvents,
  storeFirma,
  getPresupuesto,
} from '/@src/models/Members.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputValuesData,
  perpareDataInputs,
  setInputModelData,
  notyf,
  getInput,
  monedaDecimal,
} from '/@src/models/Mixin.ts'
import { Api, API_WEB_URL } from '/@src/services'
import { recurrences } from '/@src/models/Recurrences.ts'

const props = defineProps({
  presupuesto: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <VCard class="mb-4" v-if="presupuesto">
    <table class="table is-hoverable is-striped is-fullwidth">
      <thead>
        <tr>
          <th scope="col">Membership Name</th>
          <th scope="col">Plan</th>
          <th scope="col">Cost</th>
          <!-- <th scope="col">Initiation Fee</th> -->
          <!-- <th scope="col">Discount</th> -->
          <!-- <th scope="col">Taxes</th> -->
          <th scope="col">Import</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ presupuesto.name }}</td>
          <td>{{ presupuesto.interval }}</td>
          <td>
            {{ monedaDecimal(presupuesto.membership.amount_subtotal * 10) }}
          </td>
          <td style="text-align: right">
            {{ monedaDecimal(presupuesto.membership.amount_subtotal * 10) }}
          </td>
        </tr>
        <tr v-if="presupuesto.is_initiation_fee">
          <td>{{ presupuesto.name }}</td>

          <td>Initiation Fee</td>
          <td>{{ monedaDecimal(presupuesto.initiation_fee) }}</td>

          <td style="text-align: right">
            {{ monedaDecimal(presupuesto.initiation_fee) }}
          </td>
        </tr>
        <tr style="text-align: right">
          <td colspan="3" style="text-align: right"><b>Subtotal</b></td>
          <td>{{ monedaDecimal(presupuesto.amount_subtotal * 10) }}</td>
        </tr>
        <tr style="text-align: right">
          <td colspan="3" style="text-align: right">
            Tax {{ presupuesto.percentage }}%
          </td>
          <td>{{ monedaDecimal(presupuesto.amount_tax * 10) }}</td>
        </tr>

        <tr style="text-align: right">
          <td colspan="3" style="text-align: right"><b>Total</b></td>
          <td>{{ monedaDecimal(presupuesto.amount_total * 10) }}</td>
        </tr>
        <tr style="text-align: right">
          <td colspan="3" style="text-align: right">Total recurrente</td>
          <td>{{ monedaDecimal(presupuesto.membership.amount_total * 10) }}</td>
        </tr>
      </tbody>
    </table>

    <slot name="k"></slot>

    <!--  <stripeAddCardComponent
      v-if="clientSecret"
      :clientSecret="clientSecret"
      :membership_member_id="membership_member.id"
    /> -->
  </VCard>
</template>

<style lang="scss" scope></style>
