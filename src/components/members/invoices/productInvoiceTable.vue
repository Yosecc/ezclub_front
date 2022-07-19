<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue'

import moment from 'moment'
import {
  memberMermship,
  memberMembershipsHistory,
  member,
  getListInvoices,
} from '/@src/models/Members.ts'
import { moneda } from '/@src/models/Mixin.ts'

const invoices = reactive({
  data: [],
})

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
  const filter = { invoice_type: 2 }
  const { data } = await getListInvoices(member.value.id, filter)
  invoices.data = data.invoices
})
</script>
<template>
  <VCardAdvanced v-if="member">
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Product Invoice History</h1>
        <p></p>
      </div>
    </template>
    <template #header-right> </template>
    <template #content>
      <!-- <memberCreditCard /> -->

      <VCard class="my-4">
        <p>Invoices</p>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Created</th>
              <th scope="col">Amount</th>
              <th scope="col">Method</th>
              <th scope="col">Download</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody v-if="member.subscription && invoices.data">
            <tr v-for="(invoice, key) in invoices.data" :key="`invoice-${key}`">
              <td>
                <p>{{ invoice.description }}</p>
                <!-- <span
                  v-for="(item, keyy) in JSON.parse(invoice.billing_reason)"
                  :key="`invo-${keyy}`"
                >
                  <VTag v-if="item" class="mr-1 mb-1" :label="item" />
                </span> -->
              </td>
              <!-- <td> -->
              <!-- <VTag class="mr-2" :label="invoice.billing_reason" /> -->
              <!-- </td> -->

              <td>
                {{ moment(invoice.created).format('MM/DD/YYYY') }}
              </td>
              <td>{{ moneda(invoice.total / 100) }}</td>
              <td>{{ invoice.collection_method }}</td>
              <td>
                <a :href="invoice.invoice_pdf" target="_blank">
                  <VButton>
                    <i class="fas fa-download" aria-hidden="true"></i>
                  </VButton>
                </a>
              </td>
              <td>
                <VTag class="mr-1 mb-1" :label="invoice.status" />

                <!-- <VTag
                  class="mr-1 mb-1"
                  :label="invoice.payments_intents[0].status"
                /> -->
              </td>
            </tr>
          </tbody>
          <tbody
            v-else-if="
              member.membership_members &&
              member.membership_members.invoice_local
            "
          >
            <tr
              v-for="(invoice, key) in member.membership_members.invoice_local"
              :key="`invoice-${key}`"
            >
              <td>Subscription</td>
              <td>
                {{ moment(invoice.created).format('MM/DD/YYYY') }}
              </td>
              <td>
                <span v-if="invoice.period_start">
                  {{ moment(invoice.period_start).format('MM/DD/YYYY') }}
                </span>
                <span v-else></span>
              </td>
              <td>
                <span v-if="invoice.period_end">
                  {{ moment(invoice.period_end).format('MM/DD/YYYY') }}
                </span>
                <span v-else></span>
              </td>
              <td>{{ moneda(invoice.amount / 100) }}</td>
              <td>Cash</td>
              <td>
                <!-- <a :href="invoice.invoice_pdf" target="_blank">
                  <VButton>
                    <i class="fas fa-download" aria-hidden="true"></i>
                  </VButton>
                </a> -->
              </td>
              <td>
                {{ invoice.status ? 'paid' : 'incomplete' }}
                <!-- <br /> -->
                <!-- <small>{{ invoice.description_status }}</small> -->
              </td>
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
      </VCard>
      <VCard class="mb-4" v-if="false">
        <p>Payment Attempts</p>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Created</th>
              <!-- <th scope="col">Start Period</th> -->
              <!-- <th scope="col">End Period</th> -->
              <th scope="col">Mount</th>
              <th scope="col">Method</th>
              <th scope="col">Download</th>
              <th scope="col">Status</th>
              <th scope="col">Status Description</th>
            </tr>
          </thead>
          <tbody v-if="memberMermship">
            <tr v-for="(invoice, key) in member.pagos" :key="`pagos-${key}`">
              <td>{{ invoice.description }}</td>
              <td>
                {{ moment(invoice.created).format('MM/DD/YYYY') }}
              </td>

              <td>{{ moneda(invoice.total / 100) }}</td>
              <td>{{ invoice.collection_method }}</td>
              <td>
                <a :href="invoice.invoice_pdf" target="_blank">
                  <VButton>
                    <i class="fas fa-download" aria-hidden="true"></i>
                  </VButton>
                </a>
              </td>
              <td>{{ invoice.status }}</td>
              <td>{{ invoice.status_description }}</td>
            </tr>
          </tbody>
        </table>
      </VCard>
    </template>
  </VCardAdvanced>
</template>
