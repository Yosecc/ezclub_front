<script setup lang="ts">
import { ref, onMounted, defineProps, watch, computed, defineEmit } from 'vue'
import { PUBLIC_KEY_STRIPE, Api, FRONTEND_URL } from '/@src/services'
const stripe = Stripe(PUBLIC_KEY_STRIPE.value)
import { notyf } from '/@src/models/Mixin.ts'

const props = defineProps({
  clientSecret: {
    type: String,
    required: true,
  },
  membership_member_id: {
    type: Number,
    required: true,
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
  formLoading.value = true

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

  formLoading.value = false
  return elements.value
}

// const paymentMethod = async ()=>{

//   return
// }

const handleSubmit = async (e) => {
  e.preventDefault()
  buttonLoading.value = true
  //
  // const { error, paymentMethod }  = await stripe.createPaymentMethod({
  //   type: 'card',
  //   card: cardElement.value,
  //   billing_details: {
  //     name: nameCard.value,
  //   },
  // })

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

    const { data } = await Api.post('paymentStripe', {
      payment_method,
      membership_member_id: props.membership_member_id,
    }).catch((e) => {
      buttonLoading.value = false
    })

    if (data) {
      emit('PaymentAction', data)
      notyf.success('Success Payment')
    }

    // console.log(data)
  } else {
    buttonLoading.value = false
    // console.log()
    notyf.error(error.message)
  }

  buttonLoading.value = false
}

onMounted(() => {
  buttonLoading.value = false
  initialize()
})
</script>

<template>
  <VPlaceload v-if="formLoading" height="500px" />
  <V-Card v-show="!formLoading" class="mt-6">
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
      <VLoader size="small" :active="buttonLoading">
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
    font-size: 14px;
  }
}
</style>
