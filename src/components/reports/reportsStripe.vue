<script setup lang="ts">
import { ref, defineProps, onMounted, computed, nextTick, watch } from 'vue'
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

const billboardJsOptions = {
  data: {
    x: 'x',
    columns: [
      ['x', 'Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
      ['data1', 330, 350, 200, 380, 150],
      ['data2', 130, 100, 30, 200, 80],
      ['data3', 230, 153, 85, 300, 250],
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info,
      data4: themeColors.purple,
    },
    type: radar(),
    labels: true,
  },
  radar: {
    axis: {
      max: 400,
    },
    level: {
      depth: 4,
    },
    direction: {
      clockwise: true,
    },
  },
  size: {
    height: 280,
  },
  padding: {
    bottom: 20,
  },
  title: {
    text: 'Radar Chart',
    position: 'top-left',
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20,
    },
  },
  legend: {
    position: 'inset',
  },
}

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

    let data1 = ['data1'].concat(
      subscriptionsStripe.dataCount(data.data[i].data)
    )
    data.data[i].options.data.columns.push(data1)

    let data2 = ['data2'].concat(
      subscriptionsStripe.dataAmount(data.data[i].data)
    )
    data.data[i].options.data.columns.push(data2)

    data.data[i].options.data.labels.format.data2 = function (x) {
      return d3.format('$')(x)
    }
  }

  return data
})

const subscriptionsEstadoGroup = ref(null)

const subscriptionsList = ref(null)
const subscriptionsMemberships = ref(null)

const ListActive = ref('subscriptions')

const viewListEstados = (data) => {
  subscriptionsEstadoGroup.value = data
}

const keySelectedProximaFecha = ref(null)
const viewListSubscriptions = ({ data, key }) => {
  subscriptionsList.value = data
  subscriptionsMemberships.value = data.membresias
  keySelectedProximaFecha.value = key

  setTimeout(() => {
    var element = document.getElementById('subscriptionsList')
    element.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}

const ListSubscriptionsMembership = ref(null)
const keySelected = ref(null)
const viewListSubscriptionsMembership = ({ data, key }) => {
  ListSubscriptionsMembership.value = data
  keySelected.value = key
}
const parpadeo = ref(false)
watch(keySelectedProximaFecha, (to) => {
  parpadeo.value = true
  setTimeout(() => {
    parpadeo.value = false
  }, 300)
})
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
                    color="warning"
                    @click="viewListEstados(estado)"
                    >View List Subscriptions</VButton
                  >
                </div>
              </div>
            </VCard>
          </div>
        </div>
      </div>
    </VCard>

    <VCard v-if="subscriptionsEstadoGroup" class="column is-12 mb-4">
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
          v-for="(item, key) in subscriptionsEstadoGroup.data"
          :class="key == keySelectedProximaFecha ? 'bg-info' : ''"
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
      v-if="subscriptionsList"
      id="subscriptionsList"
      class="column is-12 mb-4"
    >
      <VCard class="d-flex justify-content-between mb-4">
        <div>
          <p>
            Payment next date:
            {{
              moment(keySelectedProximaFecha, 'YYYY-MM-DD').format('MM-DD-YYYY')
            }}
          </p>
          <p>Count: {{ subscriptionsList.count }}</p>
          <p>Amount: {{ moneda(subscriptionsList.amount / 100) }}</p>
        </div>

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

      <VCard v-if="ListActive == 'subscriptions' && subscriptionsList">
        <reportsStripeListSubscription
          :subscriptions="subscriptionsList.data"
        />
      </VCard>

      <VCard v-if="ListActive == 'membresias' && subscriptionsMemberships">
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
            v-for="(item, key) in subscriptionsMemberships"
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
            <tr v-if="key == keySelected">
              <td colspan="4">
                <VCard v-if="ListSubscriptionsMembership">
                  <reportsStripeListSubscription
                    :subscriptions="ListSubscriptionsMembership"
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
