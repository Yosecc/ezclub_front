<script setup lang="ts">
import { computed, ref, watch, defineEmit, defineProps, onMounted } from 'vue'
import { member, getCardsMembers } from '/@src/models/Members.ts'
import moment from 'moment'
import { API_WEB_URL } from '/@src/services'
import { useRoute } from 'vue-router'

// const emit = defineEmit(['onMethodPayment'])

const route = useRoute()
const cards = ref([])
const isLoading = ref(true)
const payment_method = ref(null)

// const props = defineProps({
//   category: {
//     type: String,
//     default: 'Adult',
//   },
// })

onMounted(() => {
  if (!member.value.id) {
    console.error('Member Not Found')
    return
  }
  isLoading.value = true
  getCardsMembers(member.value.id)
    .then((response) => {
      isLoading.value = false
      cards.value = response.data
    })
    .catch((error) => {})
})

const selectMethodPayment = (id) => {
  payment_method.value = id
  emit('onMethodPayment', id)
}
</script>

<template>
  <div class="columns is-multiline w-100">
    <!-- <VLoader size="large" :active="isLoading">
      <div
      >
        <div
          v-for="(card, key) in cards"
          :key="`card-${key}`"
          class="column is-6"
        >
          <VCard
            @click="selectMethodPayment(card.id)"
            :color="payment_method == card.id ? 'success' : undefined"
            
            class="btn-card"
          >
            <div class="d-flex align-items-center">
              <p class="title is-6 mb-0">
                <i class="fas fa-credit-card" aria-hidden="true"></i>
              </p>
              <div class="ml-4">
                <p class="title is-6 mb-2">Select Payment Method</p>
                <p class="title is-6 mb-0">
                  {{ card.card.brand }} **** {{ card.card.last4 }}
                </p>
              </div>
            </div>
          </VCard>
        </div>
        <div class="column is-12">
          <VCard
            @click=""
            
            color="success"
            class="btn-card"
          >
            <div class="d-flex align-items-center">
              <p class="title is-1 mb-0">
                <i class="fas fa-plus-circle" aria-hidden="true"></i>
              </p>
              <div class="ml-4">
                <p class="title is-4 mb-2">Add new card</p>
              </div>
            </div>
          </VCard>
        </div>
      </div>
    </VLoader> -->
  </div>
</template>
