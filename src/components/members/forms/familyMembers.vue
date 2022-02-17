<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted, watch } from 'vue'

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

const families = ref([JSON.parse(JSON.stringify(props.inputs))])

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

const addFamily = () => {
  families.value.push(JSON.parse(JSON.stringify(props.inputs)))
}

const emit = defineEmit(['changeStep', 'returData'])

const change = (val) => {
  emit('returData', families)
  emit('changeStep', val)
}

const minorsKeys = ref([])

const changeSwitchKey = (key) => {
  console.log('es este')
  console.log(key)
  console.log(inputsSteps.value)
  let index = minorsKeys.value.findIndex((element) => element == key)
  // if(index == '-1' || index == -1){
  //   minorsKeys.value.push(key)
  // }else{
  //   minorsKeys.value.splice(index, 1)
  // }
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
    <!-- <p>{{ minorsKeys }}</p> -->
    <V-Card v-for="(family, ke) in inputsSteps" :key="ke" class="mb-4">
      <inputsLayaut :inputs-step="family" @changeSwitch="changeSwitchKey(ke)" />
      <V-Button
        v-if="ke > 0"
        @click="families.splice(ke, 1)"
        color="danger"
        class="mx-auto"
        icon="fas fa-times"
      >
        Remove Family Member
      </V-Button>
    </V-Card>
    <div class="column d-flex justify-content-center is-12">
      <V-Button @click="addFamily" color="info" icon="fas fa-check" raised>
        Add Another Family Member
      </V-Button>
    </div>
  </formLayaut>
</template>

<style lang="scss">
// @import '../../scss/abstracts/_variables.scss';
// @import '../../scss/abstracts/_mixins.scss';
</style>
