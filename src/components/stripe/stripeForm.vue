<script setup lang="ts">
import { ref, onMounted, defineProps, watch, computed } from 'vue'
import { PUBLIC_KEY_STRIPE } from '/@src/services'
const stripe = Stripe(PUBLIC_KEY_STRIPE.value)

const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    default: 'stripe',
  },
  member_membership: {
    type: Number,
    default: 0,
  },
})

watch(
  () => props.id,
  (to) => {
    console.log('cambio')
    isLoading.value = true
    initialize()
  }
)
// watch(
//   () => idMemberMembership.id,
//   (to) => {
//     isLoading.value = true
//     initialize()
//   }
// )

const isLoading = ref(true)

const items = ref({ id: props.id, amount: props.amount })

const elements = ref()

import { Api, FRONTEND_URL } from '/@src/services'

const data = computed(() => {
  if (props.url != 'stripe') {
    return {
      payment_type_id: 3,
      amount: props.amount,
    }
  }
  return {
    id: props.id,
    member_mermship_id: props.member_membership,
    amount: props.amount,
    payment_type_id: 1,
  }
})

const datasecret = ref(null)
const cardElement = ref(null)
const setLoading = ref(false)
const initialize = async () => {
  // console.log('props.url', props.url)
  // console.log('data.value', data.value)
  let response = await Api.post(props.url, data.value)
    .then((response) => {
      datasecret.value = response.data.clientSecret
      elements.value = stripe.elements({
        clientSecret: datasecret.value,
      })

      cardElement.value = elements.value.create('payment')
      cardElement.value.mount('#payment-element')
    })
    .catch((error) => {})
  isLoading.value = false
  return response
}

const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading.value = true

  const { error } = await stripe.confirmPayment({
    elements: elements.value,
    confirmParams: {
      // Make sure to change this to your payment completion page
      return_url:
        `${FRONTEND_URL.value}members/process?payment_type=3&id=` +
        props.id +
        `&membership=${props.member_membership}`,
    },
  })

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  // if (error.type === 'card_error' || error.type === 'validation_error') {
  //   console.log(error.message)
  // } else {
  //   console.log('An unexpected error occured.')
  // }

  setLoading.value = false
}

onMounted(() => {
  initialize()
})
</script>

<template>
  <VPlaceload v-if="isLoading" height="500px" />
  <V-Card v-show="!isLoading" class="mt-6">
    <!-- <p>{{ memberMermship }}</p> -->
    <form @submit.prevent="handleSubmit" id="payment-form">
      <!-- <input id="card-holder-name" type="text"> -->
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <!-- <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text">Pay now</span>
      </button> -->
      <VLoader size="small" :active="setLoading">
        <VButton id="submit" class="mt-4" color="success"> Pay now </VButton>
      </VLoader>

      <div id="payment-message" class="hidden"></div>
    </form>
  </V-Card>
</template>
