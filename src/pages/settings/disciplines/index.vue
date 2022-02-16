<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getDiciplines, diciplines } from '/@src/models/Diciplines.ts'
pageTitle.value = 'Disciplines'
useHead({
  title: 'Disciplines',
})

const isLoading  = ref(false)
onMounted(()=>{
  getDiciplines().then((response)=>{
    isLoading.value = true
  })
})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

      <VPlaceload v-if="!isLoading" height="500px"   />
      <disciplinesList
        v-else
        :diciplines="diciplines"
      />
       
    </div>
    
  </SidebarLayout>
</template>