<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { members, subscriptionsCreateStripe } from '/@src/models/Members.ts'
pageTitle.value = 'Members'
useHead({
  title: 'List Members',
})

const route = useRoute()

const filters = ref('')
const filterDate = ref('all')

const paginationData = ref([])

const isLoading = ref(true)
const defalA = ref('all')

watch(
  () => route.query.page,
  () => {
    getMembers('all', filters.value, route.query.page, categoryB.value, false)
  }
)

watch(
  () => filters.value,
  () => {
    // getMembers('all', filters.value, 1, categoryB.value, false)
  }
)

const getMembers = async (
  filter,
  value = '',
  page = 1,
  category = null,
  reload = true,
  estado = null
) => {
  filterDate.value = filter
  isLoading.value = true
  await Api.get('members', {
    params: {
      [filterDate.value]: true,
      filter: value,
      page: page,
      category: category,
      estado: estado,
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

onMounted(() => {
  getMembers('all', filters.value, route.query.page, 'All')
})

const filtersSearch = () => {
  // console.log(filters.value.length)
  getMembers('all', filters.value, 1, categoryB.value, false)
}

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const statusSelect = ref('All')
const estados = ref([
  {
    value: 'All',
    name: 'All',
  },
  {
    value: 'active',
    name: 'Active',
  },
  {
    value: 'due',
    name: 'Due',
  },
  {
    value: 'expired',
    name: 'Expired',
  },
  {
    value: 'sincard',
    name: 'No card',
  },
  {
    value: 'sin_factura',
    name: 'No invoice',
  },
  {
    value: 'nomembershipcontarjeta',
    name: 'Without membership, with card',
  },
  {
    value: 'cancel',
    name: 'Cancel',
  },
  {
    value: 'nomembership',
    name: 'No membership',
  },
  {
    value: 'schedules',
    name: 'Schedules',
  },
])

const changeStado = () => {
  getMembers(
    'all',
    filters.value,
    1,
    categoryB.value,
    false,
    statusSelect.value
  )
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="mb-5 columns is-multiline">
        <div class="is-2 column">
          <V-Field class="w-100">
            <V-Control class="input-select">
              <div class="select">
                <select v-model="statusSelect" @change="changeStado">
                  <option
                    v-for="(item, key) in estados"
                    :key="`estados-${key}`"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </V-Control>
          </V-Field>
        </div>
        <V-Field class="is-8 column">
          <V-Control icon="feather:search">
            <input
              v-model="filters"
              class="input custom-text-filter"
              placeholder="Search..."
              @keyup.enter="filtersSearch"
            />
          </V-Control>
        </V-Field>
        <div class="is-2 column">
          <V-Button
            :to="{ name: 'members-create' }"
            color="primary"
            icon="fas fa-plus"
            elevated
            class="w-100"
          >
            Add Members
          </V-Button>
        </div>
      </div>

      <div class="columns is-multiline" v-if="isLoading">
        <div class="mb-2 column is-4" v-for="i in 12" :key="i">
          <VPlaceload height="120px" />
        </div>
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

        <div class="w-100 d-flex justify-content-end mb-4">
          <membersOptionDropdown />
        </div>
        <MembersListV2
          :members="members"
          :pagination-data="paginationData"
          :filters="filters"
          @onSearch="onSearch"
        />
      </div>
    </div>
  </SidebarLayout>
</template>
