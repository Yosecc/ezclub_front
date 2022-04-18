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
import { getCompany, company, locationsSelect } from '/@src/models/Companies.ts'
import { notyf, setInputValuesData, getInput } from '/@src/models/Mixin.ts'
import moment from 'moment'
import { users } from '/@src/data/layouts/flex-list-v1'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return inventories.value
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.industry.match(new RegExp(filters.value, 'i')) ||
        item.status.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i'))
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
    setInputValuesData(locationsSelect, 'locations_id', company.value.locations)
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
  getInventories(value).then((response) => {
    isLoaded.value = false
  })
}

const closeInventory = () => {
  // console.log(idInventory.value)
  centeredActionsOpen.value = false
  isLoaded.value = true
  text.value =
    'Processing Inventory... Please do not close the browser window until the process is complete'

  closeAndApplyInentory(idInventory.value)
    .then((response) => {
      notyf.success('Success')
      isLoaded.value = false
      text.value = ''
      getInventories()
      window.location.reload()
    })
    .catch((error) => {
      notyf.error(error.response.data)
      isLoaded.value = false
      text.value = ''
    })
}

const newInventory = () => {
  modalNewInventory.value = false
  isLoaded.value = true
  text.value = 'wait a moment, you will be redirected'

  storeInventory()
    .then((response) => {
      router.push({
        name: 'settings-inventory-create',
        query: {
          id: response.data.inventory,
          locations_id: locationInventory.value,
        },
      })
    })
    .catch((error) => {
      notyf.error(error.response.data.message)
      isLoaded.value = false
      text.value = error.response.data.message
    })
}

const data = computed(() => {
  let datos = []
  inventories.value.forEach((element) => {
    datos.push([
      element.id,
      element.status,
      element.created_at,
      element.updated_at,
      100,
      1,
    ])
  })
  return datos
})

watch(data, (to) => {
  isLoaded.value = true

  setTimeout(() => {
    isLoaded.value = false
  }, 500)
})
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
          <V-Button
            v-if="!isLoaded && locationInventory"
            color="primary"
            @click="modalNewInventory = true"
            raised
            class="mb-4"
            >New Inventory</V-Button
          >
        </div>
      </VCard>

      <V-Modal
        :open="centeredActionsOpen"
        actions="center"
        @close="centeredActionsOpen = false"
      >
        <template #content>
          <V-PlaceholderSection
            title=" Are you sure you want to close inventory?"
            subtitle="This action will modify the stock of all products for sale and cannot be undone"
          />
        </template>
        <template #action>
          <V-Button color="primary" @click="closeInventory" raised
            >Confirm</V-Button
          >
        </template>
      </V-Modal>

      <V-Modal
        :open="modalNewInventory"
        actions="center"
        @close="modalNewInventory = false"
      >
        <template #content>
          <V-PlaceholderSection
            title=" Are you sure to create a new inventory?"
            subtitle="This action blocks all movements related to sales, creation and editing of products in the system until the inventory is closed."
          />
        </template>
        <template #action>
          <V-Button color="primary" @click="newInventory" raised
            >Confirm</V-Button
          >
        </template>
      </V-Modal>

      <h1 v-if="isLoaded" class="title is-4">{{ text }}</h1>

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
              <span>Status</span>
              <span>Date Open</span>
              <span>Date Close</span>
              <span>Products Total</span>
              <span class="">Actions</span>
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

                  <div class="flex-table-cell" data-th="Status">
                    <span
                      v-if="item.status === 1"
                      class="tag is-success is-rounded"
                      >Active</span
                    >
                    <span v-if="item.status === 0" class="tag is-rounded"
                      >Close</span
                    >
                    <span
                      v-if="item.status === 2"
                      class="tag is-info is-rounded"
                      >Process</span
                    >
                  </div>

                  <div class="flex-table-cell" data-th="Date Open">
                    <span class="light-text">{{
                      moment(item.created_at).format('dd - DD/MM/YYYY')
                    }}</span>
                  </div>
                  <div class="flex-table-cell" data-th="Date Close">
                    <span v-if="item.close" class="light-text">{{
                      moment(item.close).format('dd - DD/MM/YYYY')
                    }}</span>
                    <span v-else>-</span>
                  </div>
                  <div class="flex-table-cell" data-th="Products Total">
                    <span class="light-text">{{ item.products.length }}</span>
                  </div>
                  <div class="flex-table-cell" data-th="Actions">
                    <V-Button
                      color="success"
                      @click="
                        ;(centeredActionsOpen = true), (idInventory = item.id)
                      "
                      raised
                      v-if="item.status == 1"
                      class="mr-4"
                      >Close Inventory</V-Button
                    >

                    <V-Button
                      :to="{
                        name: 'settings-inventory-create',
                        query: { id: item.id, locations_id: locationInventory },
                      }"
                      >View</V-Button
                    >
                  </div>
                </div>
              </transition-group>
            </div>
          </div>

          <!--Table Pagination-->
          <V-FlexPagination
            v-if="filteredData.length > 5"
            :item-per-page="10"
            :total-items="873"
            :current-page="42"
            :max-links-displayed="7"
          />
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
