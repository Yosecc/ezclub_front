<script setup lang="ts">
import {
  computed,
  ref,
  defineProps,
  defineEmit,
  onMounted,
  watch,
  reactive,
} from 'vue'
import { setInputModelData, viewInput, getInput } from '/@src/models/Mixin.ts'
import { inputsInformation } from '/@src/models/Members.ts'
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

const isLoading = ref(false)

watch(
  () => props.inputs,
  (count, prevCount) => {
    reloadForm()
  }
)

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const families = ref([])

const inputsSteps = computed(() => {
  reloadForm()
  families.value.forEach((inputs, key) => {
    if (minorsKeys.value.includes(key)) {
      families.value[key] = inputs.filter((input) =>
        input.category.includes('Minor')
      )
    } else {
      families.value[key] = JSON.parse(JSON.stringify(props.inputs))
    }
  })

  return families.value
})

const emit = defineEmit(['changeStep', 'returData'])

const change = (val) => {
  emit('returData', families)
  emit('changeStep', val)
}

const minorsKeys = ref([])

const changeSwitchKey = (key) => {
  let index = minorsKeys.value.findIndex((element) => element == key)
}

const mostrar = computed(() => {
  if (families.value.length > 0) {
    return true
  }
  return false
})

const cantidadFamiliares = ref(0)

const addFamily = () => {
  if (cantidadFamiliares.value > 0) {
    for (var i = 0; i < cantidadFamiliares.value; ++i) {
      const inputs = reactive(JSON.parse(JSON.stringify(props.inputs)))
      getInput(inputs, 'misma_direccion').change = mismaDirection
      families.value.push(inputs)
    }
    // mostrar.value = true
  }
}

const mismaDirection = function (inputsSteps) {
  if (!this.model) {
    setInputModelData(
      inputsSteps,
      'address',
      viewInput(inputsInformation.value, 'address')
    )
    setInputModelData(
      inputsSteps,
      'postal_code',
      viewInput(inputsInformation.value, 'postal_code')
    )
    setInputModelData(
      inputsSteps,
      'country_id',
      viewInput(inputsInformation.value, 'country_id')
    )
    setInputModelData(
      inputsSteps,
      'city_id',
      viewInput(inputsInformation.value, 'city_id')
    )
    setInputModelData(
      inputsSteps,
      'state_id',
      viewInput(inputsInformation.value, 'state_id')
    )
  } else {
    setInputModelData(inputsSteps, 'postal_code', '')
    setInputModelData(inputsSteps, 'country_id', '')
    setInputModelData(inputsSteps, 'city_id', '')
    setInputModelData(inputsSteps, 'state_id', '')
  }
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
    <div v-if="mostrar">
      <V-Card v-for="(family, ke) in families" :key="ke" class="mb-4">
        <inputsLayaut
          :inputs-step="family"
          @changeSwitch="changeSwitchKey(ke)"
        />
        <V-Button
          @click="families.splice(ke, 1)"
          color="danger"
          class="mx-auto"
          icon="fas fa-times"
        >
          Remove Family Member
        </V-Button>
      </V-Card>
    </div>

    <div
      v-if="!mostrar"
      class="column d-flex justify-content-center flex-column is-4 mx-auto"
    >
      <VField class="mb-4">
        <VControl>
          <input
            type="number"
            v-model="cantidadFamiliares"
            class="input text-center"
            placeholder="Family quantity"
          />
        </VControl>
      </VField>

      <V-Button @click="addFamily" color="info" icon="fas fa-check" raised>
        Add Another Family Member
      </V-Button>
    </div>
  </formLayaut>
</template>
