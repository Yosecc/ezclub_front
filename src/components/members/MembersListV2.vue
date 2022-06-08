<script setup lang="ts">
import { computed, ref, onMounted, watch, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'
import {
  membersSelected,
  arregloTrainers,
  initials,
} from '/@src/models/Members.ts'
import moment from 'moment'
const emit = defineEmit(['filterChange', 'onSearch'])

const route = useRoute()
const router = useRouter()

const filters = ref('')

const filterDate = ref('all')
const paginationData = ref({})

const filteredData = computed(() => {
  // if (!props.filters) {
  return props.members
  // } else {
  //   return props.members.filter((item) => {
  //     return (
  //       item.name.match(new RegExp(props.filters, 'i')) ||
  //       item.last_name.match(new RegExp(props.filters, 'i')) ||
  //       item.id == props.filters ||
  //       item.phone == props.filters ||
  //       item.personal_identifications == props.filters
  //     )
  //   })
  // }
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

const users = [
  {
    id: 0,
    picture: '/demo/avatars/7.jpg',
    initials: 'AC',
    color: 'info',
  },
  {
    id: 1,
    picture: null,
    initials: 'JP',
    color: 'info',
  },
]

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
      <div class="tile-grid tile-grid-v1">
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

        <transition-group name="list" tag="div" class="columns is-multiline">
          <!--Grid item-->
          <div
            v-for="item in filteredData"
            :key="`${props.name}-${item.id}`"
            class="column is-4"
          >
            <div
              @click="openMemberCard(true, item)"
              class="tile-grid-item"
              :class="item.isSolvente ? '' : 'bg-danger'"
            >
              <div
                class="
                  tile-grid-item-inner
                  justify-content-between
                  align-items-start
                "
              >
                <div class="d-flex">
                  <div
                    class="
                      flex-column
                      d-flex
                      justify-content-center
                      align-item-center
                    "
                  >
                    <V-Avatar
                      :picture="`${API_WEB_URL}storage/${item.photo}`"
                      color="primary"
                      :initials="initials(item.name, item.last_name)"
                      size="medium"
                    />
                  </div>
                  <div>
                    <div class="meta ml-2">
                      <span>
                        <router-link
                          :to="{
                            name: 'members-profile',
                            query: { id: item.id },
                          }"
                          style="color: white"
                        >
                          {{ item.name }} {{ item.second_name }}
                          {{ item.last_name }}
                        </router-link>
                      </span>
                    </div>

                    <div class="p-3">
                      <span v-if="item.membership_members">
                        <p>{{ item.membership_members.membership.name }}</p>
                      </span>
                      <span v-if="props.name == 'checkin'">
                        <p style="font-color: grey">
                          Check In:
                          {{
                            moment(item.timecheckin).format('MM-DD-YYYY H:m:s')
                          }}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="align-items-center d-flex">
                  <V-Checkbox
                    class="p-0"
                    v-model="membersSelected"
                    color="primary"
                    :label="' '"
                    :value="item.id"
                  />
                  <FlexTableDropdown :id-member="item.id" :member="item" />
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <span
                  class="tag is-rounded py-0 d-flex align-items-center mt-3"
                  style="font-size: 10px"
                  :class="item.membership_members != null ? 'is-success' : ''"
                >
                  {{ item.membership_members != null ? 'Active' : 'Inactive' }}
                </span>

                <span>
                  <VAvatarStack
                    v-if="item.trainers"
                    :avatars="arregloTrainers(item.trainers)"
                    size="small"
                  />
                </span>
              </div>
            </div>
          </div>
        </transition-group>

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
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/lists/_tile-grid-v1.scss';

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
