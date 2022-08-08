<script setup lang="ts">
import { defineProps, defineEmit, onMounted, computed } from 'vue'

import {
  inputsUpgradeSubscription,
  getMeberships,
} from '/@src/models/Memberships.ts'

import {
  member,
  updateMembershipMembers,
  getRecurrencesSelect,
} from '/@src/models/Members.ts'

import {
  setInputValuesData,
  perpareDataInputs,
  getInput,
  notyf,
} from '/@src/models/Mixin.ts'

const props = defineProps({
  open: Boolean,
})

const emit = defineEmit(['closeModal'])

const handleCloseModal = () => {
  emit('closeModal')
}

const handleSubmit = async () => {
  const inputs = perpareDataInputs(inputsUpgradeSubscription)
  const body = inputs
  console.log(body)
  const id = member.value.membership_members.id

  try {
    await updateMembershipMembers(id, body)
    handleCloseModal()
    notyf.success('Success')
  } catch (error) {
    notyf.error('Error')
  }
}

const handleMemebershipChange = (e: any) => {
  const membership_id_selected = e.filter(
    (item: any) => item.name === 'memberships_id'
  )[0].model

  getRecurrencesSelect(membership_id_selected, true).then((response) => {
    getInput(inputsUpgradeSubscription, 'recurrences_id').values =
      response.data.filter(
        (item: any) =>
          item.id !== member.value.membership_members.recurrences_id
      )
  })
}

onMounted(async () => {
  const { data } = await getMeberships()

  setInputValuesData(
    inputsUpgradeSubscription,
    'memberships_id',
    data.memberships
  )
  getInput(inputsUpgradeSubscription, 'memberships_id').change =
    handleMemebershipChange
})
</script>

<template>
  <VModal :open="open" size="small" actions="center" @close="handleCloseModal">
    <template #content>
      <inputsLayaut :inputs-step="inputsUpgradeSubscription" />
    </template>
    <template #action>
      <VButton color="primary" @click="handleSubmit" raised>Confirm</VButton>
    </template>
  </VModal>
</template>
