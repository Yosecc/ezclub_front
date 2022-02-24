<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { inputsPermitions } from '/@src/models/Staffs'

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
      subtitle: 'Add permitions and roles',
    }
  }
  return {
    title: 'Edit staff',
    subtitle: 'Edit permitions and roles',
  }
})
</script>

<template>
  <formLayaut :buttons="props.buttons" :step="props.step" :titles="titles">
    <inputsLayaut :inputs-step="inputsPermitions" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
