<script setup lang="ts">
import { ref, onMounted, defineProps, watch } from 'vue'

const stripe = Stripe(
  'pk_test_51JFMxBFllRtR3x1gBilPZnRFAmn5t6vpZSYDOLR2A14zgdDZUiVvLorUwZiq1ummftz3ZKmWRb4X9DtoBkju4w3g00z410NK5H'
)

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
  memberMermship: {
    type: Number,
    default: 0,
  },
})

watch(
  () => props.id,
  (to) => {
    isLoading.value = true
    initialize()
  }
)

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
    amount: props.amount,
  }
})

const initialize = async () => {
  let response = await Api.post(props.url, data.value)
    .then((response) => {
      elements.value = stripe.elements({
        clientSecret: response.data.clientSecret,
        appearance: {
          theme: 'night',
          rules: {
            '.Input': {
              boxShadow: 'none',
            },
          },
        },
      })

      const paymentElement = elements.value.create('payment')
      paymentElement.mount('#payment-element')
    })
    .catch((error) => {})
  isLoading.value = false
  return response
}

const handleSubmit = async (e) => {
  e.preventDefault()
  // setLoading(true);

  const { error } = await stripe.confirmPayment({
    elements: elements.value,
    confirmParams: {
      // Make sure to change this to your payment completion page
      return_url: `${FRONTEND_URL.value}members/process?id=` + props.id,
    },
  })

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  if (error.type === 'card_error' || error.type === 'validation_error') {
    console.log(error.message)
  } else {
    console.log('An unexpected error occured.')
  }

  // setLoading(false)
}

onMounted(() => {
  initialize()
})
</script>

<template>
  <VPlaceload v-if="isLoading" height="500px" />
  <V-Card v-show="!isLoading" class="mt-6">
    <form @submit.prevent="handleSubmit" id="payment-form">
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <!-- <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text">Pay now</span>
      </button> -->
      <VButton id="submit" class="mt-4" color="success"> Pay now </VButton>

      <div id="payment-message" class="hidden"></div>
    </form>
  </V-Card>
</template>
