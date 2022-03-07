<script setup lang="ts">
import { computed, ref, reactive, defineProps, defineEmit, watch } from 'vue'
import {
  viewInput,
  setInputValuesData,
  setInputModelData,
  moneda,
  calcularMeses,
  getValueInput,
} from '/@src/models/Mixin.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  paymentData,
  flipped,
  optionsCreditCard,
} from '/@src/models/PaymentMethodsData.ts'

import moment from 'moment'

import { idMember, idMemberMembership } from '/@src/models/Members.ts'

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  // inputs:{
  //   type: Array,
  //   default: []
  // },
  title: {
    type: String,
    default: '',
  },
  member: {
    type: Array,
    default: [],
  },
  familiares: {
    type: Array,
    default: [],
  },
  memberMembership: {
    type: Array,
    default: [],
  },
  familyMembership: {
    type: Array,
    default: [],
  },
})

const isLoading = ref(false)

const emit = defineEmit(['changeStep', 'returnData'])

const change = (val, payment = 3) => {
  let obj = {
    // paymentData,
    // dataCardFamiliares: {},
    total,
  }
  // console.log(obj)
  emit('returnData', obj)
  emit('changeStep', val, payment, {
    cash: cash.value,
    changeBack: changeBack.value,
  })
}

//  MEMBER //////////////////

const infoMembership = computed(() => {
  let data = getValueInput(props.memberMembership, 'memberships_id')
  return data != undefined ? data : []
})

const recurrence = computed(() => {
  let data = getValueInput(props.memberMembership, 'recurrences_id')
  return data != undefined ? data : []
})

const initiationFeeMember = computed(() => {
  let data = viewInput(props.memberMembership, 'initiation_fee')
  return data != undefined ? data : []
})

const prorated = computed(() => {
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0
  let diferencia = 0
  if (recurrence.value.days >= 30) {
    diferencia = hoyDay - recurrence.value.payday
    calculo = (recurrence.value.amount / 30) * diferencia
  }
  return {
    days: diferencia,
    amount: Math.abs(Math.round(calculo)),
  }
})

const proratedMethod = (recurrence) => {
  // console.log(recurrence)
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0
  let diferencia = 0
  if (recurrence.days >= 30) {
    diferencia = hoyDay - recurrence.payday
    calculo = (recurrence.amount / 30) * diferencia
  }
  return {
    days: diferencia,
    amount: Math.abs(Math.round(calculo)),
  }
}

