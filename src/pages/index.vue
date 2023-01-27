<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import {
  memberAccess,
  codebar,
  searchCodebar,
  inputSearchCodebar,
} from '/@src/models/Access.ts'
pageTitle.value = 'Check in'
useHead({
  title: 'List Members',
})

const route = useRoute()

const filters = ref('')
const filterDate = ref('all')

const members = ref([])
const paginationData = ref([])

const isLoading = ref(true)
const defalA = ref('All')
const categoryB = ref('All')

watch(
  () => route.query.page,
  () => {
    getMembers(
      filterDate.value,
      filters.value,
      route.query.page,
      defalA.value,
      false
    )
  }
)

const getMembers = async (
  filter,
  value = '',
  page = 1,
  category = null,
  reload = true
) => {
  isLoading.value = true
  filterDate.value = filter

  await Api.get('accessday', {
    params: {
      [filterDate.value]: true,
      filter: value,
      page: page,
      category: category,
    },
  })
    .then((response) => {
      members.value = response.data.members
      isLoading.value = false
      paginationData.value = response.data.pagination
      if (reload) {
        reloadForm()
      }
    })
    .catch((error) => {
      isLoading.value = false
    })
}

const change = (val) => {
  reloadForm()
  defalA.value = val
  getMembers('all', filters.value, route.query.page, val, false)
}

const filterChange = (val) => {
  getMembers('all', filters.value, route.query.page, val, false)
}

onMounted(() => {
  getMembers('all', filters.value, route.query.page, null)
})

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}
const membersData = ref([])
const computedMembers = computed(() => {
  membersData.value = []
  if (members.value.length) {
    members.value.forEach((e) => {
      if (e != null) {
        membersData.value.push(e)
      }
    })
  }
  return membersData.value
})

watch(
  () => memberAccess.value,
  (to) => {
    membersData.value.unshift(memberAccess.value)
  }
)

watch(
  () => codebar.value,
  (to) => {
    if (codebar.value.length == 9) {
      searchCodebar()
    }
  }
)
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="d-flex mb-5 justify-content-between">
        <V-Field addons>
          <V-Control>
            <V-Button
              :color="filterDate == 'all' ? 'primary' : undefined"
              @click="getMembers('all')"
              rounded
            >
              Today
            </V-Button>
          </V-Control>
          <V-Control>
            <V-Button
              :color="filterDate == 'yesterday' ? 'primary' : undefined"
              @click="getMembers('yesterday')"
              rounded
            >
              Yesterday
            </V-Button>
          </V-Control>
          <V-Control>
            <V-Button
              :color="filterDate == 'week' ? 'primary' : undefined"
              @click="getMembers('week')"
              rounded
            >
              last 7 day
            </V-Button>
          </V-Control>
        </V-Field>

        <V-Field class="">
          <V-Control icon="feather:search">
            <audio style="display: none" id="audioFail" controls>
              <source
                type="audio/mpeg"
                src="/public/sonidos/error_fail2_2.mp3"
              />
            </audio>
            <audio style="display: none" id="audioSuccess" controls>
              <source type="audio/mpeg" src="/public/sonidos/success.mp3" />
            </audio>
            <input
              id="inputSearchCodebar"
              ref="inputSearchCodebar"
              v-model="codebar"
              v-focus
              type="text"
              class="input custom-text-filter"
              placeholder="Member ID Barcode"
            />
          </V-Control>
        </V-Field>
      </div>

      <VPlaceload v-if="isLoading" height="500px" />
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
          :members="computedMembers"
          :pagination-data="paginationData"
          :filters="filters"
          :filter-change="filterChange"
          name="checkin"
        />
      </div>
    </div>
  </SidebarLayout>
</template>
