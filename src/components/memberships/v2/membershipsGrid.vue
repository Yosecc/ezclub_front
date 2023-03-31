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
})
const isLoaderActive = ref(false)
const aprobado = ref(false)
const emit = defineEmit(['update:modelValue', 'reload'])

onMounted(() => {
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
  getPresupuesto(datosSolicitud.value)
    .then((response) => {
      presupuesto.value = response.data
      emit('update:modelValue', presupuesto.value)
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

const aprobarPresupuesto = () => {
  aprobado.value = true
  let data = datosSolicitud.value
  data.suscripcion_id = props.suscripcion.id
  data.email = props.suscripcion.user.email

  remplazarSuscripcion(data)
    .then((response) => {
      emit('reload')
      // window.location.reload()
    })
    .catch((error) => {})
  //   setTimeout(() => {
  //     window.scrollTo(0, window.scrollY + 500)
  //   }, 300)
}
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
  <VCard class="">
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
    <Presupuesto :presupuesto="presupuesto"></Presupuesto>
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
    v-if="presupuesto"
    >Accept and continue
  </VButton>
</template>

<style lang="scss"></style>
