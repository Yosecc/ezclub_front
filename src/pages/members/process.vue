<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'

pageTitle.value = 'Add New members'
useHead({
  title: 'Members',
})

const route = useRoute()
const router = useRouter()
const member = ref([])

const paymentStatus = ref(null)

const urlPdf = ref(null)

let familiares = ref([])

onMounted(() => {
  Api.post(`payment/${route.query.id}`, {
    payment_intent_client_secret: route.query.payment_intent_client_secret,
    redirect_status: route.query.redirect_status,
  }).then((response) => {
    if (response.data.status) {
      paymentStatus.value = route.query.redirect_status
      urlPdf.value = response.data.urlPDF
      member.value = response.data.member
      familiares.value = response.data.familiares
    }
  })
})

const nextFamily = (familiar) => {
  window.location.href = `https://dev-frontend.ushuaiacreative.com/members/process?id=${familiar.id}&payment_intent=${route.query.payment_intent}&payment_intent_client_secret=${route.query.payment_intent_client_secret}&redirect_status=${route.query.redirect_status}`
  // router.push({name: 'members-process', query: {
  //     id: familiar.id,
  //     payment_intent: route.query.payment_intent,
  //     payment_intent_client_secret: route.query.payment_intent_client_secret,
  //     redirect_status:route.query.redirect_status
  //   }
  // })
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <VPlaceload v-if="paymentStatus == null" height="500px" />
      <div v-if="paymentStatus == 'succeeded'">
        <VCard class="mb-4" radius="small" color="success">
          <h1 class="title is-4">Successful Payment</h1>
        </VCard>
        <h2 class="title is-3">
          Sign {{ member.name }} {{ member.second_name }} {{ member.last_name }}
        </h2>
        <sign :member="member" />

        <div v-if="familiares.length > 0" class="mt-6">
          <div v-for="(familiar, key) in familiares" :key="`familu${key}`">
            <VCard class="mb-4" radius="small">
              <h2 class="title is-3">
                Sign Family: {{ familiar.name }} {{ familiar.second_name }}
                {{ familiar.last_name }}
              </h2>

              <V-Button
                color="warning"
                class="text-center mx-auto"
                @click="nextFamily(familiar)"
              >
                View and sign: Family
              </V-Button>
            </VCard>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
