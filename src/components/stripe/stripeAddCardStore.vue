<script setup lang="ts">
import { ref, onMounted, defineProps, watch, computed, defineEmit } from 'vue'
import { PUBLIC_KEY_STRIPE } from '/@src/services'
const stripe = Stripe(PUBLIC_KEY_STRIPE.value)
import { notyf } from '/@src/models/Mixin.ts'

const props = defineProps({
  url_payment: {
    type: String,
    required: true,
  },
  member_id: {
    type: Number,
    required: true,
  },
  new_setup_intent: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})

const emit = defineEmit(['PaymentAction'])

watch(
  () => props.id,
  (to) => {
    console.log('cambio')
    isLoading.value = true
    initialize()
  }
)

const isLoading = ref(true)

const items = ref({ id: props.id, amount: props.amount })

const elements = ref()

import { Api, FRONTEND_URL } from '/@src/services'

const datasecret = ref(null)
const cardElement = ref(null)
const setLoading = ref(false)
const user_id = ref(null)
const initialize = async () => {
  let response = await Api.post(props.new_setup_intent)
    .then((response) => {
      datasecret.value = response.data.client_secret

      elements.value = stripe.elements({
        clientSecret: datasecret.value,
        appearance: {
          theme: 'night',
          rules: {
            '.Input': {
              boxShadow: 'none',
            },
          },
        },
      })

      cardElement.value = elements.value.create('card', {
        classes: {
          base: 'base_card',
        },
      })
      // cardElement.value = elements.value.create('payment')
      cardElement.value.mount('#payment-element')
    })
    .catch((error) => {
      isLoading.value = false
    })
  isLoading.value = false
  return response
}

// const paymentMethod = async ()=>{

//   return
// }

const nameCard = ref(null)
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading.value = true
  //
  // const { error, paymentMethod }  = await stripe.createPaymentMethod({
  //   type: 'card',
  //   card: cardElement.value,
  //   billing_details: {
  //     name: nameCard.value,
  //   },
  // })

  const { setupIntent, error } = await stripe.confirmCardSetup(
    datasecret.value,
    {
      payment_method: {
        card: cardElement.value,
        billing_details: { name: nameCard.value },
      },
    }
  )

  if (!error) {
    const { payment_method } = setupIntent

    const datos = {
      payment_method,
      ...props.data,
    }
    console.log(datos)

    const { data } = await Api.post(props.url_payment, datos).catch((e) => {
      setLoading.value = false
    })

    if (data) {
      emit('PaymentAction', data)
      notyf.success('Success Payment')
    }

    // console.log(data)
  } else {
    setLoading.value = false

    notyf.error(error.message)
    initialize()
  }

  setLoading.value = false
}

onMounted(() => {
  setLoading.value = false
  initialize()
})
</script>

<template>
  <VPlaceload v-if="isLoading" height="500px" />
  <V-Card v-show="!isLoading" class="mt-6">
    <form @submit.prevent="handleSubmit" id="payment-form">
      <input
        id="card-holder-name"
        class="input mb-3"
        v-model="nameCard"
        placeholder="Name"
        type="text"
      />
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <VLoader size="small" :active="setLoading">
        <VButton id="submit" class="mt-4" color="info">Pay now </VButton>
      </VLoader>

      <div id="payment-message" class="hidden"></div>
    </form>
  </V-Card>
</template>

<style lang="scss">
#payment-form {
  .input,
  .base_card {
    padding: 0.75rem;
    background-color: #30313d;
    border-radius: 5px;
    transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease,
      color 0.15s ease;
    border: 1px solid #4a4a54 !important;
    box-shadow: none;
    font-size: 17px;
  }
}
</style>
