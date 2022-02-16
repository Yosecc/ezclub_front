<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany, company } from '/@src/models/Companies.ts'
pageTitle.value = 'Inventory Create'
useHead({
  title: 'Inventory',
})

const route = useRoute()
const router = useRouter()

const data_list = ref([])

onMounted(()=>{

  for (var i = 1; i < 101; ++i) {
    data_list.value.push({
      id: i,
      product: 'Nombre del producto'+i,
      image: 'https://picsum.photos/200/300',
      stock_anterior: 0,
      stock_actual: 0,
    })
  }
  
})

const isLoading = ref(false)
const centeredActionsOpen = ref(false)
const text = ref('Processing Inventory... Please do not close the browser window until the process is complete')
const saveProductsInventory = () => {
  centeredActionsOpen.value = false
  isLoading.value = true
}

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">
      <h1 class="title is-4 mb-0">Inventory #0000</h1>
      <h1 class="title is-6 mb-0">Status: Active </h1>
      <h1 class="title is-6">Products: 100 </h1>

      <div v-if="isLoading">
        <p class="title is-5">{{ text }}</p>
        <VPlaceload  height="200px"   />
      </div>
      <div v-else>
        <div class="d-flex justify-content-end mb-4 w-100">
          <V-Button color="success" @click="centeredActionsOpen = true" raised>Save</V-Button>
        </div>
        <V-FlexTable>
          <template #header>
            <div class="flex-table-header">
              <!-- <span>ID</span> -->
              <span>Product</span>
              <span>Previous stock</span>
              <span>Current stock</span>
            </div>
          </template>
          <template #body>
            <div v-for="row in data_list" :key="row.id" class="flex-table-item">
              <!-- <div class="flex-table-cell is-bold" data-th="ID">
                <span class="dark-text">{{ row.id }}</span>
              </div> -->
              <div class="flex-table-cell" data-th="product">
                <span class="light-text d-flex align-items-center">
                  <V-Avatar
                      :picture="row.image"
                      color="primary"
                      size="medium"
                      class="mr-3"
                    />
                    <p>{{ row.product }}</p>
                </span>
              </div>
              <div class="flex-table-cell" data-th="stock_anterior">

                <V-Field>
                  <V-Control>
                    <input
                      v-model="row.stock_anterior"
                      type="number"
                      class="input"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="flex-table-cell" data-th="stock_actual">
                <V-Field>
                  <V-Control>
                    <input
                      v-model="row.stock_actual"
                      type="number"
                      class="input"
                    />
                  </V-Control>
                </V-Field>
              </div>
             
              
            </div>
          </template>
        </V-FlexTable>
        <div class="d-flex justify-content-end mt-4 w-100">
          <V-Button color="success" @click="centeredActionsOpen = true" raised>Save</V-Button>
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

          </template>
          <template #action>
            <V-Button color="primary" @click="saveProductsInventory" raised>Confirm</V-Button>
          </template>
        </V-Modal>
      
       
    </div>
    
  </SidebarLayout>
</template>

<style lang="scss">
  .content-card .icon{
    font-size: 30px;
    // color: white;
  }
</style>