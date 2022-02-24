<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute } from 'vue-router'
// import { Api } from '/@src/services'
import { locations, getCompany } from '/@src/models/Companies.ts'
import { setInputValuesData, setInputModelData } from '/@src/models/Mixin.ts'
import {
  getProduct,
  inputsProducts,
  geCategories,
} from '/@src/models/Products.ts'

import { getTaxes } from '/@src/services/config.ts'

pageTitle.value = 'New Product'

useHead({
  title: 'Products',
})

const route = useRoute()

onMounted(() => {
  getCompany().then((response) => {
    setInputValuesData(inputsProducts, 'locations', locations.value)
  })
  getTaxes().then((response) => {
    setInputValuesData(inputsProducts, 'taxes_id', response.value)
  })
  geCategories().then((response) => {
    setInputValuesData(inputsProducts, 'product_categories_id', response.data)
  })
  getProduct(route.query.id).then((response) => {
    console.log(response.data)
    for (var i in response.data) {
      if (i == 'status') {
        if (response.data[i] == 'active') {
          setInputModelData(inputsProducts, 'status', 'status')
        } else {
          setInputModelData(inputsProducts, 'status', '')
        }
      } else if (i == 'locations') {
        let ids = []

        response.data[i].forEach((element) => {
          ids.push(element.locations_id)
        })
        setInputModelData(inputsProducts, i, ids)
      } else {
        setInputModelData(inputsProducts, i, response.data[i])
      }
    }
    console.log('inputsProducts', inputsProducts.value)
  })
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <productForm type="edit" />
    </div>
  </SidebarLayout>
</template>
