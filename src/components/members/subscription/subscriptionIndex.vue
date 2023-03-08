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
  //getMeberships,
  // solicitud,
  // inputsMembership,
  // getDiscounts,
  // getPresupuesto,
  // presupuesto,
  // suscripcion,
  // createSuscripcion,
  holdSuscripcion,
  cancelSuscripcion,
  getSuscripcion,
} from '/@src/models/Subscriptions'

import { moneda } from '/@src/models/Mixin'
import moment from 'moment'

const props = defineProps({
  suscripcion: {
    type: Object,
    default: null,
  },
})

import { useRoute } from 'vue-router'
const route = useRoute()

const suscripcionD = ref(null)
const isLoaderActive = ref(false)
const modalShowHold = ref(false)

const onGetSuscripcion = () => {
  if (route.query.id) {
    getSuscripcion(route.query.id).then((response) => {
      suscripcionD.value = response.data.suscripcion
    })
  }
}

const suscripcionComputed = computed(() => {
  if (props.suscripcion) {
    return props.suscripcion
  } else {
    return suscripcionD.value
  }
})

onMounted(() => {
  onGetSuscripcion()
})

const proccessCheckout = () => {
  onGetSuscripcion()
}

const onCancel = () => {
  isLoaderActive.value = true

  cancelSuscripcion(suscripcionComputed.value.id, {})
    .then((response) => {
      isLoaderActive.value = false
      window.location.reload()
    })
    .catch((error) => {
      isLoaderActive.value = false
    })
}

const hold_date_start = ref(null)
const hold_date_end = ref(null)

