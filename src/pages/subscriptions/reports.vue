<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
// import { members, subscriptionsCreateStripe } from '/@src/models/Members.ts'

import { suscripciones } from '/@src/models/Subscriptions.ts'

import * as suscripcionPayment from '/@src/models/v2/reports/suscripcionPayment'

import * as suscripcionXmembresia from '/@src/models/v2/reports/suscripcionXmembresia'

pageTitle.value = 'Suscriptions'
useHead({
  title: 'List Suscriptions',
})

const route = useRoute()

const filters = ref('')
const filterDate = ref('all')

const paginationData = ref([])

const isLoading = ref(true)
const defalA = ref('all')

watch(
  () => route.query.page,
  () => {
    getReport(
      'all',
      filters.value,
      route.query.page,
      categoryB.value,
      false,
      fecha_pago.value
    )
  }
)

watch(
  () => filters.value,
  () => {
    // getReport('all', filters.value, 1, categoryB.value, false)
  }
)

const getReport = async (
  filter,
  value = '',
  page = 1,
  category = null,
  reload = true,
  estado = null,
  fecha_pago = null
) => {
  filterDate.value = filter
  isLoading.value = true
  await Api.get('v2/suscripcion/reports', {
    params: {
      [filterDate.value]: true,
      filter: value,
      page: page,
      category: category,
      estado: estado,
      fecha_pago: fecha_pago,
    },
  })
    .then((response) => {
      suscripciones.value = response.data.suscripcionesXpayment
      suscripcionesXmembresias.value = response.data.suscripcionesXmembresias

      let data1 = ['data1'].concat(suscripciones.value.cantidad)
      let data2 = ['data2'].concat(suscripciones.value.montos)
      let x = ['x'].concat(suscripciones.value.fechas)

      suscripcionPayment.dataNew.data1 = data1
      suscripcionPayment.dataNew.data2 = data2
      suscripcionPayment.dataNew.x = x

      if (reload) {
        reloadForm()
      }
    })
    .catch((error) => {
      isLoading.value = false
      console.log(error)
    })
}
const categoryB = ref('All')
const change = (val) => {
  reloadForm()
  defalA.value = val
  getReport(
    'all',
    filters.value,
    route.query.page,
    val,
    false,
    fecha_pago.value
  )
}

onMounted(() => {
  getReport('all', filters.value, route.query.page, 'All', fecha_pago.value)
})

const filtersSearch = () => {
  // console.log(filters.value.length)
  getReport('all', filters.value, 1, categoryB.value, false, fecha_pago.value)
}

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const fecha_pago = ref(null)

const statusSelect = ref('All')
const estados = ref([
  {
    value: 'All',
    name: 'All',
  },
  {
    value: 'COBRAR HOY',
    name: 'COBRAR HOY',
  },
  {
    value: 'PENDIENTE',
    name: 'PENDIENTE',
  },
  {
    value: 'VENCIDO',
    name: 'VENCIDO',
  },
  {
    value: 'PAGADO',
    name: 'PAGADO',
  },
  {
    value: 'CANCELADO',
    name: 'CANCELADO',
  },
  {
    value: 'EXPIRADO',
    name: 'EXPIRADO',
  },
  {
    value: 'PROX. EXPIRADO',
    name: 'PROX. EXPIRADO',
  },
])

const changeStado = () => {
  getReport(
    'all',
    filters.value,
    1,
    categoryB.value,
    false,
    statusSelect.value,
    fecha_pago.value
  )
}

const suscripcionesXmembresias = ref(null)

const membresiasGraficas = computed(() => {
  for (var s in suscripcionesXmembresias.value) {
    const _ = suscripcionesXmembresias.value[s]

    const copiaGender = JSON.parse(
      JSON.stringify(suscripcionXmembresia.options)
    )
    copiaGender.title.text = 'Gender'
    copiaGender.data.columns = suscripcionXmembresia.dataGenero(_.members)

    suscripcionesXmembresias.value[s].optionsGender = copiaGender

    const copiaEdades = JSON.parse(
      JSON.stringify(suscripcionXmembresia.optionsBar)
    )
    copiaEdades.title.text = 'Ages'
    copiaEdades.data.columns = suscripcionXmembresia.dataEdades(_.edades)

    suscripcionesXmembresias.value[s].optionsEdades = copiaEdades

    const copiaRangos = JSON.parse(
      JSON.stringify(suscripcionXmembresia.options)
    )

    copiaRangos.title.text = 'Ages Ranges'
    copiaRangos.data.columns = suscripcionXmembresia.dataEdadesRangos(
      _.edades_rango
    )

    suscripcionesXmembresias.value[s].optionsRangos = copiaRangos

    if (Object.keys(_.diciplines).length) {
      for (const d in suscripcionesXmembresias.value[s].diciplines) {
        let copiaDiciplinaGenders = JSON.parse(
          JSON.stringify(suscripcionXmembresia.options)
        )

        copiaDiciplinaGenders.title.text = 'Gender'
        copiaDiciplinaGenders.data.columns = suscripcionXmembresia.dataGenero(
          suscripcionesXmembresias.value[s].diciplines[d].members
        )

        suscripcionesXmembresias.value[s].diciplines[d].optionsGenders =
          copiaDiciplinaGenders

        //

        let copiaDiciplinaEdades = JSON.parse(
          JSON.stringify(suscripcionXmembresia.optionsBar)
        )

        copiaDiciplinaEdades.title.text = 'Age'
        copiaDiciplinaEdades.data.columns = suscripcionXmembresia.dataEdades(
          suscripcionesXmembresias.value[s].diciplines[d].edades
        )

        suscripcionesXmembresias.value[s].diciplines[d].optionsEdades =
          copiaDiciplinaEdades
      }
    }
  }

  return suscripcionesXmembresias.value
})

