<script setup lang="ts">
import { onMounted, computed } from 'vue'
import moment from 'moment'
import {
  memberMermship,
  memberMembershipsHistory,
  member,
  getListInvoices,
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

onMounted(async () => {
  await getListInvoices(member.value.id)
})
const onMethodPayment = (MethodPayment) => {}
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
      <VCard class="mb-4">
        <p class="title is-5">Card List</p>
        <MemberCards
          @onMethodPayment="onMethodPayment"
          :method_default="member.user.pm_last_four"
          :show-new-card="false"
        />
      </VCard>
      <VCard class="p-">
        <div class="mt-4">
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Created</th>
                <th scope="col">Start Period</th>
                <th scope="col">End Period</th>
                <th scope="col">Mount</th>
                <th scope="col">Download</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody v-if="memberMermship">
              <tr
                v-for="(invoice, key) in member.invoices"
                :key="`invoice-${key}`"
              >
                <td>{{ invoice.subscription ?? 'Others' }}</td>
                <td>{{ moment(invoice.created).format('MM/DD/YYYY') }}</td>
                <td>{{ moment(invoice.period_start).format('MM/DD/YYYY') }}</td>
                <td>{{ moment(invoice.period_end).format('MM/DD/YYYY') }}</td>

                <td>{{ moneda(invoice.total / 100) }}</td>
                <td>
                  <a :href="invoice.invoice_pdf" download>
                    <VButton>
                      <i class="fas fa-download" aria-hidden="true"></i>
                    </VButton>
                  </a>
                </td>

                <td>{{ invoice.status == 'paid' ? 'Paid' : 'error' }}</td>
              </tr>
            </tbody>
            <!-- <tbody
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
            </tbody> -->
          </table>
        </div>
      </VCard>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
