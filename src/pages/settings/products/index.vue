<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany, company } from '/@src/models/Companies.ts'
pageTitle.value = 'Products'
useHead({
  title: 'Products',
})

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
  return `<div class="has-text-right"><a href="/settings/products/edit?id=${data}" class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Edit</a></div>`
}


const datatableV1 = ref({
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    // { select: 2, render: renderName },
    // { select: 3, render: renderPosition },
    { select: 4, render: moneda },
    { select: 7, render: renderButton, sortable: false },
  ],
  data: {
    headings: ['ID', 'Picture', 'Name', 'SKU', 'PRICE', 'STOCK','Category','Actions'],
    data: [
      [
        0,
        'https://picsum.photos/150/152',
        'Aquafina Water 16 oz',
        '1234567890',
        13.4,
        '240',
        'Beverage',
        1
      ],
    ],
  },
})

const datatableshow = ref(false)
const isLoaded = ref(true)

onMounted(()=>{
  // getCompany()
  let data = JSON.parse(JSON.stringify(datatableV1.value.data.data[0]))
  for (var i = 0; i < 25; ++i) {
    data[0] = i
    data[7] = i
    datatableV1.value.data.data.push(data)
  }

  setTimeout(()=>{
    datatableshow.value = true
    isLoaded.value = false
  }, 2000);
  
})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

      <div class="columns is-multiline">
        <div class="is-12 column">
          <div class="d-flex justify-content-end buttons" >
            <V-Button 
              :to="{ name:'settings-products-create' }" 
              color="primary" raised>
              <span class="icon">
                <i aria-hidden="true" class="fas fa-plus"></i>
              </span>
              <span>New Product</span>
            </V-Button>
          </div>
        </div>
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
                <h1 class="title is-2">5</h1>
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
                <h1 class="title is-2">1800</h1>
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
                <h1 class="title is-2">$6,800.00</h1>
              </div>
            </div>
          </VCard>
        </div>

      </div>

      
      
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