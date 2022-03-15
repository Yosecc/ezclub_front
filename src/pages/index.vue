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
pageTitle.value = 'Members'
useHead({
  title: 'List Members',
})

const route = useRoute()

const filters = ref('')
const filterDate = ref('all')

const members = ref([])
const paginationData = ref([])

const isLoading = ref(true)
const defalA = ref('Adult')

const getMembers = async (
  filter,
  value = '',
  page = null,
  category = null,
  reload = true
) => {
  filterDate.value = filter
  await Api.get('accessday', {
    params: {
      [filterDate.value]: true,
      filter: value,
      // page: page,
      category: category,
    },
  })
    .then((response) => {
      members.value = response.data.members
      if (reload) {
        reloadForm()
      }
    })
    .catch((error) => {
      console.log(error)
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
  getMembers('all', filters.value, route.query.page, 'Adult')
})

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}
const membersData = ref([])
const computedMembers = computed(() => {
  members.value.forEach((element) => {
    membersData.value.push(element.member)
  })
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
    if (codebar.value.length >= 9) {
      searchCodebar()
    }
  }
)
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="d-flex mb-5">
        <V-Field addons>
          <V-Control>
            <V-Button
              :color="filterDate == 'all' ? 'primary' : undefined"
              @click="getMembers('all')"
              rounded
            >
              All
            </V-Button>
          </V-Control>
          <V-Control>
            <V-Button
              :color="filterDate == 'today' ? 'primary' : undefined"
              @click="getMembers('today')"
              rounded
            >
              Today
            </V-Button>
          </V-Control>
          <V-Control>
            <V-Button
              :color="filterDate == 'week' ? 'primary' : undefined"
              @click="getMembers('week')"
              rounded
            >
              Last Week
            </V-Button>
          </V-Control>
          <V-Control>
            <V-Button
              :color="filterDate == 'month' ? 'primary' : undefined"
              @click="getMembers('month')"
              rounded
            >
              Last Month
            </V-Button>
          </V-Control>
        </V-Field>
        <V-Field class="is-6 column mt-0 pt-0">
          <V-Control icon="feather:search">
            <input
              v-model="filters"
              class="input custom-text-filter"
              placeholder="Search..."
              @keyup="filtersSearch"
            />
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
              placeholder="Barcode"
              @keyup.enter="searchCodebar"
            />
          </V-Control>
        </V-Field>
        <!-- <V-Buttons class="ml-0">
          <V-Button
            :to="{ name: 'members-create' }"
            color="primary"
            icon="fas fa-plus"
            elevated
          >
            Add Members
          </V-Button>
        </V-Buttons> -->
      </div>

      <VPlaceload v-if="isLoading" height="500px" />
      <VTabs
        v-else
        slider
        type="rounded"
        :selected="defalA"
        :tabs="[
          { label: 'Adult', value: 'Adult' },
          { label: 'Minor', value: 'Minor' },
          { label: 'Prospects', value: 'Prospect' },
        ]"
        @changeTab="change"
      >
        <template #tab="{ activeValue }">
          <MembersListV2
            v-if="activeValue === 'Adult'"
            name="Adult"
            :members="computedMembers"
            :pagination-data="paginationData"
            :filters="filters"
            :filter-change="filterChange"
          />

          <MembersListV2
            v-else-if="activeValue === 'Prospect'"
            name="Prospect"
            :members="computedMembers"
            :filters="filters"
            :filter-change="filterChange"
          />

          <MembersListV2
            v-else-if="activeValue === 'Minor'"
            name="Prospect"
            :members="computedMembers"
            :filters="filters"
            :filter-change="filterChange"
          />
        </template>
      </VTabs>
    </div>
  </SidebarLayout>
</template>
