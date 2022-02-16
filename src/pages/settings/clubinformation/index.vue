<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'

pageTitle.value = 'Club Profile'
useHead({
  title: 'Club',
})

onMounted(()=>{

})
const Component = ref('clubInformation')

const changeMenu = (val) =>{
  Component.value = val.value
}
</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

    <div class="columns is-multiline">
      <div class="column is-3">
        <clubProfileMenu
          @changeMenu="changeMenu"
        />
      </div>
      <div class="column is-9">
        <clubInformation
          v-show="Component == 'clubInformation'"
        />
        <clubRepresentatives
          v-show="Component == 'clubRepresentatives'"
        />
        <clubPayment
          v-show="Component == 'clubPayment'"
        />
        <clubSubscription
        v-show="Component == 'clubSubscription'"
        />
        <clubLocation
          v-show="Component == 'clubLocation'"
        />
        
      </div>
    </div>
       
    </div>
    
  </SidebarLayout>
</template>