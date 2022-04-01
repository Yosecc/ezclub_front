<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
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
} from '/@src/models/Members.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputValuesData,
  perpareDataInputs,
  setInputModelData,
  notyf,
  getInput,
  monedaDecimal,
} from '/@src/models/Mixin.ts'
import { Api, API_WEB_URL } from '/@src/services'
import { recurrences } from '/@src/models/Recurrences.ts'

const props = defineProps({})

onMounted(() => {
  setInputsEvents(membershipsData.value)
  disabledInputs()
})

const quote = ref(null)
const membership_member = ref(null)
const tax = ref(null)
const clientSecret = ref(null)
// const product = ref(null)
const onSave = () => {
  const data = perpareDataInputs(membershipsData.value)
  putMembership(data).then((response) => {
    if (response.data.cargo_automatico != 'none') {
      if (response.data.cargo_automatico == 'no_method') {
        membership_member.value = response.data.membership_member
        quote.value = response.data.quote
        tax.value = response.data.tax
        clientSecret.value = response.data.clientSecret
      } else if (response.data.cargo_automatico == 'ok') {
        notyf.success('Payment')
      }
    }
    notyf.success('Success')
  })
}

const onCancel = () => {
  cancelMembershipMembers().then((response) => {
    notyf.success('Memberships Cancel')
    window.location.reload()
    // console.log(response)
  })
}
const presupuesto = ref(null)

const onNew = () => {
  const data = perpareDataInputs(membershipsData.value)
  console.log(data)
  // const generaPresupuesto = async ()=>{

  let datos = {
    memberships_id: data.memberships_id,
    recurrences_id: data.recurrences_id,
    is_initiation_fee: data.is_initiation_fee.length == 0 ? true : false,
    member_id: member.value.id,
  }

  getPresupuesto(datos).then((response) => {
    presupuesto.value = {
      name: response.data.membership.name,
      interval: response.data.quote.computed.recurring.interval,
      membership: {
        amount_subtotal: response.data.quote.computed.recurring.amount_subtotal,
        amount_total: response.data.quote.computed.recurring.amount_total,
      },
      initiation_fee: response.data.membership.initiation_fee,
      percentage: response.data.tax.percentage,
      amount_tax: response.data.quote.total_details.amount_tax,
      amount_subtotal: response.data.quote.amount_subtotal,
      amount_total: response.data.quote.amount_total,
      is_initiation_fee: datos.is_initiation_fee,
    }

    // console.log(presupuesto.value)
  })
}
const mebershipMemberid = ref(null)
const newMembership = () => {
  const data = perpareDataInputs(membershipsData.value)
  data.members_id = member.value.id
  storeNewMembership(data)
    .then((response) => {
      console.log(response.data)
      mebershipMemberid.value = response.data.membership_member.id
      clientSecret.value = response.data.clientSecret
      // addCard.value = true
      // console.log(membership_member.id)
    })
    .catch((error) => {
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}

const disabledInputs = () => {
  if (memberMermship.value) {
    getInput(membershipsData.value, 'is_initiation_fee').disabled = true
    getInput(membershipsData.value, 'recurrences_id').disabled = true
    getInput(membershipsData.value, 'amount').disabled = true
    // getInput(membershipsData.value, 'recurrence').disabled = true
    getInput(membershipsData.value, 'memberships_id').disabled = true
  }
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
  window.location.reload()
}
</script>

<template>
  <div>
    <VCardAdvanced>
      <template #header-left>
        <div>
          <h1 class="title is-4 mb-0">Membership / Contract</h1>
          <p>Edit member's membership and contract information</p>
        </div>
      </template>
      <template #header-right>
        <VButton v-if="memberMermship" @click="onCancel" class="mr-4">
          Cancel Membership
        </VButton>
        <VButton v-if="memberMermship" @click="onSave" color="primary">
          Save Changes
        </VButton>
        <VButton v-if="!memberMermship" @click="onNew" color="primary">
          New Membership
        </VButton>
      </template>
      <template #content>
        <VCard class="mb-4" v-if="quote">
          <h1 class="title is-6"></h1>
          <table class="table is-hoverable is-striped is-fullwidth">
            <thead>
              <tr>
                <th scope="col">Membership Name</th>
                <th scope="col">Plan</th>
                <th scope="col">Cost</th>
                <!-- <th scope="col">Initiation Fee</th> -->
                <!-- <th scope="col">Discount</th> -->
                <!-- <th scope="col">Taxes</th> -->
                <th scope="col">Import</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ membership_member.membership.name }}</td>
                <td>{{ quote.computed.recurring.interval }}</td>
                <td>
                  {{
                    monedaDecimal(quote.computed.recurring.amount_subtotal * 10)
                  }}
                </td>
                <td style="text-align: right">
                  {{
                    monedaDecimal(quote.computed.recurring.amount_subtotal * 10)
                  }}
                </td>
              </tr>
              <tr v-if="membership_member.is_initiation_fee == 1">
                <td>{{ membership_member.membership.name }}</td>

                <td>Initiation Fee</td>
                <td>{{ monedaDecimal(membership_member.initiation_fee) }}</td>

                <td style="text-align: right">
                  {{ membership_member.initiation_fee }}
                </td>
              </tr>
              <tr style="text-align: right">
                <td colspan="3" style="text-align: right">
                  Tax {{ tax.percentage }}%
                </td>
                <td>{{ quote.total_details.amount_tax }}</td>
              </tr>
              <tr style="text-align: right">
                <td colspan="3" style="text-align: right"><b>Subtotal</b></td>
                <td>{{ monedaDecimal(quote.amount_subtotal * 10) }}</td>
              </tr>
              <tr style="text-align: right">
                <td colspan="3" style="text-align: right"><b>Total</b></td>
                <td>{{ monedaDecimal(quote.amount_total * 10) }}</td>
              </tr>
              <tr style="text-align: right">
                <td colspan="3" style="text-align: right">Total recurrente</td>
                <td>
                  {{
                    monedaDecimal(quote.computed.recurring.amount_total * 10)
                  }}
                </td>
              </tr>
            </tbody>
          </table>

          <stripeAddCardComponent
            :client-secret="clientSecret"
            :membership_member_id="membership_member.id"
            @PaymentAction="PaymentAction"
          />
          <!--             :amount="quote.amount_total"
            :id="membership_member.member.id"
            :member_membership="membership_member.id" -->
        </VCard>

        <presupuestoComponent v-if="presupuesto" :presupuesto="presupuesto">
          <template #k>
            <V-Button color="info" @click="newMembership" class="mt-4 py-1">
              Payment Card
            </V-Button>
            <stripeAddCardComponent
              v-if="clientSecret"
              :client-secret="clientSecret"
              :membership_member_id="mebershipMemberid"
              @PaymentAction="PaymentAction"
            />
          </template>
        </presupuestoComponent>

        <VCard class="mb-4">
          <h1 class="title is-6">Active Contract Information</h1>
          <div class="columns is-multiline">
            <div class="column is-12">
              <inputsLayaut :inputs-step="membershipsData" />
            </div>
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
          </div>
        </VCard>

        <VCard class="mb-4" v-if="member">
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
                    >
                      <span> {{ dicipline.dicipline.name }} </span>
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
      </template>
    </VCardAdvanced>
  </div>
</template>

<style lang="scss" scope></style>
