<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  computed,
  reactive,
  defineProps,
  defineEmit,
} from 'vue'
import moment from 'moment'
import { moneda, monedaDecimal } from '/@src/models/Mixin'
import * as pieChart from '/@src/models/v2/reports/pieChart'
import * as barChart from '/@src/models/v2/reports/barChart'

const suscripciones = ref(null)

const props = defineProps({
  suscripciones: { type: Object, required: true, default: null },
  title: { type: String, default: '' },
})

const emit = defineEmit(['search'])

// const grupoSeleccionado = ref(null)
// const reload = ref(true)

// watch(grupoSeleccionado, () => {
//   reload.value = false
//   setTimeout(() => {
//     reload.value = true
//   }, 100)
// })

onMounted(() => {
  suscripciones.value = props.suscripciones
})

/**
 *
 */

const paymentType = computed(() => {
  if (suscripciones.value) {
    return suscripciones.value.paymentType
  }
  return null
})

const membresia = computed(() => {
  if (suscripciones.value) {
    return suscripciones.value.membresia
  }
  return null
})

const diciplinas = computed(() => {
  if (suscripciones.value) {
    return suscripciones.value.diciplinas
  }
  return null
})

const category = computed(() => {
  if (suscripciones.value) {
    return suscripciones.value.category
  }
  return null
})

/**
 *
 */
const paymentTypeGrafico = computed(() => {
  if (paymentType.value) {
    let arr = []
    for (var i in paymentType.value) {
      arr.push([i, paymentType.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Payment Type`
    chart.options.pie = pieConfig()
    return chart
  }
  return null
})

const membresiaGrafico = computed(() => {
  if (membresia.value) {
    let arr = []
    for (var i in membresia.value) {
      arr.push([i, membresia.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Membership`
    chart.options.pie = pieConfig()
    return chart
  }
  return null
})

const diciplinasGrafico = computed(() => {
  if (diciplinas.value) {
    let arr = []
    for (var i in diciplinas.value) {
      arr.push([i, diciplinas.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Diciplines`
    chart.options.pie = pieConfig()
    return chart
  }
  return null
})

const categoryGrafico = computed(() => {
  if (category.value) {
    let arr = []
    for (var i in category.value) {
      arr.push([i, category.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Category`
    chart.options.pie = pieConfig()
    return chart
  }
  return null
})

/**
 *
 */

// const isTable = ref(false)

// const onChangeDate = () => {
//   emit('search', {
//     fecha_inicio: payments.value.fecha_inicio,
//     fecha_fin: payments.value.fecha_fin,
//   })
// }

const pieConfig = (pre = '') => {
  return {
    label: {
      format: function (value, ratio, id) {
        return `${pre}${value}`
      },
    },
  }
}
</script>

<template>
  <div class="columns is-multiline column is-12">
    <!-- <p>{{ payments }}</p> -->
    <div class="column is-12">
      <VCard v-if="suscripciones">
        <div class="d-flex justify-content-between">
          <p class="title is-5">{{ props.title }}</p>
          <p class="title is-5">{{ suscripciones.count }}</p>
        </div>
        <div class="column is-12 columns is-multiline">
          <div class="column is-6">
            <VCard v-if="paymentType && paymentTypeGrafico">
              <V-BillboardJS :options="paymentTypeGrafico.options" />
            </VCard>
          </div>
          <div class="column is-6">
            <VCard v-if="membresia && membresiaGrafico">
              <V-BillboardJS :options="membresiaGrafico.options" />
            </VCard>
          </div>
          <div class="column is-6">
            <VCard v-if="diciplinas && diciplinasGrafico">
              <V-BillboardJS :options="diciplinasGrafico.options" />
            </VCard>
          </div>
          <div class="column is-6">
            <VCard v-if="category && categoryGrafico">
              <V-BillboardJS :options="categoryGrafico.options" />
            </VCard>
          </div>
        </div>
      </VCard>
    </div>
  </div>
</template>
