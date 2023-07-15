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
  solicitud,
  solicitudDataInicial,
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
  estadosIntentos,
  estados,
} from '/@src/models/Subscriptions'
import { API_WEB_URL } from '/@src/services'
import { useRoute } from 'vue-router'
import { moneda } from '/@src/models/Mixin'
import {
  // membersSelected,
  // arregloTrainers,
  initials,
} from '/@src/models/Members'
import moment from 'moment'

const props = defineProps({
  suscripcion: {
    type: Object,
    default: null,
  },
  suscripcion_id: {
    type: Number,
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

const route = useRoute()

const suscripcionD = ref(null)
const isLoaderActive = ref(false)
const isLoaderActiveG = ref(false)

const onGetSuscripcion = () => {
  Object.assign(solicitud, solicitudDataInicial)
  isLoaderActiveG.value = true

  let id = null
  if (route.query.id) {
    id = route.query.id
  }
  if (props.member_id) {
    id = props.member_id
  }
  if (props.suscripcion_id) {
    getSuscripcion(props.suscripcion_id, false).then((response) => {
      suscripcionD.value = response.data.suscripcion
      isLoaderActiveG.value = false
    })
    return
  }
  // console.log(id, props.code)
  if (id == null && props.code) {
    getSuscripcionCode(props.code).then((response) => {
      suscripcionD.value = response.data.suscripcion
      isLoaderActiveG.value = false
    })
    return
  }

  getSuscripcion(id, true).then((response) => {
    suscripcionD.value = response.data.suscripcion
    isLoaderActiveG.value = false
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
  <VLoader size="small" :active="isLoaderActiveG">
    <div class="w-100" style="min-height: 200px">
      <div class="h-100 w-100" v-if="suscripcionComputed">
        <VCard class="mb-4 d-flex align-items-center">
          <div v-if="suscripcionComputed.member">
            <V-Avatar
              :picture="`${API_WEB_URL}storage/${suscripcionComputed.member.photo}`"
              color="primary"
              :initials="
                initials(
                  suscripcionComputed.member.name,
                  suscripcionComputed.member.last_name
                )
              "
              size="medium"
              class="mr-4 mb-4"
            />
          </div>
          <div>
            <div v-if="!suscripcionComputed.member" class="">
              <p style="font-size: 12px">
                Username: {{ suscripcionComputed.user.name }}
              </p>
              <p style="font-size: 12px">
                Email: {{ suscripcionComputed.user.email }}
              </p>
            </div>
            <div v-else class="">
              <p style="font-size: 12px">
                {{ suscripcionComputed.member.name }}
                {{ suscripcionComputed.member.last_name }}
              </p>
              <p style="font-size: 12px">
                {{ suscripcionComputed.member.email }}
              </p>
            </div>
          </div>
        </VCard>
        <VCard
          class="mb-5"
          :style="{ background: suscripcionComputed.estado.color }"
        >
          <div class="d-flex justify-content-between">
            <span>
              <p
                class="title is-5 mb-0"
                v-if="suscripcionComputed.estado.estado_pago"
              >
                Status :
                {{
                  estados.find(
                    (e) => e.value == suscripcionComputed.estado.estado_pago
                  ).name
                }}
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
              <p v-if="suscripcionComputed.recurrence">
                {{ suscripcionComputed.recurrence.recurrencia.descriptions }}
              </p>
            </span>
            <span class="text-right">
              <p>
                <small
                  ><b>Payment Method:</b>
                  {{ suscripcionComputed.payment_type.name }}</small
                >
              </p>
              <p>
                <small>{{
                  suscripcionComputed.is_recurrence
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
              <b>Created date: </b>
              {{
                moment(
                  suscripcionComputed.estado.fecha_creacion,
                  'YYYY-MM-DD'
                ).format('MM-DD-YYYY')
              }}
            </p>
            <p class="mr-3">
              <b>Start date: </b>
              {{
                moment(
                  suscripcionComputed.estado.fecha_inicio,
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
                moment(
                  suscripcionComputed.schedules_start,
                  'YYYY-MM-DD'
                ).format('MM-DD-YYYY')
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
                <b>Months late: </b>
                {{ suscripcionComputed.estado.meses_retraso }}
              </p>
              <p class="mr-3">
                <b>Days late: </b> {{ suscripcionComputed.estado.dias_retraso }}
              </p>
              <p class="mr-3">
                <b>Hours late: </b>
                {{ suscripcionComputed.estado.horas_retraso }}
              </p>
            </div>
          </div>
          <VCard class="mt-4" v-if="suscripcionComputed.estado.alerta">
            <div
              v-for="(item, key) in suscripcionComputed.estado.alerta"
              :key="`alter-${key}`"
              class="d-flex w-100"
            >
              <i
                style="color: white"
                class="fa fa-exclamation-triangle mr-4"
              ></i>
              <p>{{ item }}</p>
            </div>
          </VCard>
          <VCard
            class="px-3 py-2"
            v-if="suscripcionComputed.estado.ultimo_intento"
          >
            <p style="font-size: 10px">
              <b
                >Status:

                {{
                  estadosIntentos.find(
                    (e) =>
                      e.value ==
                      suscripcionComputed.estado.ultimo_intento.estado
                  ).name
                }}
              </b>
              <b> Intent:</b>
              {{ suscripcionComputed.estado.ultimo_intento.intento }}
            </p>
            <p
              v-if="
                suscripcionComputed.estado.ultimo_intento.estado != 'pagado'
              "
              style="font-size: 10px"
            >
              {{ suscripcionComputed.estado.ultimo_intento.pago_id }}
            </p>

            <p style="font-size: 10px">
              Date: {{ suscripcionComputed.estado.ultimo_intento.fecha }}
            </p>
          </VCard>
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
              <div class="column is-12">
                <subscription-action-upgrade
                  :suscripcion="suscripcionComputed"
                  @reload="onGetSuscripcion"
                />
              </div>
              <div class="column is-12">
                <subscription-action-saldo
                  :suscripcion="suscripcionComputed"
                  @reload="onGetSuscripcion"
                />
              </div>
              <div class="column is-12">
                <VLoader size="small" :active="isLoaderActive">
                  <subscription-method-payment-debit-automatic
                    :total="0"
                    :card="true"
                    :user="suscripcionComputed.user"
                    @onPayment="onGetSuscripcion"
                  />
                </VLoader>
              </div>
              <div class="column is-12">
                <!-- <subscription-action-payments-list
                  :suscripcion="suscripcionComputed"
                /> -->

                <subscription-action-invoices
                  :suscripcion="suscripcionComputed"
                  @onReload="onGetSuscripcion"
                />
              </div>
            </VCard>
          </div>
        </div>

        <subscription-action-new
          v-if="
            suscripcionComputed &&
            ['CANCELADO', 'PROX. CANCELADO'].includes(
              suscripcionComputed.estado.estado_pago
            )
          "
          :suscripcion="suscripcionComputed"
          :type="'reprocess'"
          @reload="onGetSuscripcion"
        />

        <div
          v-if="
            !['CANCELADO', 'PROX. CANCELADO', 'HOLD'].includes(
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
        <!-- <subscription-payments-list
          v-if="
            suscripcionComputed &&
            suscripcionComputed.estado.estado_pago != 'CANCELADO'
          "
          :payments="suscripcionComputed.memberships_members.payments"
          class="mt-4"
        /> -->
      </div>
    </div>
  </VLoader>
</template>
