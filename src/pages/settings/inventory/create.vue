<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { getCompany, company } from '/@src/models/Companies.ts'
import {
  getInventary,
  inventory,
  storeInventoryProducts,
} from '/@src/models/Inventory.ts'
import { products, getProducts } from '/@src/models/Products.ts'
import { notyf } from '/@src/models/Mixin.ts'
import { API_WEB_URL } from '/@src/services/index.ts'
pageTitle.value = 'Inventory Create'
useHead({
  title: 'Inventory',
})

const route = useRoute()
const router = useRouter()

const data_list = ref([])

onMounted(() => {
  isLoading.value = true

  getProducts().then((response) => {
    getInventary(route.query.id).then((response) => {
      processData()
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    })
  })
})

const productsData = ref([])
const productsComputed = computed(() => {
  return productsData.value
})

const processData = () => {
  products.value.forEach((element) => {
    let current_stock = null
    let previous_stock = null
    let subtotal = null
    let status = false

    if (inventory.value.products != undefined) {
      let get = inventory.value.products.find((e) => e.product_id == element.id)

      if (get != undefined) {
        // console.log('get', get)
        current_stock = get.current_stock
        previous_stock = get.previous_stock
        subtotal = current_stock + previous_stock
        status = true
      }
    }

    let datos = {
      id: element.id,
      name: element.name,
      photo: element.photo,
      current_stock: current_stock,
      previous_stock: previous_stock,
      subtotal: subtotal,
      status: status,
    }

    if (inventory.value.status == 0 && datos.status == false) {
    } else {
      productsData.value.push(datos)
    }
  })

  return
}

const changeNumber = (id: any) => {
  // if(productsComputed.value != undefined){
  //   productsComputed.value.map((e)=>{
  //     if(e.id == id){
  //       return  e.subtotal = parseFloat(e.current_stock) + parseFloat(e.previous_stock)
  //     }
  //   })
  // }
}

const isLoading = ref(false)
const centeredActionsOpen = ref(false)
const text = ref(
  'Processing Inventory... Please do not close the browser window until the process is complete'
)
const saveProductsInventory = () => {
  centeredActionsOpen.value = false
  isLoading.value = true
  let data = { products: dataProductsConfirmados.value }

  storeInventoryProducts(data).then((response) => {
    console.log('response.data', response.data)
    notyf.success('Data Save')
    isLoading.value = false
  })
}

const confirmModal = ref({})

const dataProductsConfirmados = ref([])

const confirmar = () => {
  centeredActionsOpen.value = true

  productsComputed.value.forEach((element) => {
    if (element.previous_stock != null && element.current_stock != null) {
      dataProductsConfirmados.value.push({
        product_id: element.id,
        previous_stock: element.previous_stock,
        current_stock: element.current_stock,
      })
    }
  })

  confirmModal.value = `Do you want to save ${dataProductsConfirmados.value.length} products out of ${products.value.length}? Products not added in inventory will have stock = 0`
}

const totalProduct = (current_stock, previous_stock) => {
  return parseFloat(current_stock) + parseFloat(previous_stock)
}

const inventoryProducts = computed(() => {
  if (inventory.value.products != undefined) {
    return inventory.value.products.length
  }
  return ''
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner" v-if="inventory">
      <h1 class="title is-4 mb-0">Inventory #{{ inventory.id }}</h1>
      <h1 class="title is-6 mb-0">
        Status: {{ inventory.status == 1 ? 'Active' : 'Close' }}
      </h1>
      <h1 v-if="inventory" class="title is-6">
        Products: {{ inventoryProducts }}
      </h1>

      <div v-if="isLoading">
        <p class="title is-5">{{ text }}</p>
        <VPlaceload height="200px" />
      </div>
      <div v-else>
        <div class="d-flex justify-content-end mb-4 w-100">
          <V-Button
            color="success"
            v-if="inventory.status"
            @click="confirmar"
            raised
            >Save</V-Button
          >
        </div>
        <V-FlexTable>
          <template #header>
            <div class="flex-table-header">
              <!-- <span>ID</span> -->
              <span>Product</span>
              <span>Previous stock</span>
              <span>Current stock</span>
              <span>Total</span>
              <span>-</span>
            </div>
          </template>
          <template #body>
            <div
              v-for="row in productsData"
              :key="row.id"
              class="flex-table-item"
            >
              <!-- <div class="flex-table-cell is-bold" data-th="ID">
                <span class="dark-text">{{ row.id }}</span>
              </div> -->
              <div class="flex-table-cell" data-th="product">
                <span class="light-text d-flex align-items-center">
                  <V-Avatar
                    :picture="`${API_WEB_URL}storage/${row.photo}`"
                    color="primary"
                    size="medium"
                    class="mr-3"
                  />
                  <div>
                    <p>{{ row.name }}</p>
                  </div>
                </span>
              </div>
              <div class="flex-table-cell" data-th="current_stock">
                <V-Field>
                  <V-Control>
                    <input
                      v-model="row.previous_stock"
                      type="number"
                      class="input"
                      :readonly="inventory.status == 0"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="flex-table-cell" data-th="previous_stock">
                <V-Field>
                  <V-Control>
                    <input
                      v-model="row.current_stock"
                      type="number"
                      class="input"
                      :readonly="inventory.status == 0"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="flex-table-cell" data-th="previous_stock">
                <p>{{ !isNaN(row.subtotal) ? row.subtotal : '' }}</p>
              </div>
              <div class="flex-table-cell" data-th="-">
                <VTag
                  v-if="row.status"
                  color="success"
                  label="Save"
                  rounded
                  elevated
                />
                <VTag
                  v-else
                  :color="undefined"
                  label="Pending"
                  rounded
                  elevated
                />
              </div>
            </div>
          </template>
        </V-FlexTable>
        <div class="d-flex justify-content-end mt-4 w-100">
          <V-Button
            color="success"
            v-if="inventory.status"
            @click="confirmar"
            raised
            >Save</V-Button
          >
        </div>
      </div>
      <V-Modal
        :open="centeredActionsOpen"
        actions="center"
        @close="centeredActionsOpen = false"
      >
        <template #content>
          <V-PlaceholderSection
            title="Are you sure you want to save the changes?"
            subtitle="This action will affect the stock of all products and cannot be undone."
          />

          <p>{{ confirmModal }}</p>
        </template>
        <template #action>
          <V-Button color="primary" @click="saveProductsInventory" raised
            >Confirm</V-Button
          >
        </template>
      </V-Modal>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
.content-card .icon {
  font-size: 30px;
  // color: white;
}
</style>
