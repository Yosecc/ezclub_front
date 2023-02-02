<script setup lang="ts">
import {
  computed,
  ref,
  reactive,
  defineProps,
  defineEmit,
  watch,
  onMounted,
} from 'vue'
import {
  // getMeberships,
  // solicitud,
  // inputsMembership,
  // getDiscounts,
  // getPresupuesto,
  // presupuesto,
  // suscripcion,
  // createSuscripcion,
  getSuscripcion,
} from '/@src/models/Subscriptions'

import { moneda } from '/@src/models/Mixin'

import { useRoute } from 'vue-router'
const route = useRoute()

const suscripcion = ref(null)

onMounted(() => {
  getSuscripcion(route.query.id).then((response) => {
    suscripcion.value = response.data.suscripcion
  })
})
</script>
<template>
  <VCard class="d-flex justify-content-between mb-5" v-if="suscripcion">
    <span>
      <p class="title is-5 mb-0">ESTADO : {{ suscripcion.estado_pago }}</p>
      <p>
        <small
          >Membership:
          <small>
            Current billing location:
            <b>{{ suscripcion.memberships_members.location.name }}</b></small
          ></small
        >
      </p>
      <p class="title is-4 mb-0">
        {{ suscripcion.membership.name }}
      </p>
      <p>{{ suscripcion.recurrence.recurrencia.descriptions }}</p>
    </span>
    <span class="text-right">
      <p>
        <small
          ><b>Payment Method:</b>
          {{ suscripcion.memberships_members.paymenttype.name }}</small
        >
      </p>
      <p>
        <small>{{
          suscripcion.recurrence.is_recurrence ? 'Recurrence' : 'no recurrence'
        }}</small>
      </p>
      <p class="title is-4">
        {{ moneda(suscripcion.presupuesto.recurrente) }}<br />
      </p>
    </span>
  </VCard>
  <subscription-checkout
    v-if="suscripcion && suscripcion.presupuesto"
    :total="suscripcion.presupuesto.total"
    :member="suscripcion.member"
  />
  <VCard v-if="suscripcion && suscripcion.presupuesto">
    <Presupuesto :presupuesto="suscripcion.presupuesto"></Presupuesto>
  </VCard>
</template>
