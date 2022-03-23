<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import {
  inputsProducts,
  putProduct,
  storeProduct,
} from '/@src/models/Products.ts'
import {
  perpareDataInputs,
  notyf,
  viewInput,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
import { API_WEB_URL } from '/@src/services'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
})

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new product',
      subtitle: 'Add information for a new product',
    }
  }
  return {
    title: 'Edit product',
    subtitle: 'Edit information for a product',
  }
})

const image = computed(() => {
  return `${API_WEB_URL.value}storage/${viewInput(
    inputsProducts.value,
    'photo'
  )}`
})

const onSave = () => {
  const data = perpareDataInputs(inputsProducts.value)
  const fd = new FormData()
  for (var i in data) {
    if (i == 'locations') {
      data[i].forEach((element) => {
        fd.append('locations[]', element)
      })
    } else {
      fd.append(i, data[i])
    }
  }
  console.log(...fd)

  if (props.type == 'edit') {
    putProduct(fd)
      .then((response) => {
        notyf.success(response.data.message)
        cleanUpModelInputs(inputsProducts.value)
        router.back()
      })
      .catch((error) => {
        for (var i in error.response.data.errores) {
          error.response.data.errores[i].forEach((e) => {
            notyf.error(`${i}: ${e}`)
          })
        }
      })
  }
  if (props.type == 'create') {
    storeProduct(fd)
      .then((response) => {
        notyf.success(response.data.message)
        cleanUpModelInputs(inputsProducts.value)
        router.back()
      })
      .catch((error) => {
        for (var i in error.response.data.errores) {
          error.response.data.errores[i].forEach((e) => {
            notyf.error(`${i}: ${e}`)
          })
        }
      })
  }
}
</script>

<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
          {{ titles.title }}
        </h1>
        <p>{{ titles.subtitle }}</p>
      </div>
    </template>
    <template #header-right>
      <VButton @click="router.back()" class="mr-3"> Go Back </VButton>

      <VButton @click="onSave" color="primary"> Save Changes </VButton>
    </template>
    <template #content>
      <div class="column mx-auto">
        <div class="p-6">
          <h1 class="title is-5 mb-0">Product Picture</h1>

          <div class="d-flex justify-content-center">
            <div class="text-center">
              <VAvatar :picture="image" class="mb-4" size="xl" />
              <inputsLayaut :inputs-step="input_image" />
            </div>
          </div>
        </div>
        <inputsLayaut :inputs-step="inputsProducts" />
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