const tabs = computed(() => {
  let tabs = []
  const _ = suscripcionesXmembresias.value
  for (const i in _) {
    tabs.push({ label: _[i].membership_name, value: _[i].membership_name })
  }

  return tabs
})

const conteo = computed(() => {
  let count = 0
  const y = membresiasGraficas.value
  for (const i in y) {
    count += y[i].conteo_suscripciones
  }
  return count
})

const selectMembresia = ref(null)
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="mb-5 columns is-multiline">
        <!-- <div class="is-2 column">
          <V-Field class="w-100">
            <V-Control class="input-select">
              <label for="fecha_pago">
                <p><small>Status</small></p>
              </label>
              <div class="select">
                <select v-model="statusSelect" @change="changeStado">
                  <option
                    v-for="(item, key) in estados"
                    :key="`estados-${key}`"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </V-Control>
          </V-Field>
        </div> -->

        <!-- <V-Field class="is-6 column">
          <label for="fecha_pago">
            <p><small>Por definir</small></p>
          </label>
          <V-Control icon="feather:search">
            <input
              v-model="filters"
              class="input custom-text-filter"
              placeholder="Search..."
              @keyup.enter="filtersSearch"
            />
          </V-Control>
        </V-Field> -->
        <!-- <div class="is-2 column">
          
        </div> -->
        <!-- <div class="column is-4">
          <label for="fecha_pago">
            <p><small>Payment Date</small></p>
          </label>
          <input
            type="date"
            @change="changeStado"
            id="fecha_pago"
            class="input custom-text-filter"
            v-model="fecha_pago"
          />
        </div> -->

        <VCard
          v-if="suscripcionPayment.dataNew.data1.length"
          class="column is-12 mb-4"
        >
          <V-BillboardJS
            :options="suscripcionPayment.options"
            @ready="suscripcionPayment.onReady"
          />
        </VCard>

        <!-- <div class="column columns is-12 mb-4" style="overflow: scroll">
          <div
            class="column is-4 mb-4"
            v-for="(item, key) in membresiasGraficas"
            :key="`ii-${key}`"
          >
            <VCard
              @click="selectMembresia = item.membership_name"
              :color="
                item.membership_name == selectMembresia ? 'info' : undefined
              "
            >
              <p class="title is-5">{{ item.membership_name }}</p>
            </VCard>
          </div>
        </div> -->
        <VCard class="mb-4">
          <p class="title is-5">{{ conteo }} Subscriptions</p>
        </VCard>
        <VCard
          class="column columns is-multiline is-12 mb-6"
          v-for="(item, key) in membresiasGraficas"
          :key="`ii-${key}`"
        >
          <div class="column columns is-multiline is-12 mb-4">
            <div class="column is-12 d-flex justify-content-between">
              <p class="title is-5">
                {{ item.membership_name }} ({{ item.conteo_suscripciones }}
                subscriptions)
              </p>
              <!-- <p class="title is-5">{{ item.conteo_suscripciones }}</p> -->
            </div>
            <div class="column is-4">
              <VCard>
                <V-BillboardJS :options="item.optionsGender" />
              </VCard>
            </div>
            <!-- <div class="column is-4">
              <VCard>
                <V-BillboardJS :options="item.optionsEdades" />
              </VCard>
            </div> -->
            <div class="column is-4">
              <VCard>
                <V-BillboardJS :options="item.optionsRangos" />
              </VCard>
            </div>
            <div
              class="column is-12"
              v-if="Object.keys(item.diciplines).length"
            >
              <p class="title is-6 text-center">Diciplines</p>
              <VCard>
                <div class="columns is-multiline">
                  <table class="table is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        <th scope="col">Dicipline</th>
                        <th scope="col">Members count</th>
                        <th scope="col">Male</th>
                        <th scope="col">Female</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(dicipline, e) in item.diciplines"
                        :key="`iy-${e}`"
                      >
                        <td>{{ dicipline.dicipline_name }}</td>
                        <td>{{ dicipline.numero_miembros }}</td>
                        <td>{{ dicipline.members.Male }}</td>
                        <td>{{ dicipline.members.Female }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <div
                    class="column is-4"
                    v-for="(dicipline, e) in item.diciplines"
                    :key="`iy-${e}`"
                  >
                    <VCard class="columns is-multiline mb-4">
                      <div class="column is-12 d-flex justify-content-between">
                        <p class="title is-6">
                          {{ dicipline.dicipline_name }} ({{ dicipline.numero_miembros }} members)
                        </p>
                      </div>
                      <div class="column is-6">
                        <V-BillboardJS :options="dicipline.optionsGenders" />
                      </div>
                      <div class="column is-6">
                        <V-BillboardJS :options="dicipline.optionsEdades" />
                      </div>
                    </VCard>
                  </div> -->
                </div>
              </VCard>
            </div>
          </div>
        </VCard>
      </div>
    </div>
  </SidebarLayout>
</template>
