<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMembershipReports, downloadReports } from '/@src/models/Reports'
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
    const response = await getMembershipReports(data)
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
      report_export_type: 'memberships',
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
      <membershipsFilterReport
        @search="handleSearch"
        :loading="loading"
        @download="handleDownload"
      />
    </div>
    <div class="is-12 d-flex justify-content-end mt-5">
      <p><strong>Total:</strong> {{ reports.length }}</p>
    </div>
    <div class="mt-1">
      <VLoader class="is-12" center size="small" :active="loading">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Category</th>
              <th scope="col">Full Name</th>
              <th scope="col">Member Card ID</th>
              <th scope="col">Membership</th>
              <th scope="col">payment Type</th>
              <th scope="col">Start Day</th>
              <th scope="col">Cancel Day</th>
              <th scope="col">Recurrence</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody v-if="reports && !loading">
            <tr v-for="(report, key) in reports" :key="`report-${key}`">
              <td>{{ report.status }}</td>
              <td>{{ report.category }}</td>
              <td>
                {{
                  `${report.first_name} ${report.second_name ?? ''} ${
                    report.last_name
                  }`
                }}
              </td>
              <td>{{ report.bar_code }}</td>
              <td>{{ report.membership }}</td>
              <td>{{ report.payment_type }}</td>
              <td>{{ moment(report.start_day).format('MM/DD/YYYY') }}</td>
              <td>{{ report.cancel_day }}</td>
              <td>{{ report.recurrence }}</td>
              <td>{{ report.amount }}</td>
            </tr>
          </tbody>
          <tbody v-if="reports.length < 1 && !loading">
            <tr>
              <td></td>
              <td>No memberships</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </VLoader>
    </div>
  </VCard>
</template>
