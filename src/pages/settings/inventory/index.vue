<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany, company } from '/@src/models/Companies.ts'
pageTitle.value = 'Inventory'
useHead({
  title: 'Inventory',
})

const route = useRoute()
const router = useRouter()

const renderPicture = (data: any, cell: any, row: any) => {
  return `<img class="" height="10px" src="${data}" alt="">`
}

const moneda = (value: any, cell: any, row: any) => {
  value += '';
  var x = value.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return '$'+ x1 + x2;
}

function renderButton(data: any, cell: any, row: any) {

  if (row.classList.contains('bg-success')){
    return `<div class="d-flex justify-content-end"><div class="has-text-right mr-3"><a href="#" disabled class="button v-button is-dark-outlined closeInventory" data-id="${data}" data-row="${row.dataIndex}">Close and Apply</a></div>

    <div class="has-text-right"><a href="/settings/products/edit?id=${data}" class="button v-button is-dark-outlined"  data-row="${row.dataIndex}">Edit</a></div></div>`
  }
  return `<div class="has-text-right"><a href="/settings/products/edit?id=${data}" class="button v-button is-dark-outlined" data-row="${row.dataIndex}">View</a></div>`
  
}

const renderStatus = (data: any, cell: any, row: any) => {
  if(data == 1){
    row.classList.add('bg-success')
    row.classList.add('color-white')
  }
  return data == 1 ? 'Open':'Close'
}

const centeredActionsOpen = ref(false)
const text = ref('')
const closeInventory = () => {
  centeredActionsOpen.value = false
  // API

  isLoaded.value = true
  text.value = 'Processing Inventory... Please do not close the browser window until the process is complete'
  setTimeout(()=>{
    isLoaded.value = false
    text.value = ''
  }, 3000)
}


const modalNewInventory = ref(false)
const newInventory = () => {
  modalNewInventory.value = false
  isLoaded.value = true
  text.value = 'wait a moment, you will be redirected'
  //API
   router.push({
      name: 'settings-inventory-create',
    })
}


const datatableV1 = ref({
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderStatus, sortable: true },
    // { select: 2, render: renderName },
    // { select: 3, render: renderPosition },
    // { select: 4, render: moneda },
    { select: 5, render: renderButton, sortable: false },
  ],
  data: {
    headings: ['ID','status', 'Date Open', 'Date Close', 'Products Total','Actions'],
    data: [
      [
        0,
        1,
        '2022-02-14 23:43:21',
        '2022-02-14 23:47:21',
        100,
        1
      ],
    ],
  },
})

const datatableshow = ref(false)
const isLoaded = ref(true)

const idInventory = ref(null)
onMounted(()=>{
  // getCompany()
  let data = JSON.parse(JSON.stringify(datatableV1.value.data.data[0]))
  for (var i = 0; i < 25; ++i) {
    data[0] = i
    data[1] = 0;
    data[5] = i
    datatableV1.value.data.data.push(data)
  }

  setTimeout(()=>{
    datatableshow.value = true
    isLoaded.value = false
     setTimeout(()=>{
      document.querySelector('.closeInventory').addEventListener('click',(event)=>{
        idInventory.value = event.target.dataset.id
        centeredActionsOpen.value = true
      })
      document.querySelector('.closeInventory').removeAttribute("disabled")
     },1000)
  }, 2000);
  
})



</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

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
            <V-Button color="primary" @click="closeInventory" raised>Confirm</V-Button>
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
            <V-Button color="primary" @click="newInventory" raised>Confirm</V-Button>
          </template>
        </V-Modal>


      <h1 v-if="isLoaded" class="title is-4">{{ text }}</h1>

      <V-Button v-if="!isLoaded" color="primary" @click="modalNewInventory = true" raised>New Inventory</V-Button>
      <VLoader size="large" :active="isLoaded">
        
        <div style="min-height: 300px;">
          <V-SimpleDatatables v-if="datatableshow" :options="datatableV1" />
        </div>
      </VLoader>

      
       
    </div>
    
  </SidebarLayout>
</template>

<style lang="scss">
  .content-card .icon{
    font-size: 30px;
    // color: white;
  }
</style>