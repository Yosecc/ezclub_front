<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
// import { members, subscriptionsCreateStripe } from '/@src/models/Members.ts'

import { suscripciones } from '/@src/models/Subscriptions.ts'
import * as barSimple from '/@src/models/v2/Reports.ts'

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
    getSuscripcion(
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
    // getSuscripcion('all', filters.value, 1, categoryB.value, false)
  }
)

const getSuscripcion = async (
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
      suscripciones.value = response.data.suscripciones

      // console.log(barSimple.options)
      // barSimple.options.axis.x.categories = suscripciones.value.fechas
      let data1 = ['data1'].concat(suscripciones.value.cantidad)
      let data2 = ['data2'].concat(suscripciones.value.montos)
      let x = ['x'].concat(suscripciones.value.fechas)

      barSimple.dataNew.data1 = data1
      barSimple.dataNew.data2 = data2
      barSimple.dataNew.x = x

      console.log(barSimple.dataNew)
      // barSimple.options.data.columns = barSimple.options.data.columns.concat(r)

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
  getSuscripcion(
    'all',
    filters.value,
    route.query.page,
    val,
    false,
    fecha_pago.value
  )
}

onMounted(() => {
  getSuscripcion(
    'all',
    filters.value,
    route.query.page,
    'All',
    fecha_pago.value
  )
})

const filtersSearch = () => {
  // console.log(filters.value.length)
  getSuscripcion(
    'all',
    filters.value,
    1,
    categoryB.value,
    false,
    fecha_pago.value
  )
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
  getSuscripcion(
    'all',
    filters.value,
    1,
    categoryB.value,
    false,
    statusSelect.value,
    fecha_pago.value
  )
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="mb-5 columns is-multiline">
        <div class="is-2 column">
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
        </div>

        <V-Field class="is-6 column">
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
        </V-Field>
        <!-- <div class="is-2 column">
          
        </div> -->
        <div class="column is-4">
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
        </div>

        <VCard v-if="barSimple.dataNew.data1.length" class="column is-12">
          <V-BillboardJS
            :options="barSimple.options"
            @ready="barSimple.onReady"
          />
        </VCard>
      </div>
    </div>
  </SidebarLayout>
</template>
