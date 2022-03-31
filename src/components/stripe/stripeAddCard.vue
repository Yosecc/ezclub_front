<script setup lang="ts">
import { ref, onMounted, defineProps, watch, computed, defineEmit } from 'vue'
import { PUBLIC_KEY_STRIPE } from '/@src/services'
const stripe = Stripe(PUBLIC_KEY_STRIPE.value)
import { notyf } from '/@src/models/Mixin.ts'

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

const membership_member_id = ref(null)
const datasecret = ref(null)
const cardElement = ref(null)
const setLoading = ref(false)
const user_id = ref(null)
const initialize = async () => {
  // console.log('props.url', props.url)
  // console.log('data.value', data.value)
  let response = await Api.post(props.url, data.value)
    .then((response) => {
      datasecret.value = response.data.clientSecret
      user_id.value = response.data.user_id

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

      cardElement.value = elements.value.create('card')
      // cardElement.value = elements.value.create('payment')
      cardElement.value.mount('#payment-element')
    })
    .catch((error) => {})
  isLoading.value = false
  return response
}

// const paymentMethod = async ()=>{

//   return
// }

const nameCard = ref(null)
const handleSubmit = async (e) => {
  e.preventDefault()
  // setLoading.value = true

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

    const { data } = await Api.post('paymentStripe', {
      payment_method,
      amount: props.amount,
      user_id: user_id.value,
      membership_member_id: props.member_membership,
    })

    if (data) {
      emit('PaymentAction', data)
      notyf.success('Success Payment')
    }

    // console.log(data)
  } else {
    console.log()
    notyf.error(error.message)
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
  .input {
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
