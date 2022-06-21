<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMemberReports } from '/@src/models/Reports'
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
    const response = await getMemberReports(data)
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
    <div>
      <memberFilterReportsTable @search="handleSearch" :loading="loading" />
    </div>
    <div class="mt-4">
      <VLoader class="is-12" center size="small" :active="loading">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody v-if="reports && !loading">
            <tr v-for="(report, key) in reports" :key="`report-${key}`">
              <td>{{ report.id }}</td>
              <td>
                {{
                  `${report.first_name} ${report.second_name ?? ''} ${
                    report.last_name
                  }`
                }}
              </td>
              <td>
                {{ moment(report.created_at).format('MM/DD/YYYY') }}
              </td>
            </tr>
          </tbody>
          <tbody v-if="reports.length < 1 && !loading">
            <tr>
              <td></td>
              <td>No members</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </VLoader>
    </div>
  </VCard>
</template>
