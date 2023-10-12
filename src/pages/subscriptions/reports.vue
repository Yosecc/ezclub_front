<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, reactive } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import type { Chart } from 'billboard.js'
// import { members, subscriptionsCreateStripe } from '/@src/models/Members.ts'

// import { suscripciones } from '/@src/models/Subscriptions.ts'
import { moneda } from '/@src/models/Mixin'

// import * as suscripcionPayment from '/@src/models/v2/reports/suscripcionPayment'
import * as suscripcionXmembresia from '/@src/models/v2/reports/suscripcionXmembresia'
import * as generoChart from '/@src/models/v2/reports/genero'
import * as pieChart from '/@src/models/v2/reports/pieChart'
// import * as subscriptionsStripe from '/@src/models/v2/reports/subscriptionsStripe'

pageTitle.value = 'Suscriptions'
useHead({
  title: 'Reports',
})

const route = useRoute()
const suscripciones = ref(null)

const getReport = async () => {
  await Api.get('v2/suscripcion/reports', { params: {} })
    .then((response) => {
      suscripciones.value = response.data.suscripciones
    })
    .catch((error) => {})
}

const grupoSeleccionado = ref(null)
const reload = ref(true)
watch(grupoSeleccionado, () => {
  reload.value = false
  setTimeout(() => {
    reload.value = true
  }, 100)
})

onMounted(() => {
  getReport()
})

const grupoSuscripciones = computed(() => {
  return [
    {
      name: 'Active',
      count: suscripciones.value.activas.count,
      key: 'activas',
    },
    {
      name: 'Inactive',
      count: suscripciones.value.inactivas.count,
      key: 'inactivas',
    },
  ]
})

const selectGrupo = (grupo) => {
  grupoSeleccionado.value = suscripciones.value[grupo.key]
}

const membresias = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.membresia
  }
  return null
})

const genero = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.genero
  }
  return null
})

const membresiaGrafico = computed(() => {
  if (membresias.value) {
    let arr = []
    for (var i in membresias.value) {
      arr.push([i, membresias.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = 'Memberships'
    chart.options.data.onclick = openSuscripcioness
    return chart
  }
  return null
})

const generoGrafico = computed(() => {
  if (genero.value) {
    let arr = []
    for (var i in genero.value) {
      arr.push([i, genero.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = 'Gender'
    return chart
  }
  return null
})

const openSuscripciones = (d, i) => {
  console.log('onclick', d, i)
}
</script>

<template>
  <SidebarLayout>
    <div class="columns is-multiline" v-if="suscripciones">
      <div class="column is-12">
        <VCard class="d-flex justify-content-between">
          <p class="title is-5 m-0">Subscriptions</p>
          <p class="title is-5 m-0">{{ suscripciones.count }}</p>
        </VCard>
      </div>

      <div class="column is-12 columns is-multiline mb-0">
        <div
          v-for="(i, key) in grupoSuscripciones"
          :key="`grupo${key}`"
          class="column is-4 mb-0"
        >
          <VCard
            class="mb-4 d-flex justify-content-between btn-card"
            @click="selectGrupo(i)"
          >
            <p class="title is-5 m-0">{{ i.name }}</p>
            <p class="title is-5 m-0">{{ i.count }}</p>
          </VCard>
        </div>
      </div>
      <div class="column is-12 columns is-multiline" v-if="reload">
        <div class="column is-6">
          <VCard v-if="membresias && membresiaGrafico">
            <V-BillboardJS :options="membresiaGrafico.options" />
          </VCard>
        </div>
        <div class="column is-6">
          <VCard v-if="genero && generoGrafico">
            <V-BillboardJS :options="generoGrafico.options" />
          </VCard>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
