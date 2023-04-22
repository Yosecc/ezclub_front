<script setup lang="ts">
import {
  ref,
  defineProps,
  onMounted,
  computed,
  nextTick,
  watch,
  reactive,
} from 'vue'
import { moneda, monedaDecimal } from '/@src/models/Mixin'
import { Api } from '/@src/services'
import moment from 'moment'

import * as subscriptionsStripe from '/@src/models/v2/reports/subscriptionsStripe'

import { radar } from 'billboard.js'

import { themeColors } from '/@src/utils/themeColors'

const props = defineProps({
  dataStripe: {
    type: Object,
    default: {
      data: {},
      count: null,
      amount: null,
    },
  },
})

const isLoading = ref(false)

onMounted(() => {})

const filters = ref('')
const filterDate = ref('all')

const convert: object = (data: object) => {
  return JSON.parse(JSON.stringify(data))
}

const dataStripe = computed(() => {
  let data = props.dataStripe

  for (let i in data.data) {
    data.data[i].options = JSON.parse(
      JSON.stringify(subscriptionsStripe.options)
    )

    // data.data[i].options = subscriptionsStripe.options

    let x = ['x'].concat(subscriptionsStripe.dataFechas(data.data[i].data))
    data.data[i].options.data.columns.push(x)

    let data2 = ['data1'].concat(
      subscriptionsStripe.dataAmount(data.data[i].data)
    )
    data.data[i].options.data.columns.push(data2)

    let data1 = ['data2'].concat(
      subscriptionsStripe.dataCount(data.data[i].data)
    )
    data.data[i].options.data.columns.push(data1)

    data.data[i].options.data.labels.format.data2 = function (x) {
      return d3.format('$')(x)
    }
  }

  return data
})

////////////////
const listEstados = reactive({
  key: null,
  data: null,
})

const viewListEstados = ({ estado, key }) => {
  if (listEstados.key == key) {
    listEstados.key = null
    listEstados.data = null
    return
  }
  listEstados.key = key
  listEstados.data = estado
}

watch(listEstados.key, (to) => {
  listEstados.data = null
  selectedProximaFecha.key = null
})

/////////////////

const selectedProximaFecha = reactive({
  key: null,
  subscriptions: null,
  memberships: null,
})