const onHold = () => {
  // modalShowHold.value = true
  holdSuscripcion(suscripcionComputed.value.id, {
    hold_date_start: hold_date_start.value,
    hold_date_end: hold_date_end.value,
  })
    .then((response) => {
      modalShowHold.value = false
    })
    .catch((error) => {
      modalShowHold.value = false
    })
}
</script>
<template>
  <div v-if="suscripcionComputed">
    <VCard
      class="mb-5"
      v-if="suscripcionComputed"
      :style="{ background: suscripcionComputed.estado.color }"
    >
      <div class="d-flex justify-content-between">
        <span>
          <p class="title is-5 mb-0">
            ESTADO : {{ suscripcionComputed.estado.estado_pago }}
          </p>
          <p>
            <small
              >Membership:
              <small>
                Current billing location:
                <b>{{
                  suscripcionComputed.memberships_members.location.name
                }}</b></small
              ></small
            >
          </p>
          <p class="title is-4 mb-0">
            {{ suscripcionComputed.membership.name }}
          </p>
          <p>{{ suscripcionComputed.recurrence.recurrencia.descriptions }}</p>
        </span>
        <span class="text-right">
          <p>
            <small
              ><b>Payment Method:</b>
              {{
                suscripcionComputed.memberships_members.paymenttype.name
              }}</small
            >
          </p>
          <p>
            <small>{{
              suscripcionComputed.recurrence.is_recurrence
                ? 'Recurrence'
                : 'no recurrence'
            }}</small>
          </p>
          <p class="title is-4 mb-0">
            {{ moneda(suscripcionComputed.presupuesto.recurrente) }}<br />
          </p>
          <p v-if="suscripcionComputed.discount" class="title is-6">
            <small>{{ suscripcionComputed.discount.name }}</small> :
            {{ moneda(suscripcionComputed.presupuesto.total) }}<br />
          </p>
        </span>
      </div>
      <div class="d-flex flex-row mt-4">
        <p class="mr-3">
          <b>Consultation date: </b>
          {{
            moment(
              suscripcionComputed.estado.fecha_validacion,
              'YYYY-MM-DD'
            ).format('MM-DD-YYYY')
          }}
        </p>
        <p class="mr-3">
          <b>Month: </b>
          {{ suscripcionComputed.estado.meses_pagados }}
        </p>
        <p v-if="suscripcionComputed.schedules_start" class="mr-3">
          <b>Start: </b>
          {{
            moment(suscripcionComputed.schedules_start, 'YYYY-MM-DD').format(
              'MM-DD-YYYY'
            )
          }}
        </p>
        <p class="mr-3">
          <b>Expiration date: </b>
          {{
            moment(
              suscripcionComputed.estado.fecha_vencimiento,
              'YYYY-MM-DD'
            ).format('MM-DD-YYYY')
          }}
        </p>
        <p
          v-if="suscripcionComputed.memberships_members.payments.length"
          class="mr-3"
        >
          <b>Last payment attempt: </b>
          {{
            moment(
              suscripcionComputed.memberships_members.payments[0].created_at
            ).format('MM-DD-YYYY H:m:s')
          }}
        </p>
        <p
          v-if="suscripcionComputed.memberships_members.payments.length"
          class="mr-3"
        >
          <b>Status Last payment attempt: </b>
          {{ suscripcionComputed.memberships_members.payments[0].status }} /
          {{
            suscripcionComputed.memberships_members.payments[0]
              .status_description
          }}
        </p>

        <div
          class="d-flex"
          v-if="suscripcionComputed.estado.estado_pago == 'VENCIDO'"
        >
          <p class="mr-3">
            <b>Months late: </b> {{ suscripcionComputed.estado.meses_retraso }}
          </p>
          <p class="mr-3">
            <b>Days late: </b> {{ suscripcionComputed.estado.dias_retraso }}
          </p>
          <p class="mr-3">
            <b>Hours late: </b> {{ suscripcionComputed.estado.horas_retraso }}
          </p>
        </div>
      </div>
    </VCard>
    <VCard
      v-if="suscripcionComputed.estado.estado_pago != 'CANCELADO'"
      class="d-flex mb-4"
    >
      <div class="column is-4">
        <VLoader class="h-100" size="small" :active="isLoaderActive">
          <VCard
            color="danger"
            outlined
            @click="onCancel"
            class="
              mr-4
              btn-card
              text-center
              px-2
              h-100
              d-flex
              align-items-center
              justify-content-center
            "
            style="font-size: 12px"
          >
            <p><b>Cancel Suscription</b></p>
          </VCard>
        </VLoader>
      </div>
      <div class="column is-4">
        <VLoader size="small" class="h-100" :active="isLoaderActive">
          <VCard
            color="warning"
            :outlined="suscripcionComputed.hold_date_end != null ? false : true"
            @click="modalShowHold = true"
            class="
              mr-4
              btn-card
              text-center
              h-100
              px-2
              d-flex
              align-items-center
              justify-content-center
            "
            style="font-size: 12px"
          >
            <p><b>HOLD Membership</b></p>
            <p>
              <span v-if="suscripcionComputed.hold_date_end != null"
                >Active until: <br />
                {{
                  moment(suscripcionComputed.hold_date_start).format(
                    'MM/DD/YYYY'
                  )
                }}
                -
                {{
                  moment(suscripcionComputed.hold_date_end).format('MM/DD/YYYY')
                }}</span
              >
            </p>
          </VCard>
        </VLoader>
        <V-Modal
          :open="modalShowHold"
          actions="center"
          @close="modalShowHold = false"
        >
          <template #content>
            <!-- <p>
              Hold end date last day of the month prior to the end of the hold
            </p> -->
            <label for="hold_date_start"><p>Hold date start</p></label>
            <input
              type="date"
              v-model="hold_date_start"
              class="input mt-2 mb-4"
            />
            <label for="hold_date_end"><p>Hold date end</p></label>
            <input
              type="date"
              v-model="hold_date_end"
              class="input mt-2 mb-4"
            />
          </template>
          <template #action>
            <V-Button @click="onHold" color="primary" raised>Confirm</V-Button>
          </template>
        </V-Modal>
        <!-- <V-Modal
          :open="modalShowProrratedHold"
          actions="center"
          @close="modalShowProrratedHold = false"
        >
          <template #content>
            <p>Do you want to create an invoice with the prorated amount?</p>
            <inputsLayaut :inputs-step="isProrrateoHold" />

            <table class="table w-100" v-if="presupuestoProrrateo.total">
              <tr>
                <td>
                  Subtotal ({{ presupuestoProrrateo.dias_restantes }}
                  days)
                </td>
                <td>{{ moneda(presupuestoProrrateo.subtotal) }}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>{{ moneda(presupuestoProrrateo.tax) }}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{{ moneda(presupuestoProrrateo.total) }}</td>
              </tr>
            </table>
          </template>
          <template #action>
            <V-Button @click="onHold" color="primary" raised>Confirm</V-Button>
          </template>
        </V-Modal> -->
      </div>
    </VCard>
    <membershipsGrid
      v-if="
        suscripcionComputed &&
        suscripcionComputed.estado.estado_pago == 'CANCELADO'
      "
      v-model="suscripcionComputed.presupuesto"
      :suscripcion="suscripcionComputed"
    />

    <div v-if="suscripcionComputed.estado.estado_pago != 'CANCELADO'">
      <subscription-checkout
        v-if="
          suscripcionComputed &&
          suscripcionComputed.presupuesto &&
          suscripcionComputed.estado.estado_pago != 'PAGADO'
        "
        :total="suscripcionComputed.presupuesto.total"
        :user="suscripcionComputed.user"
        :suscripcion_id="suscripcionComputed.id"
        @proccessCheckout="proccessCheckout"
        @reload="onGetSuscripcion"
      />

      <VCard
        v-if="
          suscripcionComputed &&
          suscripcionComputed.presupuesto &&
          suscripcionComputed.estado.estado_pago != 'PAGADO'
        "
      >
        <Presupuesto
          :presupuesto="suscripcionComputed.presupuesto"
        ></Presupuesto>
      </VCard>
    </div>
    <subscription-payments-list
      v-if="
        suscripcionComputed &&
        suscripcionComputed.estado.estado_pago != 'CANCELADO'
      "
      :payments="suscripcionComputed.memberships_members.payments"
    />
  </div>
</template>
