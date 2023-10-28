<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, reactive } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import moment from 'moment'

pageTitle.value = 'Charts'
useHead({
  title: 'Reports',
})

const route = useRoute()
const suscripciones = ref(null)
const payments = ref(null)

const getReport = async (params = {}) => {
  suscripciones.value = null
  payments.value = null
  await Api.get('v2/suscripcion/reports', { params: params })
    .then((response) => {
      suscripciones.value = response.data.suscripciones
      payments.value = response.data.payments
    })
    .catch((error) => {})
}

onMounted(() => {
  getReport()
})

const onSearch = (params: object) => {
  getReport(params)
}
</script>

<template>
  <SidebarLayout>
    <div class="columns is-multiline">
      <reportsChartsPayments
        :payments="payments"
        @search="onSearch"
        v-if="payments"
      />
      <!--  -->
      <reportsChartsSuscripcionesDetalle
        :suscripciones="suscripciones.activas.vencido"
        title="Subscriptions Due"
        v-if="suscripciones"
      />
      <!--  -->
      <reportsChartsSuscripciones
        :suscripciones="suscripciones"
        v-if="suscripciones"
      />
    </div>
  </SidebarLayout>
</template>
