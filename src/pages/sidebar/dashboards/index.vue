<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

import { User, isAuthenticated } from '/@src/state/auth.ts'

pageTitle.value = 'Personal 1'
useHead({
  title: 'Personal 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <!-- <p>{{ User }}</p> -->
    <!-- <p>{{ isAuthenticated }}</p> -->
    <PersonalDashboardV1 />
  </div>
</template>
