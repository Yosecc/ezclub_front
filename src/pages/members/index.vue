<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
pageTitle.value = 'Members'
useHead({
  title: 'List Members',
})

const route = useRoute()

const filters = ref('')
const filterDate = ref('all')

const members = ref([])

const getMembers = async (filter, value = '', page = null, category= null) => {
  filterDate.value = filter
  await Api.get('members', { params:{
      [filterDate.value]: true,
      filter: value,
      page: page,
      category: category
    }
  })
  .then((response) => {

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

const change = (val) =>{
  getMembers('all',filters.value,route.query.page,val)
}

onMounted(() => {
  getMembers('all',filters.value,route.query.page,'Adult')
})



</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

      <VTabs
        slider
        type="rounded"
        selected="Adult"
        :tabs="[
          { label: 'Adult', value: 'Adult' },
          { label: 'Prospects', value: 'Prospect' },
        ]"
        @changeTab="change"
      >
        <template  #tab="{ activeValue }">
          
          <MembersListV2 
            v-if="activeValue === 'Adult'"
            name="Adult"
            :members="members"
          />
        
          <MembersListV2 
            v-else-if="activeValue === 'Prospect'"
            name="Prospect"
            :members="members"
          />
            
          
          
        </template>
      </VTabs>
       
    </div>
    
  </SidebarLayout>
</template>