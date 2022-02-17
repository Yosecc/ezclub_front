<script setup lang="ts">
import { computed, ref, defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'

import { inputsContacto } from '/@src/models/Companies.ts'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save'],
  },
  step: {
    type: Number,
    default: 1,
  },
})

const titles = computed(() => {
  return {
    title: 'Club Representatives',
    subtitle: 'Edit Club representative',
  }
})

// const emit = defineEmit(['changeStep','saveData']);
</script>

<template>
  <formLayaut :buttons="props.buttons" :step="props.step" :titles="titles">
    <inputsLayaut :inputs-step="inputsContacto" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
