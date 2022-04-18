<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'
import { inputsInformation } from '/@src/models/Staffs'
import { getInput } from '/@src/models/Mixin.ts'

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

const image = computed(() => {
  return `${API_WEB_URL.value}storage/${
    getInput(inputsInformation.value, 'photo').model
  }`
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
    <div class="d-flex justify-content-center">
      <VAvatar :picture="image" class="mb-4 mr-5" size="xl" />
    </div>
    <inputsLayaut :inputs-step="inputsInformation" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
