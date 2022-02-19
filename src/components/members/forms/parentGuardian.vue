<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'

import { parentInsputs } from '/@src/models/Members.ts'

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  inputs: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmit(['changeStep', 'returData'])

const change = (val) => {
  // emit('returData', parentInsputs)
  emit('changeStep', val)
}
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :is-loading="isLoading"
    :buttons="['next', 'prev']"
    :step="2"
    @changeStep="change"
  >
    <inputsLayaut :inputs-step="parentInsputs" />
  </formLayaut>
</template>
