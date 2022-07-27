<script setup lang="ts">
import { ref, onMounted, defineProps, computed, defineEmit } from 'vue'
import moment from 'moment'
import {
  memberMermship,
  membershipsData,
  member,
  memberMembershipsHistory,
  putMembership,
  cancelMembershipMembers,
  isSolvente,
  setInputsEvents,
  storeFirma,
  getPresupuesto,
  storeNewMembership,
  pauseMembership,
  pagado,
  arregloTrainers,
  generaPresupuesto,
  presupuestos,
  inputsInformation,
  paymentInvoice,
  prorrateo,
  schedules,
  addPenalty,
  syncStripeResource,
  holdMembership,
} from '/@src/models/Members.ts'

import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputValuesData,
  perpareDataInputs,
  setInputModelData,
  notyf,
  getInput,
  monedaDecimal,
  moneda,
} from '/@src/models/Mixin.ts'
import { Api, API_WEB_URL } from '/@src/services'
import { recurrences } from '/@src/models/Recurrences.ts'

const emit = defineEmit(['reload'])

const props = defineProps({})

onMounted(() => {
  setInputsEvents(membershipsData)
})

const quote = ref(null)
const membership_member = ref(null)
const tax = ref(null)
const clientSecret = ref(null)
const presupuesto = ref(null)
const isLoaderActive = ref(false)
const mebershipMemberid = ref(null)
const modalShowHold = ref(false)

const InputsDisponibles = computed(() => {
  membershipsData.unshift(prorrateo.value[0])
  membershipsData.push(schedules.value[0])
  getInput(membershipsData, 'prorrateo').change = function (inputs) {
    if (this.model) {
      getInput(inputs, 'schedules').disabled = true
    } else {
      getInput(inputs, 'schedules').disabled = false
    }
  }
  getInput(membershipsData, 'recurrence').class = 'is-4'
  if (
    member.value &&
    memberMermship.value &&
    memberMermship.value.status == 1
  ) {
    let d = ['locations_id', 'diciplines', 'staff_id', 'discount']
    return membershipsData.filter((e) => d.includes(e.name))
  }
  return membershipsData
})

const onSave = () => {
  // isLoaderActive.value = true
  // console.log(membershipsData)
  getInput(membershipsData, 'amount').required = false
  getInput(membershipsData, 'initiation_fee').required = false
  getInput(membershipsData, 'diciplines').required = false
  const data = perpareDataInputs(membershipsData)
  putMembership(data).then((response) => {
    notyf.success('Success')
    isLoaderActive.value = false

    getInput(membershipsData, 'amount').required = true
    getInput(membershipsData, 'initiation_fee').required = true
    getInput(membershipsData, 'diciplines').required = true
  })
}

const onNew = async () => {
  isLoaderActive.value = true
  await generaPresupuesto(InputsDisponibles.value, inputsInformation.value)
  isLoaderActive.value = false
}

const onCancel = () => {
  if (!confirm('Are you sure you want to perform this action?')) {
    return
  }
  isLoaderActive.value = true
  cancelMembershipMembers().then((response) => {
    notyf.success('Memberships Cancel')
    window.location.reload()
    isLoaderActive.value = false
  })
}

const onSync = () => {
  notyf.success('Memberships Cancel')
}

const onSign = (base64) => {
  storeFirma(base64, memberMermship.value.id)
    .then((response) => {
      if (response.data.status) {
        notyf.success('Sign Success')
      } else {
        notyf.error(response.data.mensaje)
        for (var i in response.data.errores) {
          response.data.errores[i].forEach((e) => {
            notyf.error(`${i} : ${e}`)
          })
        }
      }
    })
    .catch((error) => {
      // error.response.data
    })
}