const objTax = (membership) => {
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

const tax = computed(() => {
  return objTax(infoMembership)
})

const membershipCost = (recurrenceData) => {
  if (calcularMeses(recurrenceData.days) > 0) {
    return recurrenceData.amount * calcularMeses(recurrenceData.days)
  }
  return recurrenceData.amount
}
const subtotalMemberMembership = computed(() => {
  let suma = 0
  suma += recurrence.value.amount * calcularMeses(recurrence.value.days)
  suma += initiationFeeMember.value
  suma -= prorated.value.amount
  suma = (suma / 100) * tax.value.value + suma

  return suma
})

const total = computed(() => {
  let suma = 0
  suma += subtotalMemberMembership.value
  suma += totalesFamilies.value
  return suma
})

// FAMILY ///////////////////

const subtotalFamily = (data) => {
  let suma = 0
  suma += data.membershipCost
  suma += data.initiation_fee
  suma -= data.prorated
  suma = (suma / 100) * data.objTax.value + suma
  return suma
}

const totalesFamilies = computed(() => {
  let suma = 0
  props.familyMembership.forEach((familiar) => {
    let subtotal = subtotalFamily({
      membershipCost: membershipCost(
        getValueInput(familiar.inputs, 'recurrences_id')
      ),
      initiation_fee: viewInput(familiar.inputs, 'initiation_fee'),
      objTax: objTax(getValueInput(familiar.inputs, 'memberships_id')),
      prorated: proratedMethod(getValueInput(familiar.inputs, 'recurrences_id'))
        .amount,
    })
    suma += subtotal
  })

  return suma
})

const cardPayment = ref(false)

watch(
  () => idMember,
  (data, prevData) => {
    cardPayment.value = true
  }
)

const openModalCash = ref(false)

const cash = ref(0)

const changeBack = computed(() => {
  const calculo = cash.value - total.value

  if (calculo > 0) {
    return calculo
  }

  return 0
})

const typePago = ref(3)

const isStripe = computed(() => {
  if (
    idMember.value != null &&
    idMemberMembership.value != null &&
    typePago.value == 3
  ) {
    return true
  }
  return false
})
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :is-loading="isLoading"
    :buttons="['prev']"
    :step="5"
    @changeStep="change"
  >
    <table class="table is-hoverable is-striped is-fullwidth">
      <thead>
        <tr>
          <th scope="col">Members</th>
          <th scope="col">Membership Name</th>
          <th scope="col">Recurrence</th>
          <th scope="col">Prorated</th>
          <th scope="col">Membership Cost</th>
          <th scope="col">Initiation Fee</th>
          <!-- <th scope="col">Discount</th> -->
          <th scope="col">Taxes</th>
          <th scope="col">Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>
              <b
                >{{ viewInput(member, 'name') }}
                {{ viewInput(member, 'second_name') }}
                {{ viewInput(member, 'last_name') }}</b
              >
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
          <td>{{ moneda(initiationFeeMember) }}</td>
          <td>{{ tax.text }}</td>
          <td>{{ moneda(subtotalMemberMembership) }}</td>
        </tr>
        <tr
          v-for="(familiar, keyj) in props.familyMembership"
          :key="`familiar${keyj}`"
        >
          <td>{{ viewInput(familiar.family, 'name') }}</td>
          <td>{{ getValueInput(familiar.inputs, 'memberships_id').name }}</td>
          <td>
            {{ getValueInput(familiar.inputs, 'recurrences_id').descriptions }}
          </td>
          <td>
            <span
              v-if="getValueInput(familiar.inputs, 'recurrences_id').days >= 30"
            >
              {{
                proratedMethod(getValueInput(familiar.inputs, 'recurrences_id'))
                  .days
              }}
              days : <br />
              -
              {{
                moneda(
                  proratedMethod(
                    getValueInput(familiar.inputs, 'recurrences_id')
                  ).amount
                )
              }}
            </span>
            <span v-else>-</span>
          </td>
          <td>
            {{
              moneda(
                membershipCost(getValueInput(familiar.inputs, 'recurrences_id'))
              )
            }}
          </td>
          <td>{{ moneda(viewInput(familiar.inputs, 'initiation_fee')) }}</td>
          <td>
            {{ objTax(getValueInput(familiar.inputs, 'memberships_id')).text }}
          </td>

          <td>
            {{
              moneda(
                subtotalFamily({
                  membershipCost: membershipCost(
                    getValueInput(familiar.inputs, 'recurrences_id')
                  ),
                  initiation_fee: viewInput(familiar.inputs, 'initiation_fee'),
                  objTax: objTax(
                    getValueInput(familiar.inputs, 'memberships_id')
                  ),
                  prorated: proratedMethod(
                    getValueInput(familiar.inputs, 'recurrences_id')
                  ).amount,
                })
              )
            }}
          </td>
        </tr>
        <tr>
          <td style="text-align: right" colspan="7">Total</td>

          <td class="is-end">
            {{ moneda(total) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between">
      <VButton color="success" @click="change(6, 3), (typePago = 3)">
        Card Payment
      </VButton>
      <VButton color="warning" @click="openModalCash = true">
        Cash Payment
      </VButton>
    </div>
    <!-- <p>{{ idMemberMembership }}</p> -->
    <stripeForm
      v-if="isStripe"
      :amount="total"
      :id="idMember"
      :member_membership="idMemberMembership"
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
          @click="change(6, 1), (typePago = 1)"
          :disabled="total > cash"
          class="d-flex justify-content-center"
          raised
          >Confirm</VButton
        >
      </template>
    </VModal>
  </formLayaut>
</template>

<style lang="scss"></style>
