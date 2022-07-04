<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getStripeReports, downloadReports } from '/@src/models/Reports'
import moment from 'moment'
import VLoader from '../../../base/loader/V-Loader.vue'
import { notyf } from '/@src/models/Mixin'

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
    const response = await getStripeReports(data)
    reports.value = response.data
  } catch (error) {
    notyf.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <VCard>
    <stripeBalance v-if="reports.balance" :balance="reports.balance" />
    <div>
      <stripeFilterReport @search="handleSearch" :loading="loading" />
    </div>
    <div class="mt-4">
      <VLoader class="is-12" center size="small" :active="loading">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Customer</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody v-if="reports && !loading">
            <tr
              v-for="(transaction, key) in reports.transactions"
              :key="`transaction-${key}`"
            >
              <td>{{ transaction.id }}</td>
              <td>{{ transaction.description }}</td>
              <td>{{ transaction.amount / 100 }}</td>
              <td>{{ transaction.customer }}</td>
              <td>{{ transaction.status }}</td>
              <td>
                {{ moment(transaction.created_at).format('MM/DD/YYYY') }}
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
