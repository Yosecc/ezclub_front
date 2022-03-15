<script setup lang="ts">
import { computed, ref, reactive, defineEmit, watch } from 'vue'
import {
  viewInput,
  setInputValuesData,
  setInputModelData,
  moneda,
} from '/@src/models/Mixin.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  paymentData,
  flipped,
  optionsCreditCard,
} from '/@src/models/PaymentMethodsData.ts'
import {
  calcularMeses,
  getValueInput,
  getInput,
  notyf,
} from '/@src/models/Mixin.ts'
import moment from 'moment'

import {
  idMember,
  member,
  memberMermship,
  memberMembershipPayments,
  membershipsData,
  storePaymentCash,
} from '/@src/models/Members.ts'

const isLoading = ref(false)

const stripeStatus = ref(false)

//  MEMBER //////////////////

const infoMembership = computed(() => {
  console.log('membresia', memberMermship.value)
  console.log('inputs', membershipsData.value)
  let data = getValueInput(membershipsData.value, 'memberships_id')
  return data != undefined ? data : []
})

const recurrence = computed(() => {
  let data = getValueInput(membershipsData.value, 'recurrences_id')
  return data != undefined ? data : []
})

const initiationFeeMember = computed(() => {
  let data = viewInput(membershipsData.value, 'initiation_fee')
  return data != undefined ? data : []
})

const cuponMember = computed(() => {
  let data = getInput(membershipsData.value, 'discount')
  return data != undefined ? data : []
})

const prorated = computed(() => {
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0
  let diferencia = 0
  if (recurrence.value.days >= 30) {
    diferencia = hoyDay - recurrence.value.payday
    calculo = (recurrence.value.amount / recurrence.value.days) * diferencia
  }
  return {
    days: diferencia,
    amount: Math.abs(Math.round(calculo)),
  }
})

const proratedMethod = (recurrence) => {
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0
  let diferencia = 0
  if (recurrence.days >= 30) {
    diferencia = hoyDay - recurrence.payday
    calculo = (recurrence.amount / recurrence.days) * diferencia
  }
  return {
    days: diferencia,
    amount: Math.abs(Math.round(calculo)),
  }
}

const objTax = (membership) => {
  if (viewInput(membershipsData.value, 'memberships_id') != '') {
    if (!membership.value) {
      membership = membership
    } else {
      membership = membership.value
    }
    if (membership.tax.type == 'percentaje') {
      return {
        text: `${membership.tax.value}%`,
        value: membership.tax.value,
        type: 'procentaje',
      }
    }
    return {
      text: moneda(membership.tax.value),
      value: membership.tax.value,
    }
  }
}

const tax = computed(() => {
  return objTax(infoMembership)
})

const membershipCost = (recurrenceData) => {
  return recurrenceData.amount
}

const subtotalMemberMembership = computed(() => {
  let suma = 0
  suma += recurrence.value.amount
  if (!viewInput(membershipsData.value, 'is_initiation_fee').length) {
    suma += initiationFeeMember.value
  }

  suma -= prorated.value.amount

  if (cuponMember.value.data) {
    if (cuponMember.value.data.type == 'dolar') {
      suma -= cuponMember.value.data.value
    } else if (cuponMember.value.data.type == 'percentaje') {
      suma -= (suma / 100) * cuponMember.value.data.value
    }
  }

  suma += (suma / 100) * tax.value.value

  return suma
})

const total = computed(() => {
  let suma = 0
  suma += subtotalMemberMembership.value
  return suma
})

// PAGO

const payment = () => {
  stripeStatus.value = true
}
const openModalCash = ref(false)

const cash = ref(0)

const changeBack = computed(() => {
  const calculo = cash.value - total.value

  if (calculo > 0) {
    return calculo
  }

  return 0
})

const typePago = ref(1)

const paymentCash = async () => {
  await storePaymentCash(memberMermship.value.id, {
    total: total.value,
    payment_type_id: 1,
    cash: cash.value,
    cash_back: changeBack.value,
  })
    .then((response) => {
      notyf.success('Payment Success')
      window.location.reload()
    })
    .catch((error) => {})
}
</script>

