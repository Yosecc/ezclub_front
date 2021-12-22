<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Members'
useHead({
  title: 'List Members',
})
</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">
       <MembersList />
    </div>
    
  </SidebarLayout>
</template>