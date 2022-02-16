<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed, defineProps } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { user } from '/@src/pages/auth/auth.ts'
import { getCompany, company } from '/@src/models/Companies.ts'
pageTitle.value = props.title
useHead({
  title: 'Settings',
})

onMounted(()=>{
  getCompany()
})

const props = defineProps({
  title:{
    type: String,
    default: 'Settings'
  }
})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

     <slot></slot>
       
    </div>
    
  </SidebarLayout>
</template>