<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'

// import { getCompany, company } from '/@src/pages/companies/companies.ts'
import { getStaffs, staffs } from '/@src/models/Staffs.ts'
pageTitle.value = 'Staff'
useHead({
  title: 'Stasff',
})

onMounted(() => {
  getStaffs()
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <staffList />
    </div>
  </SidebarLayout>
</template>
