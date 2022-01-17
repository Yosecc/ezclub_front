<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { user } from '/@src/pages/auth/auth.ts'
import { getCompany, company } from '/@src/pages/companies/companies.ts'
pageTitle.value = 'Settings'
useHead({
  title: 'Settings',
})

onMounted(()=>{
  getCompany()
})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

     <SettingsProfileCompany 
      :company="company"
     />
       
    </div>
    
  </SidebarLayout>
</template>