<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { inputsUser, storeUserStaff } from '/@src/models/Staffs'
import { perpareDataInputs, notyf } from '/@src/models/Mixin.ts'
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
      title: 'Add a new User',
      subtitle: 'Add User',
    }
  }
  return {
    title: 'Edit User',
    subtitle: 'Edit User',
  }
})

const saveData = () => {
  // let data = {}

  const data = perpareDataInputs(inputsUser.value)
  storeUserStaff(data)
    .then((response) => {
      notyf.success('Success')
    })
    .catch((error) => {
      for (var i in error.response.data) {
        notyf.error(`${i}: ${error.response.data[i]}`)
      }
    })
}
</script>

<template>
  <formLayaut
    @saveData="saveData"
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
  >
    <inputsLayaut :inputs-step="inputsUser" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
