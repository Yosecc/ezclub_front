<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany, company } from '/@src/pages/companies/companies.ts'
pageTitle.value = 'Permissions'
useHead({
  title: 'Permissions',
})

onMounted(()=>{

})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">
      <div class="columns is-multiline">
        <h1 class="title  text-center is-2 column is-12">Page under construction</h1>
        <div class="column is-4 mx-auto">
          
          <img
            class="website_construction"
            src="/@src/assets/illustrations/website_construction.svg"
            alt=""
          />
        </div>
      </div>
        
       
    </div>
    
  </SidebarLayout>
</template>

<style lang="scss">
  .website_construction{
    width: 100%;
  }
</style>