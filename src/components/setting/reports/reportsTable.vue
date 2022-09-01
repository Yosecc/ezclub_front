<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getReports, downloadReports } from '/@src/models/Reports.ts'
import moment from 'moment'
import VLoader from '../../base/loader/V-Loader.vue'
import { notyf } from '/@src/models/Mixin.ts'

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
    notyf.error(error.message)
  } finally {
    loading.value = false
  }
}

const handleDownload = async (data: object = {}) => {
  loading.value = true
  try {
    const response = await downloadReports({
      ...data,
      report_export_type:
        data.report_type == 'Products' ? 'products' : 'memberships',
    })
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'reports.xlsx') //or any other extension
    document.body.appendChild(link)
    link.click()
  } catch (error) {
    notyf.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <VCard>
    <div>
      <filterReportsTable
        @search="handleSearch"
        :loading="loading"
        @download="handleDownload"
      />
    </div>
    <div class="is-12 d-flex justify-content-end mt-5">
      <p>
        <strong>Total:</strong>
        {{ reports.total_amount }}
      </p>
    </div>
    <div class="mt-1">
      <VLoader class="is-12" center size="small" :active="loading">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Member Card ID</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Payment Type</th>
              <th scope="col">Invoice Type</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody v-if="reports && !loading">
            <tr v-for="(report, key) in reports.data" :key="`report-${key}`">
              <td>{{ report.id }}</td>
              <td>{{ `${report.first_name} ${report.last_name}` }}</td>
              <td>{{ `${report.bar_code}` }}</td>
              <td>{{ `${report.description}` }}</td>
              <td>
                {{ moment(report.created_at).format('MM/DD/YYYY') }}
              </td>
              <td>{{ report.payment_type }}</td>
              <td>{{ report.invoice_type }}</td>
              <td>{{ `$ ${report.amount}` }}</td>
            </tr>
          </tbody>
        </table>
      </VLoader>
    </div>
  </VCard>
</template>
