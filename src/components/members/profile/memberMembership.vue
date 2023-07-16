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
  getPresupuestoMembresia,
  sendEmailContractAndWaiver,
  subscribeDebitAutomatic,
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

import { locationSistemID } from '/@src/models/Companies.ts'

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
const modalShowProrratedHold = ref(false)
const presupuestoProrrateo = ref({ total: null })

const isProrrateoHold = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'prorrateo',
    values: ['NO', 'Yes'],
    model: true,
    required: false,
    class: 'is-12',
    isLabel: true,
  },
])

import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const InputsDisponibles = computed(() => {
  if (route.fullPath.includes('/members/profile')) {
    let index = membershipsData.findIndex((e) => e.name == 'prorrateo')
    let index1 = membershipsData.findIndex((e) => e.name == 'schedules')

    if (index == -1) {
      membershipsData.unshift(prorrateo.value[0])
      getInput(membershipsData, 'recurrence').class = 'is-4'
    }

    if (index1 == -1) {
      membershipsData.push(schedules.value[0])
      getInput(membershipsData, 'prorrateo').change = function (inputs) {
        if (this.model) {
          getInput(inputs, 'schedules').disabled = true
        } else {
          getInput(inputs, 'schedules').disabled = false
        }
      }
    }
  }

  if (
    member.value &&
    memberMermship.value &&
    memberMermship.value.status == 1
  ) {
    let d = [
      'locations_id',
      'diciplines',
      'staff_id',
      'discount',
      'is_last_month',
      'multigym',
    ]

    if (
      locationFacturacion.value &&
      locationSistemID.value == locationFacturacion.value.id
    ) {
      d.push('discount')
    }

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
  holdMembership(
    memberMermship.value.id,
    fecha.value,
    getInput(isProrrateoHold.value, 'prorrateo').model
  )
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
  if (!confirm('Are you sure you want to perform this action?')) {
    return
  }
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

    getPresupuestoMembresia(memberMermship.value.id)
      .then((response) => {
        console.log(response.data)
        presupuestoProrrateo.value = response.data
        modalShowProrratedHold.value = true
      })
      .catch((error) => {
        console.log(error.response.data)
      })

    // onHold()
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

const onClickSendEmail = () => {
  isLoaderActive.value = true
  sendEmailContractAndWaiver(memberMermship.value.id).then((response) => {
    isLoaderActive.value = false
    notyf.success('Send Email')
  })
}

const onClickSubscribeDebitAutomatic = () => {
  isLoaderActive.value = true
  subscribeDebitAutomatic(member.value.id)
    .then((response) => {
      isLoaderActive.value = false
      notyf.success('Success')
      emit('reload')
    })
    .catch((e) => {
      isLoaderActive.value = false
      emit('reload')
    })
}

const locationFacturacion = computed(() => {
  if (member.value.user && member.value.user.location_facturacion) {
    return member.value.user.location_facturacion
  }

  if (memberMermship.value && memberMermship.value.payment_type_id == 1) {
    return { id: memberMermship.value.locations_id }
  }
  return null
})
</script>

<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Contract</h1>
        <p>Edit member's membership and contract information</p>
      </div>
    </template>
    <template #content>
      <!-- <p>{{ locationSistemID }}/ {{ locationFacturacion }}</p> -->
      <div class="columns is-multiline justify-content-center">
        <div
          style="position: sticky; top: 10px"
          class="columns is-multiline"
          v-if="member.membership_members"
        >
          <!-- WAIVER -->
          <div class="column is-16">
            <VCard class="mb-4 w-100" v-if="member && memberMermship">
              <h1 class="title is-6">Active Waiver Information</h1>
              <div class="text-center">
                <a
                  target="_blank"
                  :href="`${API_WEB_URL}generateWeiver/${member.id}`"
                  class="d-flex justify-content-start align-items-center"
                >
                  <img
                    src="/public/images/pdf_icon.png"
                    class="mr-3"
                    width="40"
                    alt=""
                  />
                  <p>
                    weiver_{{ member.id }}_{{ member.membership_members.id }}_{{
                      member.personal_identifications
                    }}.pdf
                  </p>
                  <!-- <V-Button color="success" outlined class="mt-4 py-1">
                        View PDF
                      </V-Button> -->
                </a>
              </div>
            </VCard>
          </div>

          <!-- Contract -->
          <div class="column is-16">
            <VCard class="mb-4 w-100" v-if="member && memberMermship">
              <h1 class="title is-6">Active Contract Information</h1>
              <div class="text-center">
                <a
                  target="_blank"
                  :href="`${API_WEB_URL}generateContract/${member.id}`"
                  class="d-flex justify-content-start align-items-center"
                >
                  <img
                    src="/public/images/pdf_icon.png"
                    class="mr-3"
                    width="40"
                    alt=""
                  />
                  <p>
                    contract_{{ member.id }}_{{
                      member.membership_members.id
                    }}_{{ member.personal_identifications }}.pdf
                  </p>
                  <!--  <V-Button color="success" outlined class="mt-4 py-1">
                        View PDF
                      </V-Button> -->
                </a>
              </div>
            </VCard>
          </div>
        </div>
        <div class="column is-4 text-center" v-else>
          <p class="title is-4">Change the location to perform actions</p>
        </div>

        <!-- Contract -->
        <div
          v-if="member && memberMermship && !memberMermship.sign"
          class="columns is-multiline column mt-4 is-12"
        >
          <div class="column is-12">
            <signComponent
              @onSign="onSign"
              :is-sign="!memberMermship.sign"
              :contract="`contract_${member.id}_${member.membership_members.id}_${member.personal_identifications}.pdf`"
              :url-contract="`generateContract/${member.id}`"
            />
          </div>
        </div>
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
