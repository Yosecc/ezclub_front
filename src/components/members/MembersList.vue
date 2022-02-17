<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  toggleMemberActive,
  memberActive,
  members,
} from '/@src/components/members/MembersData'

import { Api } from '/@src/services'

const route = useRoute()
const router = useRouter()

const filters = ref('')

const filterDate = ref('all')
const paginationData = ref({})

const filteredData = computed(() => {
  if (!filters.value) {
    return members.value
  } else {
    return members.value.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.last_name.match(new RegExp(filters.value, 'i')) ||
        item.second_name.match(new RegExp(filters.value, 'i')) ||
        item.id == filters.value ||
        item.phone == filters.value ||
        item.personal_identifications == filters.value
      )
    })
  }
})

const filtersSearch = () => {
  // if(filteredData.value.length == 0 || filters.value.length == 0){
  router.push({ query: { page: 1 } })
  getMembers(filterDate.value, filters.value, null)
  // }
}

watch(
  () => route.query.page,
  async (newget) => {
    await getMembers(filterDate.value, filters.value, route.query.page)
  }
)

const getMembers = async (filter, value = '', page = null) => {
  filterDate.value = filter
  await Api.get('members', {
    params: {
      [filterDate.value]: true,
      filter: value,
      page: page,
      category: 'Adult',
    },
  })
    .then((response) => {
      // console.log(response.data.members.data)
      // if(response.data.members.data.length > 0){
      paginationData.value = {
        itemPerPage: response.data.members.per_page,
        totalItems: response.data.members.total,
        currentPage: response.data.members.current_page,
        maxLinksDisplayed: 7,
      }
      members.value = response.data.members.data
      // }
    })
    .catch((error) => {
      console.log(error)
    })
}

const initials = (name, lastname) => {
  return name.substr(0, 1) + lastname.substr(0, 1)
}

onMounted(() => {
  getMembers('all', filters.value, route.query.page)
})
</script>

<template>
  <div>
    <div class="list-flex-toolbar justify-content-between flex-list-v1">
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

    <div class="page-content-inner">
      <div class="flex-list-wrapper flex-list-v1">
        <!--List Empty Search Placeholder -->
        <V-PlaceholderPage
          :class="[filteredData.length !== 0 && 'is-hidden']"
          title="We couldn't find any matching results."
          subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
          larger
        >
          <template #image>
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/search-4.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
              alt=""
            />
          </template>
        </V-PlaceholderPage>

        <div class="flex-table">
          <!--Table header-->
          <div
            class="flex-table-header"
            :class="[filteredData.length === 0 && 'is-hidden']"
          >
            <span class="is-grow">Member</span>
            <span>Member ID</span>
            <span>Membership Type</span>
            <span>Trainer</span>
            <span>Phone #</span>
            <span>Status</span>
            <span class="cell-end">Actions</span>
          </div>

          <div class="flex-list-inner">
            <transition-group name="list" tag="div">
              <!--Table item-->
              <div
                v-for="item in filteredData"
                :key="item.id"
                class="flex-table-item cursor-pointer"
                :class="item.status === 0 ? 'bg-danger' : ''"
              >
                <div
                  @click="toggleMemberActive(true, item.id)"
                  class="flex-table-cell is-media is-grow"
                >
                  <V-Avatar
                    :picture="item.photo"
                    color="primary"
                    :initials="initials(item.name, item.last_name)"
                    size="medium"
                  />
                  <!-- <V-PlaceloadAvatar size="medium" /> -->
                  <div>
                    <span class="item-name dark-inverted">
                      <h3>
                        {{ item.name }} {{ item.second_name }}
                        {{ item.last_name }}
                      </h3>
                    </span>
                    <!-- <span class="item-meta">
                      <span>{{ item.position }}</span>
                    </span> -->
                  </div>
                </div>
                <div class="flex-table-cell" data-th="member-id">
                  <span class="light-text">{{ item.id }}</span>
                </div>
                <div class="flex-table-cell" data-th="Membership Type">
                  <span class="light-text">{{ item.membership.name }}</span>
                </div>
                <div class="flex-table-cell is-media is-grow" data-th="Trainer">
                  <V-Avatar
                    :picture="item.trainer.photo"
                    color="h-green"
                    :initials="
                      initials(item.trainer.name, item.trainer.last_name)
                    "
                    size="medium"
                  />
                  <span class="light-text dark-inverted ml-2">
                    {{ item.trainer.name }} {{ item.trainer.second_name }}
                    {{ item.trainer.last_name }}</span
                  >
                </div>
                <div class="flex-table-cell" data-th="Phone">
                  <span class="light-text">{{ item.phone }}</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span
                    v-if="item.status === 1"
                    class="tag is-success is-rounded"
                    >{{ item.status ? 'Active' : 'Payment' }}</span
                  >

                  <span
                    v-if="item.status === 0"
                    class="tag is-danger is-rounded"
                    >{{ item.status ? 'Active' : 'Payment' }}</span
                  >
                </div>
                <!-- <div class="flex-table-cell" data-th="Relations">
                  <V-AvatarStack
                    :avatars="item.contacts"
                    size="small"
                    :limit="3"
                    class="is-pushed-mobile"
                  />
                </div> -->
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <FlexTableDropdown :id-member="item.id" />
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->
        <V-FlexPagination
          v-if="filteredData.length > 0"
          :item-per-page="paginationData.itemPerPage ?? 15"
          :total-items="paginationData.totalItems ?? 0"
          :current-page="paginationData.currentPage"
          :max-links-displayed="paginationData.maxLinksDisplayed"
        />
      </div>
    </div>
    <sidebar-member />
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';

.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
