<script setup lang="ts">
import { ref, onMounted, defineProps, watch, computed, defineEmit } from 'vue'
import { PUBLIC_KEY_STRIPE, Api, FRONTEND_URL } from '/@src/services'
const stripe = Stripe(PUBLIC_KEY_STRIPE.value)
import { notyf } from '/@src/models/Mixin.ts'
import { pagado } from '/@src/models/Members.ts'
const props = defineProps({
  clientSecret: {
    type: String,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  isBack: {
    type: Boolean,
    default: true,
  },
  pm_last_four: {
    type: String,
    default: '',
  },
  addCardStripeURL: {
    type: String,
    default: 'addCardStripe',
  },
})

const emit = defineEmit(['PaymentAction'])

watch(
  () => props.clientSecret,
  (to) => {
    initialize()
  }
)

const elements = ref()
const nameCard = ref(null)
const newCard = ref(false)

// const data = computed(() => {
//   if (props.url != 'stripe') {
//     return {
//       payment_type_id: 3,
//       amount: props.amount,
//     }
//   }
//   return {
//     id: props.id,
//     member_mermship_id: props.member_membership,
//     amount: props.amount,
//     payment_type_id: 1,
//   }
// })

// const membership_member_id = ref(null)
// const datasecret = ref(null)
const cardElement = ref(null)
const buttonLoading = ref(false)
const formLoading = ref(true)
// const user_id = ref(null)
const initialize = async () => {
  newCard.value = true
  elements.value = await stripe.elements({
    clientSecret: props.clientSecret,
    appearance: {
      theme: 'night',
      labels: 'floating',
    },
  })

  cardElement.value = elements.value.create('card', {
    classes: {
      base: 'base_card',
    },
  })
  // cardElement.value = elements.value.create('payment')
  cardElement.value.mount('#payment-element')

  return elements.value
}

const payment = async (payment_method) => {
  isLoaderActive.value = true
  const { data } = await Api.post(props.addCardStripeURL, {
    payment_method,
    user_id: props.user_id,
  }).catch((e) => {
    buttonLoading.value = false
  })
  pagado.value = true
  isLoaderActive.value = false
  // window.location.reload()
  return data
}

const handleSubmit = async (e) => {
  e.preventDefault()
  buttonLoading.value = true

  const { setupIntent, error } = await stripe.confirmCardSetup(
    props.clientSecret,
    {
      payment_method: {
        card: cardElement.value,
        billing_details: { name: nameCard.value },
      },
    }
  )

  if (!error) {
    const { payment_method } = setupIntent

    const data = payment(payment_method)

    if (data) {
      emit('PaymentAction', data)
      notyf.success('Success')
    }
  } else {
    buttonLoading.value = false
    notyf.error(error.message)
  }

  buttonLoading.value = false
}

onMounted(() => {
  buttonLoading.value = false
  formLoading.value = false
  initialize()
})
const isLoaderActive = ref(false)
const onMethodPayment = (paymentMethod) => {
  payment(paymentMethod)
}
</script>

<template>
  <div>
    <!-- <p> {{ PUBLIC_KEY_STRIPE }}</p> -->

    <VPlaceload v-if="formLoading" height="500px" />
    <V-Card v-show="!formLoading" class="mt-6">
      <form v-if="newCard" @submit.prevent="handleSubmit" id="payment-form">
        <div class="w-100 d-flex justify-content-end">
          <VButton v-if="isBack" @click="newCard = false" class="mb-4"
            >Back</VButton
          >
        </div>
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
        <VLoader size="small" :active="buttonLoading">
          <VButton id="submit" class="mt-4" color="info">Add Card</VButton>
        </VLoader>

        <div id="payment-message" class="hidden"></div>
      </form>
    </V-Card>
  </div>
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
    font-size: 14px;
  }
}
</style>
