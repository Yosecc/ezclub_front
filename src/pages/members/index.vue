<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { members } from '/@src/models/Members.ts'
pageTitle.value = 'Members'
useHead({
  title: 'List Members',
})

const route = useRoute()

const filters = ref('')
const filterDate = ref('all')

const paginationData = ref([])

const isLoading = ref(true)
const defalA = ref('Adult')

watch(
  () => route.query.page,
  () => {
    getMembers('all', filters.value, route.query.page, categoryB.value, false)
  }
)

watch(
  () => filters.value,
  () => {
    getMembers('all', filters.value, 1, categoryB.value, false)
  }
)

const getMembers = async (
  filter,
  value = '',
  page = 1,
  category = null,
  reload = true
) => {
  filterDate.value = filter
  isLoading.value = true
  await Api.get('members', {
    params: {
      [filterDate.value]: true,
      filter: value,
      page: page,
      category: category,
    },
  })
    .then((response) => {
      members.value = response.data.members
      paginationData.value = response.data.pagination
      isLoading.value = false
      if (reload) {
        reloadForm()
      }
    })
    .catch((error) => {
      isLoading.value = false
      console.log(error)
    })
}
const categoryB = ref('All')
const change = (val) => {
  reloadForm()
  defalA.value = val
  getMembers('all', filters.value, route.query.page, val, false)
}

const filterChange = (val) => {
  getMembers('all', filters.value, route.query.page, val, false)
}

onMounted(() => {
  getMembers('all', filters.value, route.query.page, 'Adult')
})

const filtersSearch = () => {
  console.log(filters.value.length)
}

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="d-flex mb-5">
        <V-Field class="w-90 mx-6">
          <V-Control icon="feather:search">
            <input
              v-model="filters"
              class="input custom-text-filter"
              placeholder="Search..."
              @keyup="filtersSearch"
            />
          </V-Control>
        </V-Field>
        <V-Buttons class="ml-0">
          <V-Button
            :to="{ name: 'members-create' }"
            color="primary"
            icon="fas fa-plus"
            elevated
          >
            Add Members
          </V-Button>
        </V-Buttons>
      </div>

      <div v-if="isLoading">
        <VPlaceload height="30px" width="40%" class="mb-4 mx-auto" />
        <VPlaceload
          v-for="i in 10"
          :key="i"
          height="48px"
          width="100%"
          class="mb-2"
        />
      </div>

      <div v-else>
        <div class="d-flex justify-content-center mb-5">
          <V-Field addons>
            <V-Control>
              <V-Button
                :color="categoryB == 'All' ? 'primary' : undefined"
                @click="getMembers('all'), (categoryB = 'All')"
                rounded
              >
                All
              </V-Button>
            </V-Control>
            <V-Control>
              <V-Button
                :color="categoryB == 'Adult' ? 'primary' : undefined"
                @click="
                  getMembers(
                    'all',
                    filters.value,
                    route.query.page,
                    'Adult',
                    false
                  ),
                    (categoryB = 'Adult')
                "
                rounded
              >
                Adult
              </V-Button>
            </V-Control>
            <V-Control>
              <V-Button
                :color="categoryB == 'Minor' ? 'primary' : undefined"
                @click="
                  getMembers(
                    'all',
                    filters.value,
                    route.query.page,
                    'Minor',
                    false
                  ),
                    (categoryB = 'Minor')
                "
                rounded
              >
                Minor
              </V-Button>
            </V-Control>
            <V-Control>
              <V-Button
                :color="categoryB == 'Prospect' ? 'primary' : undefined"
                @click="
                  getMembers(
                    'all',
                    filters.value,
                    route.query.page,
                    'Prospect',
                    false
                  ),
                    (categoryB = 'Prospect')
                "
                rounded
              >
                Temporary Members
              </V-Button>
            </V-Control>
          </V-Field>
        </div>
        <MembersListV2
          :members="members"
          :pagination-data="paginationData"
          :filters="filters"
          :filter-change="filterChange"
          @onSearch="onSearch"
        />
      </div>
    </div>
  </SidebarLayout>
</template>
