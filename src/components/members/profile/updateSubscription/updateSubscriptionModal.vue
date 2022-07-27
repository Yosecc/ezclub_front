<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

import { inputsUpgradeSubscription } from '/@src/models/Memberships.ts'

const props = defineProps({
  open: Boolean,
})

const emit = defineEmit(['closeModal'])

const handleCloseModal = () => {
  emit('closeModal')
}
</script>

<template>
  <VModal :open="open" size="small" actions="center" @close="handleCloseModal">
    <template #content>
      <inputsLayaut :inputs-step="inputsUpgradeSubscription" />
    </template>
    <template #action>
      <VButton color="primary" raised>Confirm</VButton>
    </template>
  </VModal>
</template>