const viewListSubscriptions = ({ data, key }) => {
  if (selectedProximaFecha.key == key) {
    selectedProximaFecha.key = null
    selectedProximaFecha.subscriptions = null
    selectedProximaFecha.memberships = null
    return
  }
  selectedProximaFecha.key = key
  selectedProximaFecha.subscriptions = data
  selectedProximaFecha.memberships = data.membresias

  setTimeout(() => {
    var element = document.getElementById('subscriptionsList')
    element.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}

const parpadeo = ref(false)
watch(
  () => selectedProximaFecha.key,
  (to) => {
    console.log(to)
    subscriptionMembnership.key = null

    parpadeo.value = true
    setTimeout(() => {
      parpadeo.value = false
    }, 1000)
  }
)

////////////////

const subscriptionMembnership = reactive({
  key: null,
  dat: null,
})

const viewListSubscriptionsMembership = ({ data, key }) => {
  if (subscriptionMembnership.key == key) {
    subscriptionMembnership.key = null
    subscriptionMembnership.data = null

    return
  }
  subscriptionMembnership.key = key
  subscriptionMembnership.data = data
}

/////////////////

const ListActive = ref('subscriptions')
</script>

<template>
  <div class="w-100">
    <VCard class="column is-12 mb-4">
      <div class="columns is-multiline">
        <div class="column is-6">
          <VCard color="peimary">
            <p class="title is-5">
              <b>Subscriptions Stripe:</b>
              {{ dataStripe.count }}
            </p>
          </VCard>
        </div>
        <div class="column is-6">
          <VCard color="primary">
            <p class="title is-5">
              <b> Amount:</b>
              {{ moneda(dataStripe.amount / 100) }}
            </p>
          </VCard>
        </div>

        <div class="columns is-multiline column is-12">
          <div
            class="column is-6"
            v-for="(estado, key) in dataStripe.data"
            :key="`status-${key}`"
          >
            <VCard>
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VCard color="">
                    <p class="title is-6">
                      {{ estado.count }}
                      {{ key }}
                    </p>
                  </VCard>
                </div>
                <div class="column is-6">
                  <VCard color="info">
                    <p class="title is-6">
                      <b> Amount:</b>
                      {{ moneda(estado.amount / 100) }}
                    </p>
                  </VCard>
                </div>
                <div class="column is-12">
                  <VCard>
                    <V-BillboardJS
                      :ref="`chart-estado-${key}`"
                      :id="`chart-estado-${key}`"
                      :options="convert(estado.options)"
                    />
                  </VCard>
                </div>
                <div class="column is-12">
                  <VButton
                    class="w-100"
                    :color="listEstados.key == key ? 'info' : ''"
                    @click="viewListEstados({ estado, key })"
                    >View List Subscriptions</VButton
                  >
                </div>
              </div>
            </VCard>
          </div>
        </div>
      </div>
    </VCard>

    <VCard v-if="listEstados.data" class="column is-12 mb-4">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th scope="col">Date next Payment</th>
            <th scope="col">Count.</th>
            <th scope="col">Amount sum.</th>
            <th scope="col">View lists</th>
          </tr>
        </thead>
        <tbody
          :key="`estado-${key}`"
          v-for="(item, key) in listEstados.data.data"
          :class="key == selectedProximaFecha.key ? 'bg-info' : ''"
        >
          <tr>
            <td class="p-4">
              {{
                key == ''
                  ? 'N/A'
                  : moment(key, 'YYYY-MM-DD').format('MM-DD-YYYY')
              }}
            </td>
            <td>{{ item.count }}</td>
            <td>{{ moneda(item.amount / 100) }}</td>
            <td>
              <VButton
                color="info"
                @click="viewListSubscriptions({ data: item, key: key })"
                ><i class="fa fa-solid fa-eye"></i
              ></VButton>
            </td>
          </tr>
        </tbody>
      </table>
    </VCard>

    <VCard
      v-if="selectedProximaFecha.subscriptions"
      id="subscriptionsList"
      class="column is-12 mb-4"
    >
      <VCard class="d-flex justify-content-between mb-4">
        <V-Loader size="small" :active="parpadeo">
          <div>
            <p>
              Payment next date:
              {{
                moment(selectedProximaFecha.key, 'YYYY-MM-DD').format(
                  'MM-DD-YYYY'
                )
              }}
            </p>
            <p>Count: {{ selectedProximaFecha.subscriptions.count }}</p>
            <p>
              Amount:
              {{ moneda(selectedProximaFecha.subscriptions.amount / 100) }}
            </p>
          </div>
        </V-Loader>

        <div>
          <VButton
            :color="ListActive == 'subscriptions' ? 'info' : undefined"
            class="mr-4"
            @click="ListActive = 'subscriptions'"
            >All Subscriptions</VButton
          >
          <VButton
            :color="ListActive == 'membresias' ? 'info' : undefined"
            @click="ListActive = 'membresias'"
            >Group by membership</VButton
          >
        </div>
      </VCard>

      <VCard
        v-if="
          ListActive == 'subscriptions' && selectedProximaFecha.subscriptions
        "
      >
        <reportsStripeListSubscription
          :subscriptions="selectedProximaFecha.subscriptions.data"
        />
      </VCard>

      <VCard
        v-if="ListActive == 'membresias' && selectedProximaFecha.memberships"
      >
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Membership</th>
              <th scope="col">Count.</th>

              <th scope="col">Amount</th>
              <th scope="col">View Subscription</th>
            </tr>
          </thead>
          <tbody
            :key="`member-${key}`"
            v-for="(item, key) in selectedProximaFecha.memberships"
            :class="key == subscriptionMembnership.key ? 'bg-info' : ''"
          >
            <tr>
              <td class="p-4">
                <p>{{ item.membership.name }}</p>
              </td>

              <td class="p-4">
                <p>{{ item.count }}</p>
              </td>

              <td class="p-4">
                {{ moneda(item.amount / 100) }}
              </td>

              <td>
                <VButton
                  color="info"
                  outlined
                  @click="
                    viewListSubscriptionsMembership({
                      data: item.data,
                      key: key,
                    })
                  "
                  ><i class="fa fa-solid fa-eye"></i
                ></VButton>
              </td>
            </tr>
            <tr v-if="key == subscriptionMembnership.key">
              <td colspan="4">
                <VCard v-if="subscriptionMembnership.data">
                  <reportsStripeListSubscription
                    :subscriptions="subscriptionMembnership.data"
                  />
                </VCard>
              </td>
            </tr>
          </tbody>
        </table>
      </VCard>
    </VCard>
  </div>
</template>

<style lang="scss" scoped></style>
