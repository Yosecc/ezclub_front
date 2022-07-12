<script setup lang="ts">
import { defineProps, ref, defineEmit, onMounted } from 'vue'
import {
  perpareDataInputs,
  cleanUpModelInputs,
  notyf,
} from '/@src/models/Mixin.ts'

import {
  makeAPaymentInputs,
  makeManualPayment,
} from '/@src/models/ManualPayment.ts'

import { member } from '/@src/models/Members.ts'

const props = defineProps({
  openModal: {
    type: Boolean,
    default: false,
  },
  paymentMethodId: {
    type: String,
    default: '',
  },
})

// loading
const loading = ref(false)

const emit = defineEmit(['closeModal', 'refreshTransactions'])

const submit = async () => {
  const data = perpareDataInputs(makeAPaymentInputs.value)
  await member.value
  const body = {
    amount: data.amount,
    description: data.description,
    payment_method_id: 1,
    payment_method_stripe_id: props.paymentMethodId,
    member_id: member.value.id,
  }

  loading.value = true

  try {
    await makeManualPayment(body)

    cleanUpModelInputs(makeAPaymentInputs.value)
    notyf.success('Success')
    emit('closeModal')
  } catch (error) {
    if (typeof error.response.data.message == 'string') {
      notyf.error(error.response.data.message)
    } else {
      notyf.error(error)
    }
  } finally {
    loading.value = false
  }
}

const closeModal = () => {
  cleanUpModelInputs(makeAPaymentInputs.value)
  emit('closeModal')
}
</script>
<template>
  <VModal
    :open="props.openModal"
    title="Create a new payment"
    size="small"
    actions="right"
    @close="closeModal"
  >
    <template #content>
      <inputsLayaut :inputs-step="makeAPaymentInputs" />
    </template>
    <template #action>
      <VButton color="primary" raised @click="submit" :loading="loading"
        >Confirm</VButton
      >
    </template>
  </VModal>
</template>
