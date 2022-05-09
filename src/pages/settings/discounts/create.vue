<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { resetInputsReadOnly } from '/@src/models/Mixin.ts'
import { inputs } from '/@src/models/Discounts.ts'

pageTitle.value = 'New Discount'

useHead({
  title: 'Discounts',
})

onMounted(() => {
  // getCompany()
  resetInputsReadOnly(inputs.value, [
    'code',
    'type',
    'value',
    'duration',
    'max_redemptions',
    'date_expired',
    'time_expired',
    'duration_in_months',
  ])
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <discountForm :type="create" />
    </div>
  </SidebarLayout>
</template>
