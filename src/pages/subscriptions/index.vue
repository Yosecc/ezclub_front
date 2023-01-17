<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import {
  getMeberships,
  solicitud,
  inputsMembership,
  getDiscounts,
  getPresupuesto,
  presupuesto,
  suscripcion,
  createSuscripcion,
} from '/@src/models/Subscriptions'
import { cities, states, contries, getAllConfig } from '/@src/services/config'
import {
  moneda,
  getInput,
  setInputValuesData,
  perpareDataInputs,
  notyf,
} from '/@src/models/Mixin'
import { inputsInformation } from '/@src/models/Members'
pageTitle.value = 'Subscriptions'
useHead({
  title: 'Subscriptions',
})

const route = useRoute()

const memberships = ref([])

const recurring = ref(true)

const aprobado = ref(false)

const aprobarPresupuesto = () => {
  aprobado.value = true
  setTimeout(() => {
    window.scrollTo(0, window.scrollY + 500)
  }, 300)
}

onMounted(() => {
  getMeberships().then((response) => {
    memberships.value = response.data
  })
  getDiscounts(1, 'membership').then((response) => {
    setInputValuesData(inputsMembership, 'discount', response.data.discounts)
  })
  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'city_id', cities.value)
    setInputValuesData(inputsInformation, 'state_id', states.value)
    setInputValuesData(inputsInformation, 'country_id', contries.value)
    getInput(inputsInformation.value, 'country_id').model = 34
  })
})

const precios = computed(() => {
  const data = memberships.value.find((e) => e.id == solicitud.memberships_id)
  return data?.amounts.filter(
    (e) => e.is_recurrence == recurring.value && e.recurrencia != null
  )
})

watch(
  () => solicitud.memberships_id,
  (memberships_id) => {
    solicitud.recurrences_id = null
    presupuesto.value = null
    aprobado.value = false
  }
)

const datosSolicitud = computed(() => {
  for (var i in solicitud) {
    if (getInput(inputsMembership.value, i) != undefined) {
      solicitud[i] = getInput(inputsMembership.value, i).model
    }
  }
  return solicitud
})

const initSuscripcion = () => {
  presupuesto.value = null
  aprobado.value = false
  getPresupuesto(datosSolicitud.value).then((response) => {
    presupuesto.value = response.data
    setTimeout(() => {
      window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
      )
    }, 300)
  })
}

const proccessMember = async () => {
  console.log(solicitud)
  suscripcion.member = perpareDataInputs(inputsInformation.value)

  console.log(suscripcion)
  let objeto = { ...solicitud, ...suscripcion }

  const fd = new FormData()

  for (var i in objeto) {
    if (typeof objeto[i] == 'object') {
      for (var e in objeto[i]) {
        fd.append(i + `[${e}]`, objeto[i][e])
      }
    } else {
      fd.append(i, objeto[i])
    }
  }

  const response = await createSuscripcion(fd)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      const data = error.response.data
      console.log('data', typeof data, data)
      for (var i in data) {
        if (typeof data[i] == 'object') {
          console.log(i, typeof data[i], data[i])
          // data[i].forEach((e: any) => {
          //   console.log(e, typeof e)
          //   // notyf.error(`${i}: ${e}`)
          // })
        }
      }
      console.log('error')
    })
  console.log('Response', response)
  // console.log()
}
</script>

<template>
  <SidebarLayout>
    <div class="columns is-multiline">
      <div class="column is-9">
        <h1 class="title is-4">1. Select a membership</h1>
        <VCard class="mb-4">
          <VLoader size="large" :active="!memberships.length">
            <div class="columns is-multiline">
              <div
                v-for="(item, key) in memberships"
                :key="`membership-${key}`"
                class="column is-4 btn btn-card"
                @click="solicitud.memberships_id = item.id"
              >
                <VCard
                  :color="
                    solicitud.memberships_id == item.id ? 'primary' : undefined
                  "
                  class="h-100"
                >
                  <div>
                    <h1 class="title is-4">{{ item.name }}</h1>
                    <!-- <p>{{ item }}</p> -->
                  </div>
                </VCard>
              </div>
            </div>
          </VLoader>
        </VCard>
        <VCard class="">
          <inputsLayaut :inputs-step="inputsMembership" />
        </VCard>
      </div>
      <div class="column is-3">
        <VCard class="h-100 d-flex flex-column justify-content-between">
          <div>
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="recurring"
                  label="Recurring Subscription"
                  color="primary"
                />
              </VControl>
            </VField>

            <div
              v-for="(item, key) in precios"
              :key="`membership-precios-${key}`"
              class="btn btn-card"
              @click="solicitud.recurrences_id = item.id"
            >
              <VCard
                :color="
                  solicitud.recurrences_id == item.id ? 'primary' : undefined
                "
                class="mb-3 py-4"
              >
                <p>{{ item.recurrencia.descriptions }}</p>
                <p class="title is-5 text-left mt-2">
                  {{ moneda(item.amount) }}
                </p>
              </VCard>
            </div>
          </div>
          <div>
            <VButton
              @click="initSuscripcion"
              color="primary"
              class="d-flex justify-content-center mt-6 py-5 w-100"
              style="
                text-align: center;
                text-transform: uppercase;
                font-size: 20px;
                font-weight: 900;
              "
            >
              start subscription
            </VButton>
          </div>
        </VCard>
      </div>

      <div class="column is-12" v-if="presupuesto">
        <h1 class="title is-4">2. Approve the budget</h1>
        <VCard>
          <Presupuesto :presupuesto="presupuesto"></Presupuesto>

          <VButton
            @click="aprobarPresupuesto"
            color="info"
            class="d-flex justify-content-center py-5 px-6 ml-auto"
            style="
              text-align: center;
              text-transform: uppercase;
              font-size: 20px;
              font-weight: 900;
            "
            v-if="!aprobado"
            >Approve and continue
          </VButton>
        </VCard>
      </div>

      <div class="column is-12" v-if="presupuesto && aprobado">
        <h1 class="title is-4">3. Enter member information</h1>
        <VCard>
          <inputsLayaut :inputs-step="inputsInformation" />

          <VButton
            @click="proccessMember"
            color="info"
            class="d-flex justify-content-center py-5 px-6 ml-auto"
            style="
              text-align: center;
              text-transform: uppercase;
              font-size: 20px;
              font-weight: 900;
            "
            >Continue
          </VButton>
        </VCard>
      </div>
    </div>
  </SidebarLayout>
</template>
