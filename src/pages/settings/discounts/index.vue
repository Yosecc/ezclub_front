<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { getDiscounts } from '/@src/models/Discounts.ts'

pageTitle.value = 'Discounts'
useHead({
  title: 'Discounts',
})

onMounted(() => {
  getDiscounts()
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <discountsList />
    </div>
  </SidebarLayout>
</template>
