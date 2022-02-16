<script setup lang="ts">
// import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, reactive } from 'vue'
// import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'





const variable = ref('texto es el varlo')

onMounted(()=>{
 

})




</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->

    <p id="fg">{{ variable }}</p>

    <input type="text" class="input este" v-model="variable">
    
  </SidebarLayout>
</template>