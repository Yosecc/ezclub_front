<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import moment from 'moment'
import {
  inputsProducts,
  putProduct,
  storeProduct,
  priceInputs,
  addNewPrice,
  product,
} from '/@src/models/Products.ts'
import {
  perpareDataInputs,
  notyf,
  viewInput,
  cleanUpModelInputs,
  getInput,
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

const addPrice = () => {
  if (getInput(priceInputs.value, 'price').model != '') {
    if (
      confirm(
        'Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored'
      )
    ) {
      addNewPrice(getInput(priceInputs.value, 'price').model)
        .then((response) => {
          notyf.success('success save')
          window.location.reload()
        })
        .catch((error) => {
          for (var i in error.response.data.errores) {
            error.response.data.errores[i].forEach((e) => {
              notyf.error(`${i}: ${e}`)
            })
          }
        })
    }
  } else {
    notyf.error('Price is required')
  }
}

const onSave = () => {
  let data = perpareDataInputs(inputsProducts.value)
  data.price = getInput(priceInputs.value, 'price').model

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
  <div>
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
        <div class="columns is-multiline mx-auto">
          <div class="p-6 column is-12">
            <h1 class="title is-5 mb-0">Product Picture</h1>

            <div class="d-flex justify-content-center">
              <div class="text-center">
                <VAvatar :picture="image" class="mb-4" size="xl" />

                <inputsLayaut :inputs-step="input_image" />
              </div>
            </div>
          </div>
          <div class="column is-12">
            <inputsLayaut :inputs-step="inputsProducts" />
            <inputsLayaut v-if="type == 'create'" :inputs-step="priceInputs" />
          </div>
        </div>
      </template>
    </VCardAdvanced>
    <div v-if="!getInput(inputsProducts, 'custom').model">
      <VCard v-if="type == 'edit'" class="mt-4">
        <h1 class="title is-5">Prices</h1>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Price</th>
              <th scope="col">Create Date</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, key) in product.prices" :key="`price-${key}`">
              <td>
                <VTag
                  :color="price.status ? 'success' : 'danger'"
                  :label="price.status ? 'Active' : 'Archived'"
                  rounded
                />
              </td>
              <td>${{ price.price }}</td>
              <td>{{ moment(price.created_at).format('MM-DD-YYYY') }}</td>
              <td v-if="price.user">{{ price.user.name }}</td>
            </tr>
          </tbody>
        </table>

        <div class="w-100 justify-content-center d-flex">
          <inputsLayaut :inputs-step="priceInputs" />
          <VButton color="info" @click="addPrice" class="mt-5 ml-3">
            Add Price
          </VButton>
        </div>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
