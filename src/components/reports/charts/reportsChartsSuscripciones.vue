<script setup lang="ts">
import { onMounted, watch, ref, computed, reactive, defineProps } from 'vue'
import moment from 'moment'
import { moneda, monedaDecimal } from '/@src/models/Mixin'
import * as pieChart from '/@src/models/v2/reports/pieChart'
import * as barChart from '/@src/models/v2/reports/barChart'

const suscripciones = ref(null)

const props = defineProps({
  suscripciones: { type: Object, required: true, default: null },
})

const grupoSeleccionado = ref(null)
const reload = ref(true)

watch(grupoSeleccionado, () => {
  reload.value = false
  setTimeout(() => {
    reload.value = true
  }, 100)
})

onMounted(() => {
  suscripciones.value = props.suscripciones
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

const zip_code = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.zip_code
  }
  return null
})

const diciplinas = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.diciplinas
  }
  return null
})

const category = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.category
  }
  return null
})

const minor = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.minor
  }
  return null
})

const adult = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.adult
  }
  return null
})

const estado = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.estado
  }
  return null
})

const paymentType = computed(() => {
  if (grupoSeleccionado.value) {
    return grupoSeleccionado.value.paymentType
  }
  return null
})

/**
 *
 */

const membresiaGrafico = computed(() => {
  if (membresias.value) {
    let arr = []
    for (var i in membresias.value) {
      arr.push([i, membresias.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = 'Memberships'
    chart.options.data.onclick = openSuscripciones
    chart.options.pie = pieConfig()

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
    chart.options.pie = pieConfig()
    chart.options.data.onclick = openSuscripciones
    return chart
  }
  return null
})

const zipCodeGrafico = computed(() => {
  if (zip_code.value) {
    let arr = []
    for (var i in zip_code.value) {
      arr.push([i, zip_code.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(barChart))
    chart.options.data.columns = arr
    chart.options.title.text = 'Zip Code'
    chart.options.data.onclick = openSuscripciones
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
    const chart = JSON.parse(JSON.stringify(barChart))
    chart.options.data.columns = arr
    chart.options.title.text = 'Dicipline'
    chart.options.data.onclick = openSuscripciones
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
    chart.options.title.text = 'Category'
    chart.options.pie = pieConfig()
    chart.options.data.onclick = openSuscripciones
    return chart
  }
  return null
})

const minorGrafico = computed(() => {
  if (minor.value) {
    let arr = []
    for (var i in minor.value.genero) {
      arr.push([i, minor.value.genero[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Minor (${minor.value.count})`
    chart.options.pie = pieConfig()
    chart.options.data.onclick = openSuscripciones
    return chart
  }
  return null
})

const adultGrafico = computed(() => {
  if (adult.value) {
    let arr = []
    for (var i in adult.value.genero) {
      arr.push([i, adult.value.genero[i].count])
    }
    const chart = JSON.parse(JSON.stringify(pieChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Adult (${adult.value.count})`
    chart.options.pie = pieConfig()
    chart.options.data.onclick = openSuscripciones
    return chart
  }
  return null
})

const estadoGrafico = computed(() => {
  if (estado.value) {
    let arr = []
    for (var i in estado.value) {
      arr.push([i, estado.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(barChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Status`
    chart.options.data.onclick = openSuscripciones
    // chart.options.pie = pieConfig()
    return chart
  }
  return null
})

const paymentTypeGrafico = computed(() => {
  if (paymentType.value) {
    let arr = []
    for (var i in paymentType.value) {
      arr.push([i, paymentType.value[i].count])
    }
    const chart = JSON.parse(JSON.stringify(barChart))
    chart.options.data.columns = arr
    chart.options.title.text = `Payment Type`
    chart.options.data.keys = {
      x: 'year',
      value: ['operation1', 'operation2'],
    }
    chart.options.data.onclick = function (d, i) {
      console.log(this)
    }
    // chart.options.pie = pieConfig()
    return chart
  }
  return null
})

/**
 *
 */

const pieConfig = () => {
  return {
    label: {
      format: function (value, ratio, id) {
        return value
      },
    },
  }
}

const openSuscripciones = (d, i) => {
  console.log('onclick', d)
  console.log('grupoSeleccionado.value', grupoSeleccionado.value)
}

const centeredActionsOpen = ref(false)
const grupoSelect: any = ref(null)
const title = ref('')
const isDataValue = ref(false)

const onGroupSelect = (grupo: any, key: string, isData: boolean = false) => {
  title.value = key
  isDataValue.value = isData
  centeredActionsOpen.value = true
  grupoSelect.value = grupo
}
const closemodal = (value: boolean) => {
  centeredActionsOpen.value = value
}
</script>

<template>
  <div class="columns is-multiline column is-12">
    <div class="column is-12" v-if="suscripciones">
      <VCard class="d-flex justify-content-between">
        <p class="title is-5 m-0">Subscriptions</p>
        <p class="title is-5 m-0">{{ suscripciones.count }}</p>
      </VCard>
    </div>

    <div class="column is-12 columns is-multiline mb-0" v-if="suscripciones">
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

    <div
      class="column is-12 columns is-multiline"
      v-if="reload && suscripciones"
    >
      <div class="column is-6">
        <VCard v-if="estado && estadoGrafico">
          <V-BillboardJS :options="estadoGrafico.options" />
          <VButton @click="onGroupSelect(estado, 'Status')" color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-6">
        <VCard v-if="paymentType && paymentTypeGrafico">
          <V-BillboardJS :options="paymentTypeGrafico.options" />
          <VButton
            @click="onGroupSelect(paymentType, 'Payment Type')"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>

      <div class="column is-6">
        <VCard v-if="membresias && membresiaGrafico">
          <V-BillboardJS :options="membresiaGrafico.options" />
          <VButton
            @click="onGroupSelect(membresias, 'Membership')"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-6">
        <VCard v-if="genero && generoGrafico">
          <V-BillboardJS :options="generoGrafico.options" />
          <VButton @click="onGroupSelect(genero, 'Gender')" color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-4">
        <VCard v-if="category && categoryGrafico">
          <V-BillboardJS :options="categoryGrafico.options" />
          <VButton
            @click="onGroupSelect(category, 'Category')"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-4">
        <VCard v-if="adult && adultGrafico">
          <V-BillboardJS :options="adultGrafico.options" />
          <VButton
            @click="onGroupSelect(adult, 'Adult', true)"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-4">
        <VCard v-if="minor && minorGrafico">
          <V-BillboardJS :options="minorGrafico.options" />
          <VButton
            @click="onGroupSelect(minor, 'Minor', true)"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-12">
        <VCard v-if="diciplinas && diciplinasGrafico">
          <V-BillboardJS :options="diciplinasGrafico.options" />
          <VButton
            @click="onGroupSelect(diciplinas, 'Diciplines')"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
      <div class="column is-12">
        <VCard v-if="zip_code && zipCodeGrafico">
          <V-BillboardJS :options="zipCodeGrafico.options" />
          <VButton
            @click="onGroupSelect(zip_code, 'Zip Code')"
            color="undefined"
            ><i class="fa fa-eye"></i> View Subscription</VButton
          >
        </VCard>
      </div>
    </div>
    <ModalesChartSuscripciones
      :gruposelect="grupoSelect"
      :statusmodalgrupo="centeredActionsOpen"
      :title="title"
      :isdata="isDataValue"
      @closemodal="closemodal"
    />
  </div>
</template>
