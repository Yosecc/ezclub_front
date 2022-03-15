<script setup lang="ts">
import { computed, ref, reactive, defineProps, defineEmit, watch } from 'vue'
import {
  viewInput,
  setInputValuesData,
  setInputModelData,
  moneda,
  calcularMeses,
  getValueInput,
  getInput,
} from '/@src/models/Mixin.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  paymentData,
  flipped,
  optionsCreditCard,
} from '/@src/models/PaymentMethodsData.ts'

import moment from 'moment'

import {
  idMember,
  idMemberMembership,
  inputsMembership,
} from '/@src/models/Members.ts'

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
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

const membershipMember = computed(() => {
  return inputsMembership.value[0]
})

const infoMembership = computed(() => {
  let data = getValueInput(membershipMember.value.inputs, 'memberships_id')
  return data != undefined ? data : []
})

const recurrence = computed(() => {
  let data = getValueInput(membershipMember.value.inputs, 'recurrences_id')
  return data != undefined ? data : []
})

const initiationFeeMember = computed(() => {
  let data = viewInput(membershipMember.value.inputs, 'initiation_fee')
  return data != undefined ? data : []
})

const cuponMember = computed(() => {
  let data = getInput(membershipMember.value.inputs, 'discount')
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
  if (viewInput(membershipMember.value.inputs, 'memberships_id') != '') {
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
  if (!viewInput(membershipMember.value.inputs, 'is_initiation_fee').length) {
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
  suma += totalesFamilies.value
  return suma
})

// FAMILY ///////////////////

const membershipsFamilies = computed(() => {
  let data = []
  console.log('familiares', inputsMembership.value)

  inputsMembership.value.forEach((e, index) => {
    if (index > 0) {
      console.log(e)
      data.push(e)
    }
  })

  return data
})

const subtotalFamily = (data) => {
  let suma = 0
  suma += data.membershipCost
  if (!data.is_initiation_fee.length) {
    suma += data.initiation_fee
  }

  suma -= data.prorated

  if (data.discount != null) {
    if (data.discount.type == 'dolar') {
      suma -= data.discount.value
    } else if (data.discount.type == 'percentaje') {
      suma -= (suma / 100) * data.discount.value
    }
  }

  suma += (suma / 100) * data.objTax.value

  return suma
}

const totalesFamilies = computed(() => {
  let suma = 0
  membershipsFamilies.value.forEach((familiar) => {
    if (
      viewInput(familiar.inputs, 'memberships_id') != '' &&
      viewInput(familiar.inputs, 'recurrences_id') != ''
    ) {
      let subtotal = subtotalFamily({
        membershipCost: membershipCost(
          getValueInput(familiar.inputs, 'recurrences_id')
        ),
        is_initiation_fee: viewInput(familiar.inputs, 'is_initiation_fee'),
        initiation_fee: viewInput(familiar.inputs, 'initiation_fee'),
        objTax: objTax(getValueInput(familiar.inputs, 'memberships_id')),
        prorated: proratedMethod(
          getValueInput(familiar.inputs, 'recurrences_id')
        ).amount,
        discount: getInput(familiar.inputs, 'discount').data,
      })
      suma += subtotal
    }
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
    v-if="viewInput(membershipMember.inputs, 'memberships_id') != ''"
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
          <th scope="col">Discount</th>
          <th scope="col">Taxes</th>
          <th scope="col">Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>
              <b
                >{{ viewInput(membershipMember.member, 'name') }}
                {{ viewInput(membershipMember.member, 'second_name') }}
                {{ viewInput(membershipMember.member, 'last_name') }}</b
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
          <td>
            <span
              v-if="
                !viewInput(membershipMember.inputs, 'is_initiation_fee').length
              "
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
      </tbody>
      <tbody
        v-for="(familiar, keyj) in membershipsFamilies"
        :key="`familiar${keyj}`"
      >
        <tr
          v-if="
            viewInput(familiar.inputs, 'memberships_id') != '' &&
            viewInput(familiar.inputs, 'recurrences_id') != ''
          "
        >
          <td>
            <p>
              <b>
                {{ viewInput(familiar.member, 'name') }}
                {{ viewInput(familiar.member, 'second_name') }}
                {{ viewInput(familiar.member, 'last_name') }}
              </b>
            </p>
          </td>
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
          <td>
            <span
              v-if="!viewInput(familiar.inputs, 'is_initiation_fee').length"
            >
              {{ moneda(viewInput(familiar.inputs, 'initiation_fee')) }}
            </span>
            <span v-else>{{ moneda(0) }}</span>
          </td>
          <td>
            <span v-if="getInput(familiar.inputs, 'discount').data != null">
              <span
                v-if="
                  getInput(familiar.inputs, 'discount').data.type == 'dolar'
                "
              >
                -
                {{
                  moneda(getInput(familiar.inputs, 'discount').data.value)
                }}</span
              >
              <span
                v-if="
                  getInput(familiar.inputs, 'discount').data.type ==
                  'percentaje'
                "
              >
                {{ getInput(familiar.inputs, 'discount').data.value }}%</span
              >
            </span>
            <span v-else>-</span>
          </td>
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
                  is_initiation_fee: viewInput(
                    familiar.inputs,
                    'is_initiation_fee'
                  ),
                  initiation_fee: viewInput(familiar.inputs, 'initiation_fee'),
                  objTax: objTax(
                    getValueInput(familiar.inputs, 'memberships_id')
                  ),
                  prorated: proratedMethod(
                    getValueInput(familiar.inputs, 'recurrences_id')
                  ).amount,
                  discount: getInput(familiar.inputs, 'discount').data,
                })
              )
            }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td style="text-align: right" colspan="8">Total</td>

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
