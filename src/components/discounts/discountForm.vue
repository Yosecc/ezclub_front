<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { inputs, storeDiscount, putDiscount } from '/@src/models/Discounts'
import {
  notyf,
  perpareDataInputs,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  cleanUpModelInputs(inputs.value)
})

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
      title: 'Add a new discount',
      subtitle: 'Add information for a new discount',
    }
  }
  return {
    title: 'Edit discount',
    subtitle: 'Edit information for a discount',
  }
})

const saveData = () => {
  const data = perpareDataInputs(inputs.value)

  if (props.type == 'create') {
    storeDiscount(data).then((response) => {
      if (response.data.status) {
        notyf.success('Success')
        cleanUpModelInputs(inputs.value)
        router.back()
      } else {
        notyf.error(response.data.mensaje)
        for (var i in response.data.errores) {
          response.data.errores[i].forEach((e) => {
            notyf.error(`${i} : ${e}`)
          })
        }
      }
    })
  } else if (props.type == 'edit') {
    putDiscount(route.query.id, data).then((response) => {
      if (response.data.status) {
        notyf.success('Success')
        cleanUpModelInputs(inputs.value)
        router.back()
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
    <inputsLayaut :inputs-step="inputs" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
