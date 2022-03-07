<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'

import {
  company,
  input_image,
  inputsInformation,
  putCompanyInformation,
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
    title: 'Club General Information',
    subtitle: 'Edit Club information',
  }
})

const slogan = ref([
  {
    typeInput: 'text',
    name: 'slogan',
    placeholder: 'Slogan text',
    model: '',
    required: true,
    class: 'is-12',
  },
])

const saveData = () => {
  const obj = {
    ...perpareDataInputs(inputsInformation.value),
    ...perpareDataInputs(input_image.value),
  }

  const fd = new FormData()
  for (var i in obj) {
    fd.append(i, obj[i])
  }
  if (!hasErrors.value) {
    putCompanyInformation(fd).then((response) => {
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
    <div class="mb-4">
      <h1 class="title is-5 mb-0">Club Logo</h1>
      <p>This in how club is recognize</p>
      <div class="d-flex justify-content-center">
        <div class="text-center">
          <VAvatar
            :picture="`${API_WEB_URL}storage/${company.logo}`"
            class="mb-4"
            size="xl"
          />
          <inputsLayaut :inputs-step="input_image" />
        </div>
      </div>
    </div>
    <!-- <div class="mb-4">
      <h1 class="title is-5">Slogan</h1>
      <inputsLayaut
        :inputs-step="slogan"
      />
    </div> -->
    <!--  -->
    <h1 class="title is-5">Club Information</h1>
    <inputsLayaut :inputs-step="inputsInformation" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
