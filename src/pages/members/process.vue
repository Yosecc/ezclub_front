<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'

pageTitle.value = 'Add New members'
useHead({
  title: 'Members',
})

const route = useRoute()

const member = ref([])

const paymentStatus = ref(null)

const urlPdf = ref(null)

onMounted(() => {
  Api.post(`payment/${route.query.id}`,{
    payment_intent_client_secret:route.query.payment_intent_client_secret,
    redirect_status:route.query.redirect_status
  }).then((response)=>{
    if(response.data.status ){
      paymentStatus.value = route.query.redirect_status
      urlPdf.value = response.data.urlPDF
      member.value = response.data.member
    }
  })
})


</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

      <VPlaceload v-if="paymentStatus == null" height="500px"   />
      <div v-if="paymentStatus == 'succeeded'">
        <VCard 
          class="mb-4"
          radius="small" 
          color="success">
         <h1 class="title is-4">Successful Payment</h1>
        </VCard>
        <h2 class="title is-3"  >Sign</h2>
        <sign
          :member="member"
        />
      </div>
      
       
    </div>
    
  </SidebarLayout>
</template>