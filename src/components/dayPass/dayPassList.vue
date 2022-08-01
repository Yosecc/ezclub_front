<script setup lang="ts">
import { computed, ref } from 'vue'
import moment from 'moment'
// import { users } from '/@src/data/layouts/view-list-v1'
import { membersDayPass, filter } from '/@src/models/DayPass.ts'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return membersDayPass.value
  } else {
    return membersDayPass.value.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.last_name.match(new RegExp(filters.value, 'i')) ||
        item.email.match(new RegExp(filters.value, 'i')) ||
        item.phone.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <V-Field>
        <V-Control icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </V-Control>
      </V-Field>

      <div class="list-info">
        <span v-if="filteredData.length === 1">1 record found</span>
        <span v-else>{{ filteredData.length }} records found</span>
      </div>

      <div class="buttons">
        <VField addons>
          <VControl>
            <VButton
              @click="filter = 'All'"
              :color="filter == 'All' ? 'primary' : ''"
            >
              All
            </VButton>
          </VControl>
          <VControl>
            <VButton
              @click="filter = 'today'"
              :color="filter == 'today' ? 'primary' : ''"
            >
              Today
            </VButton>
          </VControl>
          <VControl>
            <VButton
              @click="filter = 'yesterday'"
              :color="filter == 'yesterday' ? 'primary' : ''"
            >
              Yesterday
            </VButton>
          </VControl>
          <VControl>
            <VButton
              @click="filter = 'last_7_day'"
              :color="filter == 'last_7_day' ? 'primary' : ''"
            >
              Last 7 day
            </VButton>
          </VControl>
        </VField>
      </div>
    </div>

    <div class="page-content-inner">
      <!--List-->
      <div class="list-view list-view-v1">
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
              src="/@src/assets/illustrations/placeholders/search-1.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-1-dark.svg"
              alt=""
            />
          </template>
        </V-PlaceholderPage>

        <div class="list-view-inner">
          <!--Item-->
          <transition-group name="list-complete" tag="div">
            <div
              v-for="item in filteredData"
              :key="item.id"
              class="list-view-item"
            >
              <div class="list-view-item-inner">
                <!-- <V-Avatar
                  :picture="item.medias.avatar"
                  size="large"
                  :badge="item.medias.flag"
                /> -->
                <div class="meta-left">
                  <h3>{{ item.name }} {{ item.last_name }}</h3>
                  <p>{{ item.email }}</p>
                  <p>{{ item.phone }}</p>
                  <!-- <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:map-pin"
                    ></i>
                    <span>{{ item.location }}</span>
                  </span> -->
                </div>
                <div class="meta-right">
                  <!-- <div class="tags">
                    <V-Tag
                      :label="item.role"
                      :color="item.roleColor"
                      rounded
                      elevated
                    />
                  </div> -->

                  <div class="stats">
                    <div class="stat">
                      <span
                        >{{ moment(item.created_at).format('MM-DD-YYYY') }}
                        {{ moment(item.created_at).format('HH:mm') }}
                      </span>
                      <!-- <span>Projects</span> -->
                    </div>
                    <div class="separator"></div>
                    <div class="stat">
                      <span
                        v-if="item.payment_type_id == 1"
                        v-tooltip="'View ticket'"
                      >
                        <a :href="item.url_pdf" target="_blank">
                          <p>
                            <i class="fas fa-money-bill" aria-hidden="true"></i>
                          </p>
                        </a>
                      </span>
                      <span
                        v-if="item.payment_type_id == 3"
                        v-tooltip="'View Invoice'"
                      >
                        <a :href="item.url_pdf" target="_blank">
                          <p>
                            <i
                              class="fas fa-credit-card"
                              aria-hidden="true"
                            ></i>
                          </p>
                        </a>
                      </span>

                      <!-- <span>Replies</span> -->
                    </div>
                    <!-- <div class="separator"></div>
                    <div class="stat">
                      <span>{{ item.stats.posts }}</span>
                      <span>Posts</span>
                    </div> -->
                  </div>

                  <!-- <div class="network">
                    <V-AvatarStack
                      :avatars="item.teams"
                      :limit="3"
                      size="small"
                    />
                    <span>in Team</span>
                  </div> -->

                  <!--Dropdown-->
                  <!-- <ListViewV1Dropdown /> -->
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <!-- <V-FlexPagination
        v-if="filteredData.length > 5"
        :item-per-page="10"
        :total-items="873"
        :current-page="42"
        :max-links-displayed="5"
      /> -->
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/lists/_list-view-1.scss';
</style>
