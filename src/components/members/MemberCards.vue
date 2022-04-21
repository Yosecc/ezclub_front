<script setup lang="ts">
import { computed, ref, watch, defineEmit, defineProps, onMounted } from 'vue'
import { member, getCardsMembers } from '/@src/models/Members.ts'
import moment from 'moment'
import { API_WEB_URL } from '/@src/services'
import { useRoute } from 'vue-router'

const emit = defineEmit(['onMethodPayment', 'onNewCard'])

const route = useRoute()
const cards = ref([])
const isLoading = ref(true)
const payment_method = ref(null)

const props = defineProps({
  method_default: {
    type: String,
    default: '',
  },
  showNewCard: {
    type: Boolean,
    default: true,
  },
  memberid: {
    type: Number,
    default: null,
  },
  ancho: {
    type: String,
    default: 'is-6',
  },
})

onMounted(() => {
  let miembro = null
  if (member.value) {
    miembro = member.value.id
  }

  if (props.memberid) {
    console.log(props.memberid)
    miembro = props.memberid
  }
  console.log(miembro)
  if (!miembro) {
    console.error('Member Not Found')
    return
  }
  isLoading.value = true
  getCardsMembers(miembro)
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
  <VLoader size="large" :active="isLoading">
    <div class="columns is-multiline">
      <div
        v-for="(card, key) in cards"
        :key="`card-${key}`"
        class="column"
        :class="ancho"
      >
        <VCard
          @click="selectMethodPayment(card.id)"
          :color="payment_method == card.id ? 'success' : undefined"
          class="btn-card"
        >
          <div class="d-flex align-items-start">
            <p class="title is-1 mb-0">
              <i class="fas fa-credit-card" aria-hidden="true"></i>
            </p>
            <div class="ml-4">
              <p class="title is-6 mb-2">Select Payment Method</p>
              <p class="title is-6 mb-2">
                {{ card.card.brand }} **** {{ card.card.last4 }}
              </p>
              <p class="title is-6" v-if="method_default == card.card.last4">
                Payment Default
              </p>
            </div>
          </div>
        </VCard>
      </div>
      <div v-if="showNewCard" class="column is-12">
        <VCard @click="$emit('onNewCard')" color="success" class="btn-card">
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
  </VLoader>
</template>
