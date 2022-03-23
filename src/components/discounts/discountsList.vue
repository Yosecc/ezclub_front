<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed, ref, onMounted } from 'vue'
import { discounts } from '/@src/models/Discounts.ts'
import moment from 'moment'

// const discounts = ref([
//   {
//     id: 1,
//     promo_code: 'SANVALENTIN2021',
//     value: '-25%',
//     maximum_uses: 80,
//     start: 'Jan 15, 2022 10:00 AM',
//     end: 'Feb 1, 2022 11:59 PM',
//     status: true,
//   },
// ])

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return discounts.value
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
  return []
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

      <V-Button
        :to="{ name: 'settings-discounts-create' }"
        color="primary"
        raised
      >
        <span class="icon">
          <i aria-hidden="true" class="fas fa-plus"></i>
        </span>
        <span>New discounts</span>
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
            <span class="">Promo Code</span>
            <span>Description</span>
            <span>Start Date</span>
            <span>End Date</span>
            <span>Recurrence</span>
            <span>Type Discount</span>
            <span>Usage Limit</span>
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
                <div class="flex-table-cell is-media" data-th="Promo Code">
                  <span class="item-name dark-inverted">{{ item.code }}</span>
                </div>
                <div class="flex-table-cell" data-th="Description">
                  <span class="light-text">{{ item.name }}</span>
                </div>
                <div class="flex-table-cell" data-th="Start Date">
                  <span
                    v-if="moment(item.date_start).isValid()"
                    class="light-text"
                    >{{
                      moment(item.date_start).format('DD-MM-YYYY HH:mm:ss')
                    }}</span
                  >
                  <spa v-else>-</spa>
                </div>
                <div class="flex-table-cell" data-th="End Date">
                  <span
                    v-if="moment(item.date_expired).isValid()"
                    class="light-text"
                    >{{
                      moment(item.date_expired).format('DD-MM-YYYY HH:mm:ss')
                    }}</span
                  >
                  <spa v-else>-</spa>
                </div>
                <div class="flex-table-cell" data-th="Recurrence">
                  <span v-if="item.is_recurrence" class="light-text">{{
                    item.recurrence
                  }}</span>
                  <span v-else>-</span>
                </div>
                <div class="flex-table-cell" data-th="Type Discount">
                  <span class="light-text">{{ item.type }}</span>
                </div>
                <div class="flex-table-cell" data-th="Usage Limit">
                  <span class="light-text">{{ item.usage }} </span>
                  <span v-if="item.usage == 'limit_num'" class="light-text">
                    {{ item.usage_limit_num }}</span
                  >
                </div>

                <div class="flex-table-cell" data-th="Status">
                  <span class="tag is-rounded">{{
                    item.status ? 'Active' : 'Inactive'
                  }}</span>
                </div>

                <div class="flex-table-cell cell-end" data-th="Actions">
                  <V-button
                    :to="{
                      name: 'settings-discounts-edit',
                      query: { id: item.id },
                    }"
                    color="warning"
                    ><i class="fas fa-edit" aria-hidden="true"></i
                  ></V-button>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->
        <!-- <V-FlexPagination
          v-if="filteredData.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        /> -->
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
