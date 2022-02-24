<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed, ref, onMounted } from 'vue'
import { staffs } from '/@src/models/Staffs'
import { API_URL } from '/@src/services'

import { projects } from '/@src/data/layouts/flex-list-v2'

const props = defineProps({
  activeTab: {
    type: String as PropType<'active' | 'active'>,
    default: 'active',
  },
})

// const staffs = ref([
//   {
//     img:'https://picsum.photos/150/152',
//     name: 'Lionel Messi',
//     id: 1,
//     role: 'Trainer',
//     phone: '(305) 555-5555',
//     email: 'email@email.com',
//     status: true,
//   }
// ])

onMounted(() => {})

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return staffs.value
  } else {
    return staffs.value.filter((item) => {
      let status = item.status == 1 ? 'Active' : 'Inactive'
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.second_name.match(new RegExp(filters.value, 'i')) ||
        item.last_name.match(new RegExp(filters.value, 'i')) ||
        item.staff_roles.description.match(new RegExp(filters.value, 'i')) ||
        item.phone.toString().match(new RegExp(filters.value, 'i')) ||
        item.email.match(new RegExp(filters.value, 'i')) ||
        status.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="d-flex mb-6 justify-content-between">
      <V-Control icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </V-Control>

      <V-Button :to="{ name: 'settings-staff-create' }" color="primary" raised>
        <span class="icon">
          <i aria-hidden="true" class="fas fa-plus"></i>
        </span>
        <span>New Staff</span>
      </V-Button>
    </div>

    <div class="flex-list-wrapper flex-list-v2">
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

      <!--Active Tab-->
      <div id="active-items-tab" class="tab-content is-active">
        <div class="flex-table">
          <!--Table header-->
          <div
            class="flex-table-header"
            :class="[filteredData.length === 0 && 'is-hidden']"
          >
            <span class="is-grow">Staff Name</span>
            <!-- <span>Staff ID #</span> -->
            <span>Role</span>
            <span>Phone</span>
            <span>Email</span>
            <span>Status</span>
            <span class="cell-end">Actions</span>
          </div>

          <div class="flex-list-inner">
            <transition-group name="list" tag="div">
              <!--Table item-->
              <div
                v-for="item in filteredData"
                :key="item.id"
                class="flex-table-item"
              >
                <div class="flex-table-cell is-media is-grow">
                  <V-Avatar :picture="item.photo" />
                  <!-- <p>{{ API_URL+item.photo }}</p> -->
                  <div>
                    <span class="item-name dark-inverted"
                      >{{ item.name }} {{ item.second_name }}
                      {{ item.last_name }}</span
                    >
                  </div>
                </div>
                <!-- <div class="flex-table-cell" data-th="Customer">
                  <span class="light-text">{{ item.id }}</span>
                </div> -->
                <div class="flex-table-cell" data-th="Role">
                  <span class="light-text">{{
                    item.staff_roles.description
                  }}</span>
                </div>
                <div class="flex-table-cell" data-th="Phone">
                  <span class="light-text">{{ item.phone }}</span>
                </div>
                <div class="flex-table-cell" data-th="Email">
                  <span class="light-text">{{ item.email }}</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">{{
                    item.status ? 'Active' : 'Inactive'
                  }}</span>
                </div>

                <div class="flex-table-cell cell-end" data-th="Actions">
                  <!-- <staffDropdown /> -->
                  <V-button
                    :to="{
                      name: 'settings-staff-edit',
                      query: { id: item.id },
                    }"
                    color="warning"
                    ><i class="fas fa-eye" aria-hidden="true"></i
                  ></V-button>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->
        <V-FlexPagination
          v-if="filteredData.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        />
      </div>
    </div>
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
