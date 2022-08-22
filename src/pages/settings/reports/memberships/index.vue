<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
pageTitle.value = 'Memberships Reports'
useHead({
  title: 'Memberships Reports',
})

onMounted(() => {})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="columns is-multiline">
        <membershipsReport />
      </div>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
.website_construction {
  width: 100%;
}
</style>
