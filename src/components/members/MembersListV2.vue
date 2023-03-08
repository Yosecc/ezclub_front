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
  // console.log(member)
  let classs = ''
  if (member.subscription) {
    if (
      member.subscription.subscription &&
      member.subscription.subscription.status == 'active'
    ) {
      classs = 'active'
    } else {
      classs = member.subscription.status
    }

    if (member.subscription.status == 'active') {
      // $activos++;
    } else if (member.subscription.status == 'sincard') {
      // $sinCard++;
    }

    if (
      member.subscription.status == 'canceled' &&
      moment() <= moment(member.membership_members.cacelation_date)
    ) {
      classs = 'active'
    }
  } else if (member.sinMembresia) {
    if (member.user && member.user.pm_last_four) {
      // $nomembershipcontarjeta++;
      classs = 'nomembershipcontarjeta'
    } else {
      classs = 'nomembership'
      // $nomembership++;
    }
  }

  return classs
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
      <!-- <p>{{ props.members }}</p> -->
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
          <!-- <p>lorem</p> -->
          <!--Grid item-->
          <div
            v-for="item in filteredData"
            :key="`${props.name}-${item.id}`"
            class="column is-4"
          >
            <div
              @click="openMemberCard(true, item)"
              class="tile-grid-item cardprofile"
              :class="colorCard(item)"
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
                  <FlexTableDropdown
                    :id-member="item.id"
                    :member="item"
                    v-if="item"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <span class="d-flex align-items-center">
                  <div class="mr-1">
                    <VTag
                      :label="`${
                        colorCard(item) == 'sincard'
                          ? 'no_card'
                          : colorCard(item)
                      }`"
                      class="mr-1"
                      color=""
                    />
                  </div>

                  <VTag
                    v-if="
                      item.membership_members &&
                      item.membership_members.status == 2
                    "
                    :label="`Canceled ${moment(
                      item.membership_members.cacelation_date
                    ).format('MM-DD-YYYY')}`"
                    class="mr-1"
                    color="danger"
                  />

                  <VTag
                    v-if="
                      item.membership_members &&
                      item.membership_members.schedules
                    "
                    :label="`${moment(item.membership_members.schedules).format(
                      'MM-DD-YYYY'
                    )}`"
                    class="mr-1"
                    color=""
                  />

                  <div
                    class="mr-1"
                    v-if="
                      item.subscription &&
                      item.subscription.subscription &&
                      item.subscription.latest_invoice &&
                      item.subscription.latest_invoice.payments_intents &&
                      colorCard(item) == 'due'
                    "
                  >
                    <VTag
                      v-if="
                        item.membership_members.status != 2 &&
                        item.subscription.latest_invoice &&
                        item.subscription.latest_invoice.payments_intents.length
                      "
                      :label="`${item.subscription.latest_invoice.payments_intents[0].status}`"
                      class="mr-1"
                      color="danger"
                    />
                  </div>
                </span>

                <span class="d-flex align-items-center">
                  <VTag
                    v-if="item.leo_vet_fr"
                    :label="`LEO`"
                    class="mr-1"
                    color="green"
                  />
                  <div class="mr-1" v-if="item.membership_members != undefined">
                    <VTag
                      v-if="item.membership_members.discount"
                      :label="`-${item.membership_members.discount.value}%`"
                      class=""
                      color="orange"
                    />
                  </div>

                  <div class="mr-3" v-if="item.cards && item.cards.length">
                    <VTag
                      v-if="item.cards[0].last4 != null"
                      :label="`Cards`"
                      class="mr-1"
                      color="purple"
                    />
                  </div>

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