const PaymentAction = (data) => {
  // window.location.reload()
}
const centeredActionsOpen = ref(false)
const fecha = ref(null)
const onPause = () => {
  if (!confirm('Are you sure you want to perform this action?')) {
    return
  }

  isLoaderActive.value = true
  pauseMembership(memberMermship.value.id, fecha.value)
    .then((response) => {
      notyf.success('Success Pause')
      isLoaderActive.value = false
      emit('reload')
    })
    .catch((error) => {
      isLoaderActive.value = false
      for (var i in error.response.data) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}

const onHold = () => {
  if (!confirm('Are you sure you want to perform this action?')) {
    return
  }

  isLoaderActive.value = true
  holdMembership(memberMermship.value.id, fecha.value)
    .then((response) => {
      notyf.success('Success Hold')
      isLoaderActive.value = false
      fecha.value = null
      emit('reload')
    })
    .catch((error) => {
      isLoaderActive.value = false
      for (var i in error.response.data) {
        error.response.data[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}

const itentPayment = ref(false)
const retryPayment = (payment_method, payment_type_id = 3, cash = {}) => {
  if (!confirm('Do you want to try the payment?')) {
    return
  }
  let data = {
    // invoice_id: member.value.subscription.latest_invoice.,
    payment_type_id: payment_type_id,
    payment_method: payment_method,
    total: member.value.subscription.total_invoice,
  }

  if (payment_type_id == 1) {
    data.changeBack = cash.changeBack
    data.cash = cash.cash
  }
  isLoaderActive.value = true
  paymentInvoice(memberMermship.value.id, data)
    .then((response) => {
      notyf.success('success')
      window.location.reload()
    })
    .catch((error) => {
      if (typeof error.response.data == 'object') {
        for (var i in error.response.data) {
          if (typeof error.response.data[i] == 'array') {
            // error.response.data[i].forEach((e) => {
            //   notyf.error(`${i} : ${e}`)
            // })
          } else {
            notyf.error(error.response.data[i])
          }
        }
      } else {
        notyf.error(error.response.data)
      }
    })
    .finally(() => {
      isLoaderActive.value = false
    })
}

const paymentCash = (obj) => {
  retryPayment(null, 1, obj)
}
const onaddPenalty = () => {
  isLoaderActive.value = true
  addPenalty()
    .then((response) => {
      isLoaderActive.value = false
      notyf.success('Success')
      emit('reload')
    })
    .catch((error) => {
      // notyf.error(error.response.data)
      isLoaderActive.value = false
    })
}
const onsyncStripeResource = () => {
  isLoaderActive.value = true
  syncStripeResource()
    .then((response) => {
      isLoaderActive.value = false
      notyf.success('Success')
      emit('reload')
    })
    .catch((error) => {
      notyf.error(error.response.data)
      isLoaderActive.value = false
    })
}
const onClickHold = () => {
  if (
    memberMermship.value.hold_date_finish == null &&
    memberMermship.value.date_finish_pause == null
  ) {
    modalShowHold.value = true
  } else {
    if (memberMermship.value.date_finish_pause != null) {
      notyf.error(
        'This membership is on pause. Activation is required to continue'
      )
      return
    }
    onHold()
  }
}
const onClickPause = () => {
  if (member.value.subscription.pause_collection == null) {
    centeredActionsOpen.value = true
  } else {
    if (memberMermship.value.hold_date_finish != null) {
      notyf.error('This membership is on pause.')
      return
    }
    onPause()
  }
}
</script>

<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Membership / Contract</h1>
        <p>Edit member's membership and contract information</p>
      </div>
    </template>
    <template #content>
      <div class="columns is-multiline justify-content-center">
        <div
          v-if="member && memberMermship && memberMermship.status == 1"
          class="column is-12"
        >
          <VCard
            class="d-flex justify-content-between"
            :color="
              memberMermship.hold_date_finish != null ? 'warning' : 'info'
            "
            :style="
              member.subscription.pause_collection == null
                ? {}
                : { backgroundColor: '#404046 !important' }
            "
          >
            <span>
              <p><small>Membership</small></p>
              <p class="title is-4 mb-0">
                {{ memberMermship.membership.name }}
              </p>
              <p>{{ memberMermship.recurrence.descriptions }}</p>
            </span>
            <span class="text-right">
              <p>
                <small
                  ><b>Payment Method:</b>
                  {{ memberMermship.payment_type.name }}</small
                >
              </p>
              <p>
                <small>{{
                  memberMermship.recurrence.is_recurrence
                    ? 'Recurrence'
                    : 'no recurrence'
                }}</small>
              </p>
              <p class="title is-4">
                {{ moneda(member.subscription.total_invoice / 100) }}<br />
                <small
                  v-if="
                    member.subscription &&
                    member.subscription.subscription &&
                    !member.subscription.subscription.upcoming_total
                  "
                  class="mr-1 mb-1"
                  >No upcoming bill</small
                >
              </p>
            </span>
          </VCard>
        </div>

        <div
          v-if="member && memberMermship && memberMermship.status == 1"
          class="column is-2"
        >
          <VLoader
            v-if="member.membership_members.is_recurrence"
            size="small"
            :active="isLoaderActive"
          >
            <VCard
              color="warning"
              :outlined="memberMermship.hold_date_finish != null ? false : true"
              v-if="memberMermship && member.subscription"
              @click="onClickHold"
              class="mr-4 btn-card text-center px-2"
              style="font-size: 12px"
            >
              <p><b>HOLD Membership</b></p>
              <p>
                <span v-if="memberMermship.hold_date_finish != null"
                  >Active until:
                  {{
                    moment(memberMermship.hold_date_finish).format('MM/DD/YYYY')
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
              <input type="date" v-model="fecha" class="input" />
            </template>
            <template #action>
              <V-Button @click="onHold" color="primary" raised
                >Confirm</V-Button
              >
            </template>
          </V-Modal>
        </div>

        <div
          v-if="member && memberMermship && memberMermship.status == 1"
          class="column is-2"
        >
          <VLoader
            v-if="member.membership_members.is_recurrence"
            size="small"
            :active="isLoaderActive"
          >
            <VCard
              color="undefined"
              style="font-size: 12px"
              :style="
                member.subscription.pause_collection == null
                  ? {}
                  : { backgroundColor: '#404046' }
              "
              :outlined="
                member.subscription.pause_collection != null ? false : true
              "
              v-if="memberMermship && member.subscription"
              @click="onClickPause"
              class="mr-4 btn-card text-center px-2"
            >
              <p><b>Pause Payment</b></p>
              <p>
                <span v-if="member.subscription.pause_collection != null"
                  >Active until:
                  {{
                    moment(member.subscription.pause_collection).format(
                      'MM-DD-YYYY'
                    )
                  }}</span
                >
              </p>
            </VCard>
          </VLoader>
          <V-Modal
            :open="centeredActionsOpen"
            actions="center"
            @close="centeredActionsOpen = false"
          >
            <template #content>
              <input type="date" v-model="fecha" class="input" />
            </template>
            <template #action>
              <V-Button @click="onPause" color="primary" raised
                >Confirm</V-Button
              >
            </template>
          </V-Modal>
        </div>

        <div
          v-if="member && memberMermship && memberMermship.status == 1"
          class="column is-2"
        >
          <VLoader size="small" :active="isLoaderActive">
            <VCard
              color="danger"
              v-if="memberMermship"
              outlined
              @click="onCancel"
              class="mr-4 btn-card text-center px-2"
              style="font-size: 12px"
            >
              <p><b>Cancel Membership</b></p>
            </VCard>
          </VLoader>
        </div>

        <div
          v-if="member && memberMermship && memberMermship.status == 1"
          class="column is-2"
        >
          <VLoader size="small" :active="isLoaderActive">
            <VCard
              color="success"
              v-if="memberMermship"
              outlined
              @click="itentPayment = !itentPayment"
              class="mr-4 btn-card text-center px-2"
              style="font-size: 12px"
            >
              <p><b>Payment Now</b></p>
            </VCard>
          </VLoader>
        </div>

        <div v-if="member && memberMermship" class="column is-2">
          <VLoader
            v-if="member.membership_members.is_recurrence"
            size="small"
            :active="isLoaderActive"
          >
            <VCard
              color="secondary"
              v-if="memberMermship"
              outlined
              @click="onaddPenalty"
              class="mr-4 btn-card text-center px-2"
              style="font-size: 12px"
            >
              <p><b>Pay Late Fee</b></p>
            </VCard>
          </VLoader>
        </div>

        <div v-if="member && memberMermship" class="column is-2">
          <VLoader
            v-if="member.membership_members.is_recurrence"
            size="small"
            :active="isLoaderActive"
          >
            <VCard
              :color="undefined"
              v-if="memberMermship"
              outlined
              @click="onsyncStripeResource"
              class="mr-4 btn-card text-center px-2"
              style="font-size: 12px"
            >
              <p><b>Sync Subscription</b></p>
            </VCard>
          </VLoader>
        </div>

        <div class="mb-4 column is-12" v-if="itentPayment">
          <MemberCards
            v-if="member.user"
            @onMethodPayment="retryPayment"
            :memberid="member.id"
            :method_default="member.user.pm_last_four"
            :show-new-card="false"
            class="mb-4"
            ancho="is-4"
          >
            <memberCheckoutCash
              :total="member.subscription.total_invoice"
              margin="mx-0"
              class="is-4"
              @onPaymentCash="paymentCash"
            />
          </MemberCards>
        </div>

        <VCard class="mb-4 column is-12" v-if="!presupuestos.length">
          <inputsLayaut :inputs-step="InputsDisponibles" />

          <VAvatarStack
            v-if="member && member.trainers"
            :avatars="arregloTrainers(member.trainers)"
            size="small"
          />

          <VLoader
            v-if="member && memberMermship && memberMermship.status == 1"
            size="small"
            :active="isLoaderActive"
          >
            <VButton class="mt-5" @click="onSave" color="primary"
              >Save Changes</VButton
            >
          </VLoader>

          <VLoader v-if="!pagado" size="small" :active="isLoaderActive">
            <VButton
              v-if="!memberMermship || memberMermship.status == 2"
              class="mt-5"
              @click="onNew"
              color="primary"
            >
              New Membership
            </VButton>
          </VLoader>
        </VCard>

        <!-- Presupuesto -->
        <div
          v-if="!memberMermship || memberMermship.status == 2"
          class="column is-12 mb-6 mt-4"
        >
          <VPlaceload height="300px" class="mb-4" v-if="isLoaderActive" />
          <div v-if="presupuestos.length">
            <Presupuesto
              v-for="(presupuesto, key) in presupuestos"
              :key="`presupuesto-${key}`"
              class="mb-4"
              :presupuesto="presupuesto"
            >
              <div class="d-flex justify-content-end w-100">
                <generateMember
                  :member="presupuesto.member"
                  :member_id="member.id"
                  :membresia="presupuesto.membresia"
                  :contact="dataContact"
                  :presupuesto_id="presupuesto.presupuesto_id"
                  :categories-members="categoriesMembers"
                  :notas-input="notasInput"
                  :total="presupuesto.totales.upfront.amount_total"
                  @PaymentAction="PaymentAction"
                  :type="'edit'"
                />
              </div>
            </Presupuesto>

            <VButton @click="presupuestos = []" color="danger">Cancel</VButton>
          </div>
        </div>

        <!-- Contract -->
        <div
          v-if="member && memberMermship"
          class="columns is-multiline column mt-4 is-12"
        >
          <div>
            <p>
              <b>Contract Date:</b>
              {{
                moment(member.membership_members.created_at).format(
                  'ddd - DD MMM yyyy'
                )
              }}
            </p>
          </div>

          <div class="column is-12">
            <signComponent
              @onSign="onSign"
              :is-sign="!memberMermship.sign"
              :contract="`contract_${member.id}_${member.membership_members.id}_${member.personal_identifications}.pdf`"
              :url-contract="`generateContract/${member.id}`"
            />
          </div>
        </div>

        <VCard class="mb-4" v-if="false">
          <h1 class="title is-6">Inactive Contract Information</h1>
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">Contract</th>
                <th scope="col">Agreement Date</th>
                <th scope="col">Sold By</th>
                <th scope="col">Membership Type</th>
                <th scope="col">Decipline</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Auto Renew</th>
                <th scope="col">Discount Type</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, key) in memberMembershipsHistory"
                :key="`item-${key}`"
              >
                <td>
                  <a :href="item.contract"
                    ><img src="/public/images/pdf_icon.png" width="40" alt=""
                  /></a>
                </td>
                <td>
                  {{ moment(item.created_at).format('dd - DD MMM YYYY') }}
                </td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.membership.name }}</td>

                <td>
                  <span
                    v-if="
                      item.diciplines != '' ||
                      item.diciplines != null ||
                      item.diciplines != undefined
                    "
                  >
                    <span
                      v-for="(dicipline, ke) in item.diciplines"
                      :key="`dicipline-${ke}`"
                      ><span> {{ dicipline.dicipline.name }} </span>
                    </span>
                  </span>

                  <span v-else>N/A</span>
                </td>
                <td>
                  {{ moment(item.created_at).format('dd - DD MMM YYYY') }}
                </td>
                <td>
                  {{ moment(item.cacelation_date).format('dd - DD MMM YYYY') }}
                </td>
                <td>
                  <span>
                    {{ item.is_recurrence ? 'Recurrence' : 'Not Recurrence' }}
                  </span>
                  <span v-if="item.is_recurrence">{{
                    item.recurrence.recurrence
                  }}</span>
                </td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </VCard>

        <!-- WAIVER -->
        <VCard class="mb-4" v-if="member && memberMermship">
          <h1 class="title is-6">Active Waiver Information</h1>
          <div class="text-center">
            <a
              target="_blank"
              :href="`${API_WEB_URL}generateWeiver/${member.id}`"
            >
              <img src="/public/images/pdf_icon.png" width="40" alt="" />
              <p>
                weiver_{{ member.id }}_{{ member.membership_members.id }}_{{
                  member.personal_identifications
                }}.pdf
              </p>
              <V-Button color="success" outlined class="mt-4 py-1">
                View PDF
              </V-Button>
            </a>
          </div>
        </VCard>
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
