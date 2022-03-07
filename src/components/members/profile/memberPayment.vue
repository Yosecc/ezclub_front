<script setup lang="ts">
import { computed, ref, reactive, defineProps, defineEmit, watch } from 'vue'
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
import { calcularMeses, getValueInput } from '/@src/models/Mixin.ts'
import moment from 'moment'

import {
  idMember,
  member,
  memberMermship,
  memberMembershipPayments,
} from '/@src/models/Members.ts'

// const props = defineProps({})

const isLoading = ref(false)

const stripeStatus = ref(false)

//  MEMBER //////////////////

const recurrenceAmount = computed(() => {
  return memberMermship.value.membership.amounts.find(
    (e) => e.recurrences_id == memberMermship.value.recurrences_id
  )
})

const prorated = computed(() => {
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0
  let diferencia = 0
  if (memberMermship.value.recurrence.recurrence >= 30) {
    diferencia =
      hoyDay - moment(memberMembershipPayments.value[0].created_at).format('DD')
    calculo = (recurrenceAmount.value.amount / 30) * diferencia
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
  return objTax(memberMermship.value.membership)
})

const membershipCost = computed(() => {
  if (calcularMeses(memberMermship.value.recurrence.recurrence) > 0) {
    return (
      recurrenceAmount.value.amount *
      calcularMeses(memberMermship.value.recurrence.recurrence)
    )
  }
  return recurrenceAmount.value.amount
})

const subtotalMemberMembership = computed(() => {
  let suma = 0
  suma += membershipCost.value
  suma -= prorated.value.amount
  suma = (suma / 100) * tax.value.value + suma

  return suma
})

const total = computed(() => {
  let suma = 0
  suma += subtotalMemberMembership.value
  // suma += totalesFamilies.value
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

// PAGO

const payment = () => {
  stripeStatus.value = true
}
</script>

<template>
  <transition-group name="list" tag="div">
    <VCard class="">
      <table class="table is-hoverable is-striped is-fullwidth">
        <thead>
          <tr>
            <th scope="col">Members</th>
            <th scope="col">Membership Name</th>
            <th scope="col">Recurrence</th>
            <th scope="col">Prorated</th>
            <th scope="col">Membership Cost</th>

            <!-- <th scope="col">Discount</th> -->
            <th scope="col">Taxes</th>
            <th scope="col">Sub Total</th>
          </tr>
        </thead>
        <tbody v-if="member.membership_members != null">
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
            <td>
              <p>{{ memberMermship.membership.name }}</p>
            </td>
            <td>
              <p>{{ memberMermship.recurrence.descriptions }}</p>
            </td>

            <td v-if="memberMermship.is_recurrence">
              <span v-if="memberMermship.recurrence.recurrence >= 30">
                {{ prorated.days }} days : <br />
                - {{ moneda(prorated.amount) }}
              </span>
              <span v-else>-</span>
            </td>
            <td>{{ moneda(membershipCost) }}</td>

            <td>{{ tax.text }}</td>
            <td>{{ moneda(subtotalMemberMembership) }}</td>
          </tr>
          <!-- <tr
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
          </tr> -->
          <tr>
            <td style="text-align: right" colspan="6">Total</td>

            <td class="is-end">
              {{ moneda(total) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between">
        <VButton color="success" @click="stripeStatus = true">
          Card Payment
        </VButton>
        <VButton color="warning"> Cash Payment </VButton>
      </div>
    </VCard>
    <stripeForm
      class=""
      v-if="stripeStatus"
      :url="`new_payment/${memberMermship.id}`"
      :amount="total"
      :id="member.id"
      :member-mermship="memberMermship.id"
    />
  </transition-group>
</template>

<style lang="scss"></style>
