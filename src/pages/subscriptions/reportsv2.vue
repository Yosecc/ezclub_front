<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, reactive } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import type { Chart } from 'billboard.js'

// import { suscripciones } from '/@src/models/Subscriptions.ts'
import { moneda } from '/@src/models/Mixin'

// import * as suscripcionPayment from '/@src/models/v2/reports/suscripcionPayment'
// import * as suscripcionXmembresia from '/@src/models/v2/reports/suscripcionXmembresia'
// import * as subscriptionsStripe from '/@src/models/v2/reports/subscriptionsStripe'

pageTitle.value = 'Suscriptions'

useHead({
  title: 'List Suscriptions',
})

const route = useRoute()

// const filters = ref('')
// const filterDate = ref('all')

// const paginationData = ref([])

const isLoading = ref(true)
// const defalA = ref('all')

watch(
  () => route.query.page,
  () => {
    getReport()
  }
)

const suscripciones = ref(null)

const getReport = async () => {
  isLoading.value = true
  await Api.get('v2/suscripcion/reports', { params: {} })
    .then((response) => {
      console.log(response.data)
      suscripciones.value = response.data.suscripciones
    })
    .catch((error) => {
      isLoading.value = false
      console.log(error)
    })
}

const isLoadingSuscripcionesData = ref(true)
const suscripcionesData = ref([])

const getSuscripciones = async (data: object) => {
  console.log(typeof data, data)
  isLoadingSuscripcionesData.value = true
  await Api.post('v2/suscripcion/getIn', { data })
    .then((response) => {
      console.log('ressponse', response.data)
      suscripcionesData.value = response.data.suscripciones
      isLoadingSuscripcionesData.value = false
    })
    .catch((error) => {
      isLoadingSuscripcionesData.value = false
      console.log(error)
    })
}

onMounted(() => {
  getReport()
})

// const filtersSearch = () => {
//   // console.log(filters.value.length)
//   getReport('all', filters.value, 1, categoryB.value, false, fecha_pago.value)
// }

const grupoData = ref(null)
const modalStatus = ref(false)

const onGrupo = (grup) => {
  grupoData.value = grup
  console.log(grupoData.value)
}

const dataListModal = reactive({
  data: null,
  type: '',
})

const onButton = ({ itemKey, i }) => {
  console.log('onButton', { itemKey, i })
  suscripcionesData.value = []
  let isdata = false
  switch (itemKey) {
    case 'data':
      isdata = true
      getSuscripciones(i)
      break
    default:
      // if (i.data) {
      //   isdata = true
      // getSuscripciones(i.data)
      // } else {
      dataListModal.data = i
      // }
      break
  }

  modalStatus.value = true

  dataListModal.type = isdata ? 'data' : itemKey
}
</script>

<template>
  <SidebarLayout>
    <div class="page-content-inner">
      <div class="mb-5 columns is-multiline" v-if="suscripciones">
        <VCard class="d-flex justify-content-between column is-12 mb-4">
          <p class="title is-5 m-0">Subcriptions</p>
          <p class="title is-5 m-0">{{ suscripciones.count }}</p>
        </VCard>

        <div class="column is-4">
          <VCard class="d-flex justify-content-between flex-column">
            <div
              v-for="(grupo, nombreGrupo) in suscripciones"
              :key="`grupo${nombreGrupo}`"
              @click="onGrupo(grupo)"
            >
              <VCard v-if="nombreGrupo != 'count'" class="mb-4 btn-card">
                <p
                  class="title is-5 m-0 d-flex justify-content-between w-100"
                  style="text-transform: uppercase"
                >
                  {{ nombreGrupo }} <span>{{ grupo.count }}</span>
                </p>
              </VCard>
            </div>
            <!-- <p class="title is-5 m-0">{{suscripciones.count}}</p> -->
          </VCard>
        </div>
        <div class="column is-8 columns is-multiline">
          <!-- <div></div> -->
          <!-- <p>{{ grupoData }}</p> -->
          <listButtoms :data="grupoData" @onAction="onButton" />
        </div>
      </div>
    </div>
    <VModal
      :open="modalStatus"
      actions="center"
      size="big"
      @close="modalStatus = false"
    >
      <template #content>
        <div v-if="dataListModal.type != 'data'">
          <!-- <p>{{ dataListModal.data }}</p> -->
          <listButtoms :data="dataListModal.data" @onAction="onButton" />
        </div>
        <div v-if="dataListModal.type == 'data'">
          <VLoader
            style="min-height: 300px"
            size="large"
            :active="isLoadingSuscripcionesData"
          >
            <!-- content ... --->
            <subscription-list
              v-if="suscripcionesData.length"
              :colgrid="'is-4'"
              :suscripciones="suscripcionesData"
              :filter-local="true"
            />
          </VLoader>
        </div>
      </template>
      <template #action>
        <!-- <VButton color="primary" raised>Confirm</VButton> -->
      </template>
    </VModal>
  </SidebarLayout>
</template>
