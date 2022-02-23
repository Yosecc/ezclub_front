<script setup lang="ts">
import { computed, ref, onMounted, watch, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'
import { memberIsSolvente } from '/@src/models/Members.ts'

const emit = defineEmit(['filterChange'])

const route = useRoute()
const router = useRouter()

const filters = ref('')

const filterDate = ref('all')
const paginationData = ref({})

const filteredData = computed(() => {
  // console.log(props.members)
  if (!props.filters) {
    return props.members
  } else {
    return props.members.filter((item) => {
      return (
        item.name.match(new RegExp(props.filters, 'i')) ||
        item.last_name.match(new RegExp(props.filters, 'i')) ||
        item.second_name.match(new RegExp(props.filters, 'i')) ||
        item.id == props.filters ||
        item.phone == props.filters ||
        item.personal_identifications == props.filters
      )
    })
  }
})

const memberCard = ref({ status: false, member: null })

const openMemberCard = (status, member) => {
  // memberCard.value.status = status
  // memberCard.value.member = member
}

const closeMemberCard = () => {
  memberCard.value.status = false
  memberCard.value.member = null
}

const initials = (name, lastname) => {
  return name.substr(0, 1) + lastname.substr(0, 1)
}

watch(
  () => props.members,
  () => {
    // console.log(props.members)
  }
)

const props = defineProps({
  members: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    default: 'Item',
  },
  paginationData: {
    type: Object,
    default: {
      itemPerPage: 15,
      totalItems: 1,
      currentPage: 1,
      maxLinksDisplayed: 7,
    },
  },
  filters: {
    type: String,
  },
})
const colorCard = (member) => {
  if (member.membership_members == null) {
    return ''
  }
  if (
    member.membership_members != null &&
    !member.membership_members.payments[0].status
  ) {
    return 'bg-danger'
  } else {
    return ''
  }
}
</script>

<template>
  <div>
    <div class="page-content-inner">
      <div class="flex-list-wrapper flex-list-v1">
        <!-- <div class="d-flex mb-5 mt-5">
        <V-Field addons>
          <V-Control>
            <V-Button 
              :color="filterDate == 'all' ? 'primary':undefined"
              @click="filterChange('all')" 
              rounded > All </V-Button>
          </V-Control>
          <V-Control>
            <V-Button 
              :color="filterDate == 'today' ? 'primary':undefined" 
              @click="filterChange('today')" 
              rounded > Today </V-Button>
          </V-Control>
          <V-Control>
            <V-Button 
              :color="filterDate == 'week' ? 'primary':undefined" 
              @click="filterChange('week')"
              rounded > Last Week </V-Button>
          </V-Control>
          <V-Control>
            <V-Button
              :color="filterDate == 'month' ? 'primary':undefined"
              @click="filterChange('month')"
              rounded> Last Month </V-Button>
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
            elevated>
            Add Members
          </V-Button>
        </V-Buttons>
      </div> -->

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
                :key="`${props.name}-${item.id}`"
                class="flex-table-item cursor-pointer"
                :class="memberIsSolvente(item) ? '' : 'bg-danger'"
              >
                <div
                  @click="openMemberCard(true, item)"
                  class="flex-table-cell is-media is-grow"
                >
                  <V-Avatar
                    :picture="`${API_WEB_URL}storage/${item.photo}`"
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
                    v-if="item.trainer != null"
                    :picture="`${API_WEB_URL}storage/${item.trainer.photo}`"
                    color="h-green"
                    :initials="
                      initials(item.trainer.name, item.trainer.last_name)
                    "
                    size="medium"
                  />
                  <span
                    class="light-text dark-inverted ml-2"
                    v-if="item.trainer != null"
                  >
                    {{ item.trainer.name }} {{ item.trainer.second_name }}
                    {{ item.trainer.last_name }}</span
                  >
                </div>
                <div class="flex-table-cell" data-th="Phone">
                  <span class="light-text">{{ item.phone }}</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span
                    class="tag is-rounded"
                    :class="item.membership_members != null ? 'is-success' : ''"
                    >{{
                      item.membership_members != null ? 'Active' : 'Inactive'
                    }}</span
                  >

                  <!--  <span
                    v-if="item.status === 0"
                    class="tag is-danger is-rounded"
                    >{{ item.status ? 'Active' : 'Payment' }}</span
                  > -->
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
                  <FlexTableDropdown :id-member="item.id" :member="item" />
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->
        <!-- <V-FlexPagination
          v-if="filteredData.length > 0"
          :item-per-page="props.paginationData.itemPerPage ?? 15"
          :total-items="props.paginationData.totalItems ?? 0"
          :current-page="props.paginationData.currentPage"
          :max-links-displayed="props.paginationData.maxLinksDisplayed"
        /> -->
      </div>
    </div>
    <sidebar-member
      :status="memberCard.status"
      :member="memberCard.member"
      @closeMemberCard="closeMemberCard"
    />
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
