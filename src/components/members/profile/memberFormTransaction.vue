<script setup lang="ts">
import { defineProps, ref, defineEmit } from 'vue'
import {
  member,
  inputsCredit,
  addCredit,
  removeCredit,
} from '/@src/models/Members.ts'
import {
  perpareDataInputs,
  cleanUpModelInputs,
  notyf,
} from '/@src/models/Mixin.ts'

const props = defineProps({
  openModal: {
    type: Boolean,
    default: false,
  },
})

// loading
const loading = ref(false)

const emit = defineEmit(['closeModal', 'refreshTransactions'])

const submit = async () => {
  const data = perpareDataInputs(inputsCredit.value)
  const body = {
    amount: data.amount,
    description: data.description,
  }

  loading.value = true

  try {
    if (data.transaction_type === 'Add Credit') {
      await addCredit(member.value.id, body)
    } else {
      await removeCredit(member.value.id, body)
    }

    cleanUpModelInputs(inputsCredit.value)

    notyf.success('Success')
    emit('closeModal')
    emit('refreshTransactions')
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
  cleanUpModelInputs(inputsCredit.value)
  emit('closeModal')
}
</script>

<template>
  <VModal
    :open="props.openModal"
    title="Create a new transaction"
    size="small"
    actions="right"
    @close="closeModal"
  >
    <template #content>
      <inputsLayaut :inputs-step="inputsCredit" />
    </template>
    <template #action>
      <VButton color="primary" raised @click="submit" :loading="loading"
        >Confirm</VButton
      >
    </template>
  </VModal>
</template>
