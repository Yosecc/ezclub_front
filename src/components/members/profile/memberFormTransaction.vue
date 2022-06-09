<script setup lang="ts">
import { defineProps, watch, onMounted, defineEmit } from 'vue'
import {
  member,
  inputsCredit,
  addCredit,
  removeCredit,
} from '/@src/models/Members.ts'
import { perpareDataInputs, notyf } from '/@src/models/Mixin.ts'

const props = defineProps({
  openModal: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmit(['closeModal', 'refreshTransactions'])

const submit = async () => {
  console.log(member)
  const data = perpareDataInputs(inputsCredit.value)
  const body = {
    amount: data.amount,
    description: data.description,
  }

  if (data.transaction_type === 'Add Credit') {
    await addCredit(member.value.id, body)
  } else {
    await removeCredit(member.value.id, body)
  }
  notyf.success('Success')
  emit('closeModal')
  emit('refreshTransactions')
}
</script>

<template>
  <VModal
    :open="props.openModal"
    title="Create a new transaction"
    size="small"
    actions="right"
    @close="
      () => {
        emit('closeModal')
      }
    "
  >
    <template #content>
      <inputsLayaut :inputs-step="inputsCredit" />
    </template>
    <template #action>
      <VButton color="primary" raised @click="submit">Confirm</VButton>
    </template>
  </VModal>
</template>
