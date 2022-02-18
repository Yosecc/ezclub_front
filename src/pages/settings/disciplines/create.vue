<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany } from '/@src/models/Companies.ts'
import { getTrainers } from '/@src/models/Staffs.ts'
import { inputs } from '/@src/models/Diciplines.ts'
import { cleanUpModelInputs } from '/@src/models/Mixin.ts'

pageTitle.value = 'New Discipline'

useHead({
  title: 'Disciplines',
})

const isLoading = ref(true)
onMounted(() => {
  cleanUpModelInputs(inputs.value)
  getCompany()
  getTrainers().then((response) => {
    isLoading.value = false
  })
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <disciplinesForm type="create" :is-loading="isLoading" />
    </div>
  </SidebarLayout>
</template>
