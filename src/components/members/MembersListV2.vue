<script setup lang="ts">
import { computed, ref, onMounted, watch, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'
import { membersSelected } from '/@src/models/Members.ts'
const emit = defineEmit(['filterChange', 'onSearch'])

const route = useRoute()
const router = useRouter()

const filters = ref('')

const filterDate = ref('all')
const paginationData = ref({})

const filteredData = computed(() => {
  if (!props.filters) {
    return props.members
  } else {
    return props.members.filter((item) => {
      return (
        item.name.match(new RegExp(props.filters, 'i')) ||
        item.last_name.match(new RegExp(props.filters, 'i')) ||
        item.id == props.filters ||
        item.phone == props.filters ||
        item.personal_identifications == props.filters
      )
    })
  }
})

watch(
  () => filteredData.value,
  (to) => {
    // console.log('to',to)
    // if(to.length == 0){
    // emit('onSearch')
    // }
  }
)

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

const All = ref([])

watch(
  () => All.value,
  (t) => {
    if (t.length != 0) {
      membersSelected.value = []
      filteredData.value.forEach((e) => {
        membersSelected.value.push(e.id)
      })
    } else {
      membersSelected.value = []
    }
  }
)
</script>

<template>
  <div>
    <div class="page-content-inner">
      <div class="flex-list-wrapper flex-list-v1">
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
            v-if="filteredData.length !== 0"
          >
            <span class="is-grow">Member</span>
            <span>Email</span>
            <span>Membership Type</span>
            <span>Trainer</span>
            <span>Phone #</span>
            <span class="cell-end">Status</span>
            <!-- <span>Card Default</span> -->
            <span class="cell-end">
              <div class="d-flex justify-content-end align-items-center">
                <VControl raw subcontrol>
                  <VCheckbox
                    v-model="All"
                    value="all"
                    :is-label="false"
                    label="All"
                    color="primary"
                  />
                </VControl>
                <membersOptionDropdown />
              </div>
            </span>
          </div>

          <div class="flex-list-inner">
            <transition-group name="list" tag="div">
              <!--Table item-->
              <div
                v-for="item in filteredData"
                :key="`${props.name}-${item.id}`"
                class="flex-table-item cursor-pointer"
                :class="item.isSolvente ? '' : 'bg-danger'"
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
                        <router-link
                          :to="{
                            name: 'members-profile',
                            query: { id: item.id },
                          }"
                          style="color: white"
                        >
                          {{ item.id }}
                          {{ item.name }} {{ item.second_name }}
                          {{ item.last_name }}
                        </router-link>
                      </h3>
                    </span>
                    <!-- <span class="item-meta">
                      <span>{{ item.position }}</span>
                    </span> -->
                  </div>
                </div>

                <div class="flex-table-cell" data-th="member-id">
                  <span class="light-text">{{ item.email }}</span>
                </div>
                <div class="flex-table-cell" data-th="Membership Type">
                  <span v-if="item.membership_members" class="light-text">{{
                    item.membership_members.membership.name
                  }}</span>
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
                <div class="flex-table-cell cell-end" data-th="Status">
                  <span
                    class="tag is-rounded"
                    :class="item.membership_members != null ? 'is-success' : ''"
                    >{{
                      item.membership_members != null ? 'Active' : 'Inactive'
                    }}</span
                  >
                </div>
                <!-- <div v-if="item.user" class="flex-table-cell">
                  <p class="mr-3">{{ item.user.pm_type }}</p>
                  <p>****{{ item.user.pm_last_four }}</p>
                </div> -->
                <!-- <div class="flex-table-cell" data-th="Relations">
                  <V-AvatarStack
                    :avatars="item.contacts"
                    size="small"
                    :limit="3"
                    class="is-pushed-mobile"
                  />
                </div> -->
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <VControl raw subcontrol>
                    <VCheckbox
                      v-model="membersSelected"
                      :value="item.id"
                      :is-label="false"
                      color="primary"
                    />
                  </VControl>
                  <FlexTableDropdown :id-member="item.id" :member="item" />
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->

        <V-FlexPagination
          v-if="filteredData.length > 0"
          :item-per-page="props.paginationData.per_page ?? 15"
          :total-items="props.paginationData.total ?? 0"
          :current-page="props.paginationData.current_page"
        />
      </div>
    </div>
    <!-- <sidebar-member
      :status="memberCard.status"
      :member="memberCard.member"
      @closeMemberCard="closeMemberCard"
    /> -->
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

.cell-end {
  .dropdown-trigger {
    span {
      padding: 0px !important;
      justify-content: center;
    }
  }
}
</style>
