<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/sidebar-blank-page-1
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { onMounted, watch, ref,computed } from 'vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { getCompany, company_name} from '/@src/pages/companies/companies.ts'
import { Api } from '/@src/services'

onMounted(()=>{
  getCompany()
  getMembers()
})

watch(company_name,()=>{
  pageTitle.value = company_name.value
})

useHead({
  title: 'Home',
})

const members = ref([])

// const filtersSearch = () => {
//   // if(filteredData.value.length == 0 || filters.value.length == 0){
//     router.push({ query: { page: 1 } })
//     getMembers(filterDate.value, filters.value, null)
//   // }
// }


const getMembers = async (filter, value = '', page = null) => {
  // filterDate.value = filter
  await Api.get('accessday', { params:{
      // [filterDate.value]: true,
      // filter: value,
      page: page
    }
  })
  .then((response) => {
    // console.log(response.data)
    members.value = response.data.members.data


    // if(response.data.members.data.length > 0){
      // paginationData.value = {
      //   itemPerPage:       response.data.members.per_page,
      //   totalItems:        response.data.members.total,
      //   currentPage:       response.data.members.current_page,
      //   maxLinksDisplayed: 7,
      // }
      // members.value = response.data.members.data
    // }
  })
  .catch((error) => {
    console.log(error);
  })
}

const computedMembers = computed(()=>{
  let membersData = []
  members.value.forEach((element)=>{
    membersData.push(element.member)
  })
  return membersData
})

</script>

<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <!--
          Page content goes here

          You can see pages content samples from 
          files in /src/components/pages directory
      -->
      
       <MembersListV2
        :members="computedMembers"
        />
    </div>
  </SidebarLayout>
</template>