<template>
  <div>
    <VCard class="">
      <table class="table is-hoverable is-striped is-fullwidth">
        <thead>
          <tr>
            <th scope="col">Members</th>
            <th scope="col">Membership Name</th>
            <th scope="col">Recurrence</th>
            <th scope="col">Prorated</th>
            <th scope="col">Membership Cost</th>
            <th scope="col">Initiation Fee</th>
            <th scope="col">Discount</th>
            <th scope="col">Taxes</th>
            <th scope="col">Sub Total</th>
          </tr>
        </thead>
        <tbody v-if="infoMembership.length != 0">
          <tr>
            <td>
              <p>
                <b>
                  {{ member.name }}
                  {{ member.second_name }}
                  {{ member.last_name }}
                </b>
              </p>
            </td>
            <td v-if="infoMembership.legnth != 0">{{ infoMembership.name }}</td>
            <td v-if="recurrence.length != 0">{{ recurrence.descriptions }}</td>
            <td v-if="recurrence.length != 0">
              <span v-if="recurrence.days >= 30">
                {{ prorated.days }} days : <br />
                - {{ moneda(prorated.amount) }}
              </span>
              <span v-else>-</span>
            </td>
            <td>{{ moneda(membershipCost(recurrence)) }}</td>
            <td>
              <span
                v-if="!viewInput(membershipsData, 'is_initiation_fee').length"
              >
                {{ moneda(initiationFeeMember) }}
              </span>
              <span v-else>{{ moneda(0) }}</span>
            </td>
            <td>
              <span v-if="cuponMember.data != null">
                <span v-if="cuponMember.data.type == 'dolar'">
                  - {{ moneda(cuponMember.data.value) }}</span
                >
                <span v-if="cuponMember.data.type == 'percentaje'">
                  {{ cuponMember.data.value }}%</span
                >
              </span>
              <span v-else>-</span>
            </td>

            <td>{{ tax.text }}</td>
            <td>{{ moneda(subtotalMemberMembership) }}</td>
          </tr>
          <tr>
            <td style="text-align: right" colspan="8">Total</td>

            <td class="is-end">
              {{ moneda(total) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between">
        <VButton
          color="success"
          :disabled="infoMembership.length == 0 || isNaN(total)"
          @click="stripeStatus = true"
        >
          Card Payment
        </VButton>
        <VButton
          :disabled="infoMembership.length == 0 || isNaN(total)"
          color="warning"
          @click="openModalCash = true"
        >
          Cash Payment
        </VButton>
      </div>
    </VCard>
    <stripeForm
      class=""
      v-if="stripeStatus"
      :url="`new_payment/${memberMermship.id}`"
      :amount="total"
      :id="member.id"
      :member_membership="memberMermship.id"
    />
    <VModal
      :open="openModalCash"
      actions="center"
      @close="openModalCash = false"
    >
      <template #content>
        <div class="d-flex mb-4 justify-content-between">
          <p class="title is-5">
            Total: <b>{{ moneda(total) }}</b>
          </p>

          <p class="title is-5">
            Cash Total: <b>{{ moneda(cash) }}</b>
          </p>
        </div>

        <div
          class="
            d-flex
            justify-content-center
            align-items-center
            flex-column
            mb-4
          "
        >
          <p class="title is-5 mb-4">Change Back:</p>
          <p class="title is-3 mb-0">
            <b>{{ moneda(changeBack) }}</b>
          </p>
        </div>
        <div class="d-flex justify-content-center flex-wrap mb-4">
          <VButton
            bold
            class="m-3"
            style="font-size: 14px"
            @click="cash = total"
          >
            Full Payment {{ moneda(total) }}
          </VButton>
          <div class="w-100"></div>
          <VButton
            v-for="(i, key) in [5, 10, 20, 50, 100]"
            :key="`calculato-${key}`"
            bold
            class="m-3"
            style="font-size: 14px"
            @click="cash += i"
          >
            ${{ i }}
          </VButton>
        </div>
        <div class="d-flex justify-content-center">
          <VField>
            <VControl>
              <input
                v-model="cash"
                type="text"
                class="input text-center"
                placeholder="Cash"
              />
            </VControl>
          </VField>
        </div>
      </template>
      <template #action>
        <VButton
          color=""
          @click="cash = 0"
          class="d-flex justify-content-center"
          raised
          >Reset</VButton
        >
        <VButton
          color="success"
          @click="paymentCash"
          :disabled="total > cash"
          class="d-flex justify-content-center"
          raised
          >Confirm</VButton
        >
      </template>
    </VModal>
  </div>
</template>

<style lang="scss"></style>
