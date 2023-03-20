<script setup lang="ts">
import { computed, ref, onMounted, watch, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'
import {
  // membersSelected,
  // arregloTrainers,
  initials,
} from '/@src/models/Members.ts'
import moment from 'moment'
const emit = defineEmit(['filterChange', 'onSearch'])

const route = useRoute()
const router = useRouter()

const filters = ref('')

const filterDate = ref('all')
const paginationData = ref({})

const props = defineProps({
  suscripciones: {
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

const filteredData = computed(() => {
  // if (!props.filters) {
  return props.suscripciones
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

// const memberCard = ref({ status: false, member: null })

const openMemberCard = (status, member) => {
  // memberCard.value.status = status
  // memberCard.value.member = member
}

// const closeMemberCard = () => {
//   memberCard.value.status = false
//   memberCard.value.member = null
// }

watch(
  () => props.suscripciones,
  () => {
    // console.log(props.members)
  }
)

const colorCard = (member) => {
  // console.log(member)
  let classs = ''
  // if (member.subscription) {
  //   if (
  //     member.subscription.subscription &&
  //     member.subscription.subscription.status == 'active'
  //   ) {
  //     classs = 'active'
  //   } else {
  //     classs = member.subscription.status
  //   }

  //   if (member.subscription.status == 'active') {
  //     // $activos++;
  //   } else if (member.subscription.status == 'sincard') {
  //     // $sinCard++;
  //   }

  //   if (
  //     member.subscription.status == 'canceled' &&
  //     moment() <= moment(member.membership_members.cacelation_date)
  //   ) {
  //     classs = 'active'
  //   }
  // } else if (member.sinMembresia) {
  //   if (member.user && member.user.pm_last_four) {
  //     // $nomembershipcontarjeta++;
  //     classs = 'nomembershipcontarjeta'
  //   } else {
  //     classs = 'nomembership'
  //     // $nomembership++;
  //   }
  // }

  return classs
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
              class="tile-grid-item cardprofile"
              :class="colorCard(item)"
              :style="{ backgroundColor: item.estado.color }"
            >
              <div class="tile-grid-item-inner align-items-start">
                <div v-if="item.member">
                  <V-Avatar
                    :picture="`${API_WEB_URL}storage/${item.member.photo}`"
                    color="primary"
                    :initials="
                      initials(item.member.name, item.member.last_name)
                    "
                    size="medium"
                    class="mr-4 mb-4"
                  />
                </div>
                <div>
                  <div v-if="!item.member" class="mb-4 user">
                    <p style="font-size: 12px">
                      Username: {{ item.user.name }}
                    </p>
                    <p style="font-size: 12px">Email: {{ item.user.email }}</p>
                  </div>
                  <div v-else class="mb-4 member">
                    <p style="font-size: 12px">
                      {{ item.member.name }} {{ item.member.last_name }}
                    </p>
                    <p style="font-size: 12px">{{ item.member.email }}</p>
                  </div>
                </div>
              </div>

              <div>
                <p>{{ item.id }}</p>
                <div class="mb-4 description">
                  <p style="font-size: 12px">
                    {{ item.recurrence.recurrencia.descriptions }}
                  </p>
                  <p v-if="item.membership" class="title is-5 mb-1">
                    {{ item.membership.name }}
                  </p>
                  <p class="title is-6">{{ item.estado.estado_pago }}</p>
                </div>

                <div class="pago">
                  <p v-if="item.schedules_start" style="font-size: 12px">
                    Next Schedules Start:

                    {{
                      moment(item.schedules_start, 'YYYY-MM-DD').format(
                        'MM-DD-YYYY'
                      )
                    }}
                  </p>
                  <p style="font-size: 12px">
                    Next Payment:

                    {{
                      moment(
                        item.estado.fecha_vencimiento,
                        'YYYY-MM-DD'
                      ).format('MM-DD-YYYY')
                    }}
                  </p>
                  <p v-if="item.fecha_suspencion" style="font-size: 12px">
                    Canceled:

                    {{
                      moment(item.fecha_suspencion, 'YYYY-MM-DD').format(
                        'MM-DD-YYYY'
                      )
                    }}
                  </p>

                  <p style="font-size: 12px">
                    Payment Type: {{ item.payment_type.name }}
                  </p>

                  <div class="d-flex mt-2">
                    <div class="mr-1" v-if="item.member.leo_vet_fr">
                      <VTag :label="`LEO`" class="mr-1" color="orange" />
                    </div>

                    <div class="mr-1" v-if="item.discount">
                      <VTag
                        :label="`${item.discount.name}`"
                        class="mr-1"
                        color="secondary"
                      />
                    </div>

                    <div class="mr-1" v-if="item.user.cards.length">
                      <VTag :label="`Cards`" class="mr-1" color="purple" />
                    </div>
                  </div>

                  <!-- <p>{{ item.discount }}</p> -->
                </div>
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
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/pages/lists/_tile-grid-v1.scss';

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
