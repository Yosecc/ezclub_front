<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { reports, getReports } from '/@src/models/Reports.ts'
import moment from 'moment'

onMounted(async () => {
  await getReports()
})

watch(reports, (to, o) => {
  console.log(to)
})
</script>

<template>
  <filterReportsTable />
  <VCard class="p-">
    <div class="mt-4">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody v-if="reports">
          <tr v-for="(report, key) in reports" :key="`report-${key}`">
            <td>{{ report.id }}</td>
            <td>{{ '' }}</td>
            <td>
              {{ moment(report.created_at).format('MM/DD/YYYY') }}
            </td>
            <td>{{ '' }}</td>
            <td>{{ report.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </VCard>
</template>
