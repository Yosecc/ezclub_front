<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
import { Api, API_WEB_URL } from '/@src/services'
import {
  getCompany,
  company,
  locationsSelect,
  locationsActives,
} from '/@src/models/Companies.ts'
import { getProducts, products } from '/@src/models/Products.ts'
import { moneda, setInputValuesData, getInput } from '/@src/models/Mixin.ts'
import { locationInventory } from '/@src/models/Inventory.ts'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
pageTitle.value = 'Products'
useHead({
  title: 'Products',
})

onMounted(() => {
  getCompany().then((response) => {
    setInputValuesData(locationsSelect, 'locations_id', locationsActives.value)
    getInput(locationsSelect.value, 'locations_id').change = changeLocation
    if (cookies.get('locations_id') != null) {
      getInput(locationsSelect.value, 'locations_id').model =
        cookies.get('locations_id')
      changeLocation(cookies.get('locations_id'))
    }
  })
})

const changeLocation = function (value) {
  if (typeof value == 'object') {
    value = this.model
  }
  isLoaded.value = true
  locationInventory.value = value
  getProducts(value).then((response) => {
    isLoaded.value = false
  })
}

const datatableshow = ref(false)
const isLoaded = ref(false)

const data = computed(() => {
  let datos = []
  // console.log(products.value)
  if (products.value) {
    products.value.forEach((element) => {
      datos.push([
        element.id,
        element.photo,
        element.name,
        element.sku,
        element.price,
        'stock',
        element.category.name,
        element.status,
        element.id,
      ])
    })
  }
  return datos
})

watch(data, (to) => {
  isLoaded.value = true
  datatableshow.value = false
  setTimeout(() => {
    datatableshow.value = true
    isLoaded.value = false
  }, 500)
})
const renderPicture = (data: any, cell: any, row: any) => {
  return `<img class="" style="height: 60px" height="10px" src="${API_WEB_URL.value}storage/${data}" alt="">`
}

function renderButton(data: any, cell: any, row: any) {
  return `<div class="has-text-right"><a href="/settings/products/edit?id=${data}" class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Edit</a></div>`
}

const sumaTotalProducts = computed(() => {
  let suma = 0
  products.value.forEach((element) => {
    suma += element.price
  })
  return suma
})

const datatableV1 = computed(() => {
  return {
    perPageSelect: [5, 10, 20, 25, 50, 100],
    perPage: 10,
    columns: [
      { select: 0, hidden: true },
      { select: 1, render: renderPicture, sortable: false },
      // { select: 2, render: renderName },
      // { select: 3, render: renderPosition },
      { select: 4, render: moneda },
      { select: 5, hidden: true },

      { select: 8, render: renderButton, sortable: false },
    ],
    data: {
      headings: [
        'ID',
        'Picture',
        'Name',
        'SKU',
        'PRICE',
        'STOCK',
        'Category',
        'Status',
        'Actions',
      ],
      data: data.value,
    },
  }
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->

    <VCard class="mb-6">
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-100">
          <div v-if="!locationInventory" class="w-100">
            <h1 class="title is-4">Select a location</h1>
          </div>
          <inputsLayaut :inputs-step="locationsSelect" />
        </div>
        <V-Button
          :to="{ name: 'settings-products-create' }"
          color="primary"
          raised
        >
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>New Product</span>
        </V-Button>
      </div>
    </VCard>
    <div class="page-content-inner" v-if="products">
      <div class="columns is-multiline">
        <div class="is-4 column content-card">
          <VPlaceloadWrap v-if="isLoaded">
            <VPlaceload height="110px" width="100%" class="mx-2" />
          </VPlaceloadWrap>
          <VCard radius="small" v-else>
            <div class="d-flex justify-content-between align-items-center">
              <div class="icon">
                <p><i class="fas fa-list"></i></p>
              </div>
              <div class="text-right">
                <p>Unique Items</p>
                <h1 class="title is-2">{{ products.length }}</h1>
              </div>
            </div>
          </VCard>
        </div>

        <div class="is-4 column content-card">
          <VPlaceloadWrap v-if="isLoaded">
            <VPlaceload height="110px" width="100%" class="mx-2" />
          </VPlaceloadWrap>
          <VCard radius="small" v-else>
            <div class="d-flex justify-content-between align-items-center">
              <div class="icon">
                <p><i class="fas fa-shopping-bag"></i></p>
              </div>
              <div class="text-right">
                <p>Total Quantity</p>
                <h1 class="title is-2">0</h1>
              </div>
            </div>
          </VCard>
        </div>

        <div class="is-4 column content-card">
          <VPlaceloadWrap v-if="isLoaded">
            <VPlaceload height="110px" width="100%" class="mx-2" />
          </VPlaceloadWrap>
          <VCard radius="small" v-else>
            <div class="d-flex justify-content-between align-items-center">
              <div class="icon">
                <p><i class="fas fa-comment-dollar"></i></p>
              </div>
              <div class="text-right">
                <p>Value</p>
                <h1 class="title is-2">$0.00</h1>
              </div>
            </div>
          </VCard>
        </div>
      </div>

      <VLoader size="large" :active="isLoaded">
        <div style="min-height: 300px">
          <V-SimpleDatatables v-if="datatableshow" :options="datatableV1" />
        </div>
      </VLoader>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
.content-card .icon {
  font-size: 30px;
  // color: white;
}
</style>
