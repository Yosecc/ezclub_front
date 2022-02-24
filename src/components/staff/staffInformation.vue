<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { inputsInformation } from '/@src/models/Staffs'

const router = useRouter()

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
      title: 'Add a new staff',
      subtitle: 'Add information for a new staff',
    }
  }
  return {
    title: 'Edit staff',
    subtitle: 'Edit information for a staff',
  }
})

const emit = defineEmit(['changeStep', 'saveData'])
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
    @saveData="$emit('saveData')"
  >
    <inputsLayaut :inputs-step="inputsInformation" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
