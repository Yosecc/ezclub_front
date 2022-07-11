<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRouter } from 'vue-router'
import {
  getInventories,
  inventories,
  storeInventory,
  closeAndApplyInentory,
  locationInventory,
} from '/@src/models/Inventory.ts'
import {
  getCompany,
  company,
  locationsSelect,
  locationsActives,
} from '/@src/models/Companies.ts'
import { API_URL } from '/@src/services'

import {
  getProducts,
  products,
  putStockProduct,
} from '/@src/models/Products.ts'
import { notyf, setInputValuesData, getInput } from '/@src/models/Mixin.ts'
import moment from 'moment'
import { users } from '/@src/data/layouts/flex-list-v1'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return products.value
  } else {
    return products.value.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.var_code.match(new RegExp(filters.value, 'i'))
        // item.industry.match(new RegExp(filters.value, 'i')) ||
        // item.status.match(new RegExp(filters.value, 'i')) ||
        // item.location.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

pageTitle.value = 'Inventory'
useHead({
  title: 'Inventory',
})

const router = useRouter()
const modalNewInventory = ref(false)
const centeredActionsOpen = ref(false)
const text = ref('')
const idInventory = ref(null)
const isLoaded = ref(false)

onMounted(() => {
  getCompany().then((response) => {
    setInputValuesData(locationsSelect, 'locations_id', locationsActives.value)
    getInput(locationsSelect.value, 'locations_id').change = changeLocation
    if (cookies.get('locations_id') != null) {
      getInput(locationsSelect.value, 'locations_id').model =
        cookies.get('locations_id')
      changeLocation(cookies.get('locations_id'))
    }
    getProducts(getInput(locationsSelect.value, 'locations_id').model, 'active')
  })
})

const changeLocation = function (value) {
  if (typeof value == 'object') {
    value = this.model
  }
  isLoaded.value = true
  getProducts(
    getInput(locationsSelect.value, 'locations_id').model,
    'active'
  ).then((response) => {
    isLoaded.value = false
  })
}

const saveStock = (item) => {
  item.loading = true
  console.log(item)
  putStockProduct({ id: item.id, stock: item.stock })
    .then((response) => {
      item.classe = 'success'
      item.loading = false
      notyf.success(response.data)
    })
    .catch((error) => {
      notyf.error(error.response.data)
    })
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <VCard class="mb-6">
        <div class="d-flex justify-content-between align-items-center">
          <div class="w-100">
            <div v-if="!locationInventory" class="w-100">
              <h1 class="title is-4">Select a location</h1>
            </div>
            <inputsLayaut :inputs-step="locationsSelect" />
          </div>
          <!-- <V-Button
            v-if="!isLoaded && locationInventory"
            color="primary"
            @click="modalNewInventory = true"
            raised
            class="mb-4"
            >New Inventory</V-Button
          > -->
        </div>
      </VCard>

      <VLoader size="large" :active="isLoaded">
        <div class="flex-list-wrapper flex-list-v1">
          <!--List Empty Search Placeholder -->
          <V-PlaceholderPage
            :class="[filteredData.length !== 0 && 'is-hidden']"
            title="We couldn't find any matching results."
            subtitle="Too bad. Looks like we couldn't find any matching results for the
            search terms you've entered. Please try different search terms or
            criteria."
            larger
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/search-4.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                alt=""
              />
            </template>
          </V-PlaceholderPage>

          <div class="flex-table">
            <!--Table header-->
            <div
              class="flex-table-header"
              :class="[filteredData.length === 0 && 'is-hidden']"
            >
              <span class="">ID</span>
              <span>Photo</span>
              <span>Name</span>
              <span class="justify-content-end">Stock</span>
            </div>

            <div class="flex-list-inner">
              <transition-group name="list" tag="div">
                <!--Table item-->
                <div
                  v-for="item in filteredData"
                  :key="item.id"
                  class="flex-table-item"
                >
                  <div data-th="ID" class="flex-table-cell">
                    <div>
                      <span class="item-name dark-inverted">{{ item.id }}</span>
                    </div>
                  </div>

                  <div class="flex-table-cell">
                    <img
                      class=""
                      style="height: 60px"
                      :src="`${API_URL}storage/${item.photo}`"
                      alt=""
                    />
                  </div>

                  <div class="flex-table-cell">
                    <span class="light-text">{{ item.name }}</span>
                  </div>
                  <div
                    class="flex-table-cell justify-content-end"
                    data-th="Date Close"
                  >
                    <form @submit.prevent="saveStock(item)" class="d-flex">
                      <input
                        type="text"
                        class="input h-100"
                        v-model="item.stock"
                      />
                      <VLoader size="small" :active="item.loading">
                        <VButton
                          type="submit"
                          :color="item.classe"
                          class=""
                          style="font-size: 10px; height: 35px"
                          size=""
                          >SAVE</VButton
                        >
                      </VLoader>
                    </form>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>

          <!--Table Pagination-->
          <!-- <V-FlexPagination
            v-if="filteredData.length > 5"
            :item-per-page="10"
            :total-items="873"
            :current-page="42"
            :max-links-displayed="7"
          /> -->
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
