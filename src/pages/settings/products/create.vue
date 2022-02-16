<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany, company } from '/@src/models/Companies.ts'

pageTitle.value = 'New Product'

useHead({
  title: 'Products',
})

onMounted(()=>{
  getCompany()
})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

    <productForm
      type="create"
    />
       
    </div>
    
  </SidebarLayout>
</template>