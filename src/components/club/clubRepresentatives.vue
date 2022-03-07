<script setup lang="ts">
import { computed, ref, defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'

import {
  company,
  inputsContacto,
  putCompanyContact,
} from '/@src/models/Companies.ts'
import { perpareDataInputs, hasErrors, notyf } from '/@src/models/Mixin.ts'
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

const saveData = () => {
  const obj = {
    ...perpareDataInputs(inputsContacto.value),
  }

  const fd = new FormData()
  for (var i in obj) {
    fd.append(i, obj[i])
  }
  if (!hasErrors.value) {
    putCompanyContact(fd).then((response) => {
      if (response.data.status) {
        notyf.success('Succeeded')
        company.value = response.data.company
      } else {
        notyf.error(response.data.mensaje)
        for (var i in response.data.errores) {
          response.data.errores[i].forEach((e) => {
            notyf.error(`${i} : ${e}`)
          })
        }
      }
    })
  }
}
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
    @saveData="saveData"
  >
    <inputsLayaut :inputs-step="inputsContacto" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
