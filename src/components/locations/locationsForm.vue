<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  location,
  inputsLocation,
  getLocation,
} from '/@src/models/Companies.ts'

import { setInputValuesData, setInputModelData } from '/@src/models/Mixin.ts'

const route = useRoute()

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save', 'back'],
  },
  step: {
    type: Number,
    default: 1,
  },
})

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new location',
      subtitle: 'Add information for a new location',
    }
  }
  return {
    title: 'Edit location',
    subtitle: 'Edit information for a location',
  }
})

const emit = defineEmit(['saveData'])
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
    @saveData="$emit('saveData')"
  >
    <inputsLayaut :inputs-step="inputsLocation" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
