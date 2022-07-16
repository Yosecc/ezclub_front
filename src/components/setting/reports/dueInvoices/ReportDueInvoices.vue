<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getStripeReportsDue, downloadReports } from '/@src/models/Reports'
import moment from 'moment'
import VLoader from '../../../base/loader/V-Loader.vue'
import { notyf } from '/@src/models/Mixin'
import VButton from '/@src/components/base/button/V-Button.vue'

const reports = ref([])
const loading = ref(false)

onMounted(async () => {
  handleReports()
})

const handleSearch = async (data: object) => {
  handleReports(data)
}

const handleReports = async (data: object = {}) => {
  loading.value = true
  try {
    const response = await getStripeReportsDue(data)
    reports.value = response.data
  } catch (error) {
    notyf.error(error.message)
  } finally {
    loading.value = false
  }
}

const payInvoice = (invoiceID: string) => {
  console.log(invoiceID)
}
</script>

<template>
  <VCard>
    <div class="mt-4">
      <VLoader class="is-12" center size="small" :active="loading">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Customer</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="reports && !loading">
            <tr
              v-for="(transaction, key) in reports.transactions"
              :key="`transaction-${key}`"
            >
              <td>{{ transaction.description }}</td>
              <td>{{ transaction.amount / 100 }}</td>
              <td>{{ transaction.customer }}</td>
              <td>{{ transaction.status }}</td>
              <td>
                {{ moment(transaction.created_at).format('MM/DD/YYYY') }}
              </td>
              <td>
                <VButton
                  color="primary"
                  @click="payInvoice(transaction.id)"
                  outlined
                >
                  Pay
                </VButton>
              </td>
            </tr>
          </tbody>
          <tbody v-if="reports.length < 1 && !loading">
            <tr>
              <td></td>
              <td>No transactions</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </VLoader>
    </div>
  </VCard>
</template>
