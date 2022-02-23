<script setup lang="ts">
import { onMounted, computed } from 'vue'
import moment from 'moment'
import {
  memberMermship,
  memberMembershipsHistory,
  member,
} from '/@src/models/Members.ts'
import { moneda } from '/@src/models/Mixin.ts'

const paymentsMemberchipMember = computed(() => {
  return memberMermship.value.payments
})
const paymentsMemberchipsHistory = computed(() => {
  let arr = []
  memberMembershipsHistory.value.forEach((element) => {
    arr.push({
      membership: element.membership.name,
      payments: element.payments,
    })
  })
  return arr
})

onMounted(() => {
  // console.log()
})
</script>

<template>
  <VCardAdvanced v-if="member">
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Purchases History</h1>
        <p>Edit member's purchases history</p>
      </div>
    </template>
    <template #header-right> </template>
    <template #content>
      <div class="p-6">
        <div class="mt-4">
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">DATE</th>
                <th scope="col">TIME</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">PAYMENT TYPE</th>
                <th scope="col">ITEMS</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody v-if="memberMermship">
              <tr
                v-for="(payment, key) in paymentsMemberchipMember"
                :key="`payment-${key}`"
              >
                <td>{{ moment(payment.created_at).format('DD/MM/YYYY') }}</td>
                <td>{{ moment(payment.created_at).format('HH:mm:ss') }}</td>
                <td>{{ moneda(payment.amount) }}</td>
                <td>{{ payment.payment_type.name }}</td>
                <td>{{ memberMermship.membership.name }}</td>
                <td>{{ payment.status ? 'succedded' : 'error' }}</td>
              </tr>
            </tbody>
            <tbody
              v-for="(payment, key) in paymentsMemberchipsHistory"
              :key="`paymentHistory-${key}`"
            >
              <tr v-for="(p, k) in payment.payments" :key="`pay-${k}`">
                <td>{{ moment(p.created_at).format('DD/MM/YYYY') }}</td>
                <td>{{ moment(p.created_at).format('HH:mm:ss') }}</td>
                <td>{{ moneda(p.amount) }}</td>
                <td>{{ p.payment_type.name }}</td>
                <td>{{ payment.membership }}</td>
                <td>{{ p.status ? 'succeded' : 'error' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
