<script setup lang="ts">
import { computed, ref, watch, defineEmit, defineProps, onMounted } from 'vue'
import {
  member,
  getCardsMembers,
  storedeletePaymentMethod,
  storedefaultPaymentMethod,
} from '/@src/models/Members.ts'

import { getCardsuserV2 } from '/@src/models/v2/Members.ts'

import moment from 'moment'
import { API_WEB_URL, Api } from '/@src/services'
import { useRoute } from 'vue-router'
import { notyf } from '/@src/models/Mixin.ts'
const emit = defineEmit([
  'onMethodPayment',
  'onNewCard',
  'makePayment',
  'update:modelValue',
])

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
  member_mermship_id: {
    type: Number,
    default: null,
  },
  user: {
    type: Object,
    default: {},
  },
  ancho: {
    type: String,
    default: 'is-6',
  },
  showOption: {
    type: Boolean,
    default: false,
  },
  memberGuardianId: {
    type: Number,
    default: null,
  },
  onNewCardURL: {
    type: String,
    default: 'stripeSetup',
  },
  addCardStripeURL: {
    type: String,
    default: 'addCardStripe',
  },
  v2: {
    type: Boolean,
    default: false,
  },
  actions: {
    type: Array,
    default: ['delete', 'default', 'make'],
  },
})

const miembro = computed(() => {
  // console.log('member',member.value)
  // console.log('props.memberid',props.memberid)
  let miembro = null
  if (member.value) {
    miembro = member.value.id
  }

  if (props.memberid) {
    miembro = props.memberid
  }

  if (props.memberGuardianId) {
    miembro = props.memberGuardianId
  }

  return miembro
})

onMounted(() => {
  // console.log(miembro)
  // if (!miembro.value) {
  //   console.error('Member Not Found')
  //   return
  // }

  montaje()
})

const montaje = () => {
  isLoading.value = true
  if (!props.v2) {
    getCardsMembers(miembro.value)
      .then((response) => {
        isLoading.value = false
        cards.value = response.data
      })
      .catch((error) => {})
  } else {
    getCardsuserV2(props.user.id)
      .then((response) => {
        isLoading.value = false
        cards.value = response.data
        let card = cards.value.find((e) => e.default == 1)
        if (card != undefined) {
          payment_method.value = card.id
          emit('update:modelValue', card.id)
        }
      })
      .catch((error) => {})
  }
}

const selectMethodPayment = (id) => {
  payment_method.value = id
  emit('update:modelValue', id)
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

const clientSecret = ref(null)

const onNewCard = async () => {
  isLoading.value = true
  const response = await Api.post(props.onNewCardURL, {
    user_id: props.user.id,
  })
    .then((res) => {
      clientSecret.value = res.data.clientSecret
      isLoading.value = false
    })
    .catch((error) => {
      isLoading.value = false
    })
}

const PaymentAction = () => {
  isLoading.value = true
  clientSecret.value = null
  setTimeout(() => {
    montaje()
  }, 5000)
}

const makePayment = (id) => {
  emit('makePayment', id)
}
</script>

<template>
  <VLoader size="large" :active="isLoading">
    <div class="columns is-multiline">
      <div
        v-for="(card, key) in cards"
        :key="`card-${key}`"
        class="column py-0 mb-2"
        :class="ancho"
      >
        <VCard
          :color="card.default ? 'primary' : undefined"
          @click="selectMethodPayment(card.id)"
          class="btn-card h-100"
          :class="payment_method == card.id ? 'active' : ''"
          :outlined="card.default"
        >
          <div class="d-flex align-items-start justify-content-between">
            <p class="title is-1 mb-0">
              <i class="fas fa-credit-card" aria-hidden="true"></i>
            </p>
            <div class="ml-4">
              <p class="title is-6 mb-2">Select Payment Method</p>
              <p class="title is-6 mb-2">
                {{ card.card.brand }} **** {{ card.card.last4 }}
              </p>
              <p class="title is-6" v-if="card.default">Payment Default</p>
            </div>
            <div class="text-right" v-if="showOption">
              <VButton
                v-if="props.actions.includes('delete')"
                @click="deletePaymentMethod(card.id)"
                class="mb-2"
              >
                <i class="fas fa-trash" aria-hidden="true"></i>
              </VButton>
              <VButton
                v-if="props.actions.includes('default')"
                @click="defaultPaymentMethod(card.id, card.card.last4)"
                class="mb-2"
              >
                <i class="fas fa-check" aria-hidden="true"></i>
              </VButton>
              <VButton
                v-if="props.actions.includes('make')"
                @click.stop="makePayment(card.id)"
                class="mb-2"
              >
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </VButton>
            </div>
          </div>
        </VCard>
      </div>
      <slot></slot>
      <div v-if="showNewCard" class="column is-12">
        <VCard
          v-if="props.user"
          @click="onNewCard"
          color="info"
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
        <stripeAddCardComponent
          v-if="clientSecret"
          :client-secret="clientSecret"
          :user_id="props.user.id"
          :is-back="false"
          :add-card-stripe-u-r-l="props.addCardStripeURL"
          @PaymentAction="PaymentAction"
        />
      </div>
    </div>
    <!-- <div v-else>
      <VCard color="primary" class="btn-card">
        <h1 class="title is-3">New Payment</h1>
      </VCard>
    </div> -->
  </VLoader>
</template>
<style scoped>
.btn-card.active {
  background: #f39c12 !important;
  color: black !important;
}
.btn-card.active p {
  color: black !important;
}
</style>
