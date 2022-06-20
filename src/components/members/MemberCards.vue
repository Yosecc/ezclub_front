<script setup lang="ts">
import { computed, ref, watch, defineEmit, defineProps, onMounted } from 'vue'
import {
  member,
  getCardsMembers,
  storedeletePaymentMethod,
  storedefaultPaymentMethod,
} from '/@src/models/Members.ts'
import moment from 'moment'
import { API_WEB_URL } from '/@src/services'
import { useRoute } from 'vue-router'
import { notyf } from '/@src/models/Mixin.ts'
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
  showOption: {
    type: Boolean,
    default: false,
  },
})

const miembro = computed(() => {
  let miembro = null
  if (member.value) {
    miembro = member.value.id
  }

  if (props.memberid) {
    miembro = props.memberid
  }

  return miembro
})

onMounted(() => {
  // console.log(miembro)
  if (!miembro.value) {
    console.error('Member Not Found')
    return
  }

  isLoading.value = true
  getCardsMembers(miembro.value)
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

const deletePaymentMethod = (payment_method) => {
  storedeletePaymentMethod(miembro.value, payment_method)
    .then((response) => {
      notyf.success('Success')
      window.location.reload()
    })
    .catch((error) => {
      if (typeof error.response.data == 'object') {
        for (var i in error.response.data) {
          error.response.data[i].forEach((e) => {
            notyf.error(`${i} : ${e}`)
          })
        }
      } else {
        notyf.error(error.response.data)
      }
    })
}
const defaultPaymentMethod = (payment_method) => {
  storedefaultPaymentMethod(miembro.value, payment_method)
    .then((response) => {
      notyf.success('Success')
      window.location.reload()
    })
    .catch((error) => {
      console.log(error)
      // if(typeof error.response.data == 'object'){
      //     for (var i in error.response.data) {
      //       error.response.data[i].forEach((e) => {
      //         notyf.error(`${i} : ${e}`)
      //       })
      //     }
      //   }else{
      //      notyf.error(error.response.data)
      //   }
    })
}
</script>

<template>
  <VLoader size="large" :active="isLoading">
    <div class="columns is-multiline">
      <div
        v-for="(card, key) in cards"
        :key="`card-${key}`"
        class="column py-0"
        :class="ancho"
      >
        <VCard @click="selectMethodPayment(card.id)" class="btn-card h-100">
          <div class="d-flex align-items-start justify-content-between">
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
            <div class="text-right" v-if="showOption">
              <VButton @click="deletePaymentMethod(card.id)" class="mb-2">
                <i class="fas fa-trash" aria-hidden="true"></i>
              </VButton>
              <VButton
                @click="defaultPaymentMethod(card.id, card.card.last4)"
                class="mb-2"
              >
                <i class="fas fa-check" aria-hidden="true"></i>
              </VButton>
            </div>
          </div>
        </VCard>
      </div>
      <slot></slot>
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
