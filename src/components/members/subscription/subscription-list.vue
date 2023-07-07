<script setup lang="ts">
import {
  computed,
  ref,
  onMounted,
  watch,
  defineProps,
  defineEmit,
  reactive,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { API_WEB_URL } from '/@src/services'
import {
  // membersSelected,
  // arregloTrainers,
  initials,
} from '/@src/models/Members.ts'
import moment from 'moment'

import { estados, estadosIntentos } from '/@src/models/Subscriptions'

const emit = defineEmit(['filterChange', 'onSearch', 'onReload'])

const route = useRoute()
const router = useRouter()

const filters = ref('')

const filterDate = ref('all')
const paginationData = ref({})

const props = defineProps({
  suscripciones: {
    type: Array,
    required: true,
    default: [],
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
  colgrid: {
    type: String,
    default: 'is-4',
  },
  isselectedmultiple: {
    type: Boolean,
    default: false,
  },
  ispaginator: {
    type: Boolean,
    default: true,
  },
  // filterLocal:{
  //   type: Boolean,
  //   default: false
  // }
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
const centeredActionsOpen = ref(false)
const member_id = ref(null)
const code = ref(null)

const redirectProfile = () => {
  let query = {}
  if (item.member) {
    query = { id: item.member.id }
  }
  if (!item.member) {
    query = { code: item.code }
  }
  router.push({
    name: 'members-profile',
    query: query,
    hash: '#susbcriptionIndex',
  })
}

const openMemberCard = (item) => {
  centeredActionsOpen.value = true
  // let query = {}
  if (item.member) {
    member_id.value = item.member.id
    // query = { id: item.member.id }
  }
  if (!item.member) {
    code.value = item.code
  }
}

const closeModal = () => {
  centeredActionsOpen.value = false
  member_id.value = null
}

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

const idSeleccionados = reactive({
  data: [],
})

const onReload = () => {
  idSeleccionados.data = []
  emit('onReload')
}
</script>

<template>
  <div>
    <div
      v-if="idSeleccionados.data.length"
      class="w-100 d-flex mb-4 justify-content-end align-items-center"
    >
      <subscription-method-payment-queue-stripe
        :id_seleccionados="idSeleccionados"
        :suscripciones="props.suscripciones"
        @onPayment="onReload"
      />
    </div>
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
            :key="`${props.name}-${item ? item.id : 'e'}`"
            class="column"
            :class="colgrid"
            style="cursor: pointer"
          >
            <div
              class="tile-grid-item cardprofile h-100"
              :class="colorCard(item)"
              v-if="item"
              :style="{
                backgroundColor: item.estado.color,
                overflow: 'hidden',
              }"
            >
              <div
                class="
                  tile-grid-item-inner
                  align-items-start
                  justify-content-between
                "
              >
                <div
                  @click="openMemberCard(item)"
                  class="tile-grid-item-inner align-items-start"
                >
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
                      <p style="font-size: 12px">
                        Email: {{ item.user.email }}
                      </p>
                    </div>
                    <div v-else class="mb-4 member">
                      <p style="font-size: 12px">
                        {{ item.member.name }} {{ item.member.last_name }}
                      </p>
                      <p style="font-size: 12px">{{ item.member.email }}</p>
                    </div>
                  </div>
                </div>
                <div v-if="props.isselectedmultiple">
                  <VField class="is-flex">
                    <VControl raw subcontrol>
                      <VCheckbox
                        v-model="idSeleccionados.data"
                        :value="item.id"
                      />
                    </VControl>
                  </VField>
                </div>
              </div>

              <div @click="openMemberCard(item)">
                <!-- <p>{{ item.id }}</p> -->

                <div class="mb-4 description">
                  <p v-if="item.recurrence" style="font-size: 12px">
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

                  <p
                    v-if="item.payment_type"
                    style="font-size: 12px"
                    class="mb-4"
                  >
                    Payment Type: {{ item.payment_type.name }}
                  </p>
                  <VCard class="px-3 py-2" v-if="item.estado.ultimo_intento">
                    <p style="font-size: 10px">
                      <b
                        >Status:

                        {{
                          estadosIntentos.find(
                            (e) => e.value == item.estado.ultimo_intento.estado
                          ).name
                        }}
                      </b>
                      <b> Intent:</b> {{ item.estado.ultimo_intento.intento }}
                    </p>
                    <p
                      v-if="item.estado.ultimo_intento.estado != 'pagado'"
                      style="font-size: 10px"
                    >
                      {{ item.estado.ultimo_intento.pago_id }}
                    </p>

                    <p style="font-size: 10px">
                      Date: {{ item.estado.ultimo_intento.fecha }}
                    </p>
                  </VCard>
                  <div v-else>
                    <p></p>
                  </div>

                  <div class="d-flex mt-2">
                    <div
                      class="mr-1"
                      v-if="item.member && item.member.leo_vet_fr"
                    >
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

                    <div
                      class="mr-1"
                      v-if="item.auditoria ? item.auditoria.length : false"
                    >
                      <VTag :label="`i`" class="mr-1" />
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
          v-if="filteredData.length > 0 && props.ispaginator"
          :item-per-page="props.paginationData.per_page ?? 15"
          :total-items="props.paginationData.total ?? 0"
          :current-page="props.paginationData.current_page"
        />
      </div>
    </div>
    <!--  -->
    <VModal
      :open="centeredActionsOpen"
      size="big"
      actions="center"
      @close="closeModal"
    >
      <template #content>
        <subscriptionIndex
          v-if="centeredActionsOpen"
          :member_id="member_id"
          :code="code"
        />
      </template>
      <template #action>
        <VButton
          :to="{
            name: 'members-profile',
            query: { id: member_id },
          }"
          v-if="member_id"
          color="info"
          raised
          >View member profile {{ code }}
        </VButton>
        <VButton
          :to="{
            name: 'members-profile',
            query: { code: code },
          }"
          v-if="code"
          color="info"
          raised
          >View member profile
        </VButton>
      </template>
    </VModal>
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
