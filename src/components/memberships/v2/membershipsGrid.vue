<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { Api, API_WEB_URL } from '/@src/services'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'
import { paymentSuscripcion } from '/@src/models/Subscriptions.ts'

import {
  getMeberships,
  solicitud,
  inputsMembership,
  getDiscounts,
  getPresupuesto,
  presupuesto,
  remplazarSuscripcion,
  // suscripcion,
  // createSuscripcion,
  //   getSuscripcion,
} from '/@src/models/Subscriptions'
// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'
const route = useRoute()
const memberships = ref([])
const recurring = ref(true)

const props = defineProps({
  suscripcion: {
    type: Object,
    default: {},
  },
  is_config: {
    type: Boolean,
    default: true,
  },
  is_recurrence: {
    type: Boolean,
    default: true,
  },
  restar: {
    type: Number,
    default: {
      text: '',
      amount: '',
    },
  },
  amounts_not_ids: {
    type: Array,
    default: [],
  },
})
const isLoaderActive = ref(false)
const aprobado = ref(false)
const emit = defineEmit([
  'update:modelValue',
  'reload',
  'onReady',
  'changeMembership',
])

onMounted(() => {
  isOnActionAcepyandcontinue.value = true
  getMeberships().then((response) => {
    memberships.value = response.data
  })
  getDiscounts(1, 'membership').then((response) => {
    setInputValuesData(inputsMembership, 'discount', response.data.discounts)
  })
})

const precios = computed(() => {
  const data = memberships.value.find((e) => e.id == solicitud.memberships_id)
  return data?.amounts.filter(
    (e) => e.is_recurrence == recurring.value && e.recurrencia != null
  )
})

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
  isLoaderActive.value = true
  isOnActionAcepyandcontinue.value = true
  getPresupuesto(datosSolicitud.value)
    .then((response) => {
      presupuesto.value = response.data
      emit('update:modelValue', presupuesto.value)
      isOnActionAcepyandcontinue.value = true
      setTimeout(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight || document.documentElement.scrollHeight
        )
        isLoaderActive.value = false
      }, 300)
    })
    .catch((error) => {
      const data = error.response.data
      isLoaderActive.value = false
      for (var i in data) {
        if (typeof data[i] == 'object') {
          if (typeof data[i] == 'object') {
            for (var o in data[i]) {
              notyf.error(data[i][o])
            }
          }
        }
      }
    })
}
const isOnActionAcepyandcontinue = ref(true)
const aprobarPresupuesto = () => {
  aprobado.value = true
  let data = datosSolicitud.value
  // data.suscripcion_id = props.suscripcion.id
  // data.email = props.suscripcion.user.email

  emit('onReady', data)
  isOnActionAcepyandcontinue.value = false
}

const definePrecio = (item: any) => {
  if (props.amounts_not_ids.includes(item.id)) {
    notyf.error('Select a membership with a higher price than the current one')
    return
  }
  solicitud.recurrences_id = item.id
}

watch(
  () => solicitud.memberships_id,
  () => {
    presupuesto.value = null
    emit('changeMembership')
  }
)
</script>

<template>
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
            :color="solicitud.memberships_id == item.id ? 'primary' : undefined"
            class="h-100"
          >
            <div>
              <h1 class="title is-4">{{ item.name }}</h1>
            </div>
          </VCard>
        </div>
      </div>
    </VLoader>
  </VCard>
  <VCard class="mb-4">
    <div>
      <VField v-if="props.is_recurrence">
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
        @click="definePrecio(item)"
      >
        <VCard
          :color="solicitud.recurrences_id == item.id ? 'primary' : undefined"
          class="mb-3 py-4"
        >
          <p>{{ item.recurrencia.descriptions }}</p>
          <p class="title is-5 text-left mt-2">
            {{ moneda(item.amount) }}
          </p>
        </VCard>
      </div>
    </div>
  </VCard>
  <VCard class="" v-if="props.is_config">
    <inputsLayaut :inputs-step="inputsMembership" />
  </VCard>
  <div class="d-flex justify-content-end mb-4">
    <VLoader size="large" :active="isLoaderActive">
      <VButton
        @click="initSuscripcion"
        :color="!presupuesto ? 'primary' : undefined"
        class="d-flex justify-content-center mt-6 py-5 w-100"
        style="
          text-align: center;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 900;
        "
      >
        <span v-if="!presupuesto">start subscription</span>
        <span v-else> restart</span>
      </VButton>
    </VLoader>
  </div>

  <VCard v-if="presupuesto" class="mb-4">
    <Presupuesto
      :presupuesto="presupuesto"
      :restar="props.restar"
    ></Presupuesto>
  </VCard>
  <VButton
    @click="aprobarPresupuesto"
    color="primary"
    class="d-flex justify-content-center py-5 px-6 ml-auto"
    style="
      text-align: center;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 900;
    "
    v-if="presupuesto && isOnActionAcepyandcontinue"
    >Accept and continue
  </VButton>
</template>

<style lang="scss"></style>
