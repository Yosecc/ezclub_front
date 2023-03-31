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
  // holdSuscripcion,
  // cancelSuscripcion,
  getSuscripcion,
  getSuscripcionCode,
} from '/@src/models/Subscriptions'

import { moneda } from '/@src/models/Mixin'
import moment from 'moment'

const props = defineProps({
  suscripcion: {
    type: Object,
    default: null,
  },
  member_id: {
    type: Number,
    default: null,
  },
  code: {
    type: String,
    default: null,
  },
})

import { useRoute } from 'vue-router'
const route = useRoute()

const suscripcionD = ref(null)
const isLoaderActive = ref(false)

const onGetSuscripcion = () => {
  let id = null
  if (route.query.id) {
    id = route.query.id
  }
  if (props.member_id) {
    id = props.member_id
  }
  // console.log(id, props.code)
  if (id == null && props.code) {
    getSuscripcionCode(props.code).then((response) => {
      suscripcionD.value = response.data.suscripcion
    })
    return
  }

  getSuscripcion(id).then((response) => {
    suscripcionD.value = response.data.suscripcion
  })
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

watch(
  () => props.member_id,
  () => {
    onGetSuscripcion()
  }
)

const proccessCheckout = () => {
  onGetSuscripcion()
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
          <span v-if="suscripcionComputed.presupuesto">
            <p v-if="!suscripcionComputed.discount" class="title is-4 mb-0">
              {{ moneda(suscripcionComputed.presupuesto.recurrente) }}<br />
            </p>
            <p v-else class="title is-4 mb-0">
              {{ moneda(suscripcionComputed.presupuesto.total) }}<br />
            </p>
            <p v-if="suscripcionComputed.discount" class="title is-6">
              <small>{{ suscripcionComputed.discount.name }}</small> :
              {{ moneda(suscripcionComputed.presupuesto.total) }}<br />
            </p>
          </span>
          <span v-else>
            <p>no tiene presupuesto</p>
          </span>
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
          <b>Next payment date: </b>
          {{
            moment(
              suscripcionComputed.estado.fecha_vencimiento,
              'YYYY-MM-DD'
            ).format('MM-DD-YYYY')
          }}
        </p>
        <p v-if="suscripcionComputed.estado.fecha_suspencion" class="mr-3">
          <b>Cancellation Date: </b>
          {{
            moment(
              suscripcionComputed.estado.fecha_suspencion,
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
            ).format('MM-DD-YYYY')
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

    <div
      class="columns"
      v-if="
        !['PROX. CANCELADO', 'CANCELADO'].includes(
          suscripcionComputed.estado.estado_pago
        )
      "
    >
      <div class="column is-8 pt-0">
        <subscription-edit
          :suscripcion="suscripcionComputed"
          @reload="onGetSuscripcion"
        />
      </div>
      <div class="column is-4">
        <VCard
          v-if="suscripcionComputed.estado.estado_pago != 'CANCELADO'"
          class="columns is-multiline p-1"
        >
          <div class="column is-12">
            <subscription-action-cancel
              :suscripcion="suscripcionComputed"
              @reload="onGetSuscripcion"
            />
          </div>
          <div class="column is-12">
            <subscription-action-multigym
              :suscripcion="suscripcionComputed"
              @reload="onGetSuscripcion"
            />
          </div>
          <div class="column is-12">
            <subscription-action-hold
              :suscripcion="suscripcionComputed"
              @reload="onGetSuscripcion"
            />
          </div>

          <!-- <div class="column is-12">
            <subscription-action-send-email
              :suscripcion="suscripcionComputed"
              @reload="onGetSuscripcion"
            />
          </div> -->
          <div class="column is-12">
            <subscription-action-upgrade
              :suscripcion="suscripcionComputed"
              @reload="onGetSuscripcion"
            />
          </div>
        </VCard>
      </div>
    </div>

    <membershipsGrid
      v-if="
        suscripcionComputed &&
        ['CANCELADO', 'PROX. CANCELADO'].includes(
          suscripcionComputed.estado.estado_pago
        )
      "
      v-model="suscripcionComputed.presupuesto"
      :suscripcion="suscripcionComputed"
      @reload="onGetSuscripcion()"
    />

    <div
      v-if="
        !['CANCELADO', 'PROX. CANCELADO'].includes(
          suscripcionComputed.estado.estado_pago
        )
      "
    >
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
