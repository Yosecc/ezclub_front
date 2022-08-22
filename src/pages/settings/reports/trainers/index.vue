<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Trainer Reports'
useHead({
  title: 'Trainer Reports',
})

onMounted(() => {})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="columns is-multiline">
        <trainerTableReport />
      </div>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
.website_construction {
  width: 100%;
}
</style>
