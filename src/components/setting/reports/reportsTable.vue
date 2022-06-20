<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getReports } from '/@src/models/Reports.ts'
import moment from 'moment'
import VLoader from '../../base/loader/V-Loader.vue'

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
    const response = await getReports(data)
    reports.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <VCard>
    <div>
      <filterReportsTable @search="handleSearch" :loading="loading" />
    </div>
    <div class="mt-4">
      <VLoader class="is-12" center size="small" :active="loading">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Membership</th>
              <th scope="col">Date</th>
              <th scope="col">Payment Type</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody v-if="reports.data && !loading">
            <tr v-for="(report, key) in reports.data" :key="`report-${key}`">
              <td>{{ report.id }}</td>
              <td>{{ `${report.first_name} ${report.last_name}` }}</td>
              <td>{{ `${report.membership}` }}</td>
              <td>
                {{ moment(report.created_at).format('MM/DD/YYYY') }}
              </td>
              <td>{{ report.payment_type }}</td>
              <td>{{ `${report.amount} $` }}</td>
            </tr>
          </tbody>
        </table>
      </VLoader>
    </div>
  </VCard>
</template>
