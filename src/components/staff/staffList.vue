<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed, ref, onMounted } from 'vue'

import { projects } from '/@src/data/layouts/flex-list-v2'

const props = defineProps({
  activeTab: {
    type: String as PropType<'active' | 'active'>,
    default: 'active',
  },
})

const staff = ref([
  {
    img:'https://picsum.photos/150/152',
    name: 'Lionel Messi',
    id: 1,
    role: 'Trainer',
    phone: '(305) 555-5555',
    email: 'email@email.com',
    status: true,
  }
])

onMounted(()=>{
  let data = JSON.parse(JSON.stringify(staff.value[0]))

  for (var i = 0; i < 25; ++i) {
    data.id = i
    staff.value.push(data)
  }
})

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return staff.value
  } else {
    // return projects.filter((item) => {
    //   return (
    //     item.name.match(new RegExp(filters.value, 'i')) ||
    //     item.customer.match(new RegExp(filters.value, 'i')) ||
    //     item.industry.match(new RegExp(filters.value, 'i')) ||
    //     item.status.match(new RegExp(filters.value, 'i')) ||
    //     item.duration.match(new RegExp(filters.value, 'i'))
    //   )
    // })
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

      <V-Button :to="{ name:'settings-staff-create' }" color="primary" raised>
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
      <div
        id="active-items-tab"
        class="tab-content is-active"
      >
        <div class="flex-table">
          <!--Table header-->
          <div
            class="flex-table-header"
            :class="[filteredData.length === 0 && 'is-hidden']"
          >
            <span class="is-grow">Staff Name</span>
            <span>Staff ID #</span>
            <span>Staff Role</span>
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
                  <V-Avatar :picture="item.img" />
                  <div>
                    <span class="item-name dark-inverted">{{ item.name }}</span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Customer">
                  <span class="light-text">{{ item.id }}</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">{{ item.role }}</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">{{ item.phone }}</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">{{ item.email }}</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">{{ item.status }}</span>
                </div>
                
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <staffDropdown />
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
