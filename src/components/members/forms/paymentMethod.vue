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
  viewInput,
  setInputValuesData,
  setInputModelData,
  moneda,
  calcularMeses,
  getValueInput,
  getInput,
  notyf,
  monedaDecimal,
} from '/@src/models/Mixin.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  paymentData,
  flipped,
  optionsCreditCard,
} from '/@src/models/PaymentMethodsData.ts'

import moment from 'moment'
import { Api, API_WEB_URL } from '/@src/services'
import {
  member,
  idMember,
  idMemberMembership,
  inputsMembership,
  storeFirma,
  error,
  getPresupuesto,
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

onMounted(() => {
  generaPresupuesto()
})
const presupuesto = ref(null)
const generaPresupuesto = async () => {
  let data = {
    memberships_id: getInput(membershipMember.value.inputs, 'memberships_id')
      .model,
    recurrences_id: getInput(membershipMember.value.inputs, 'recurrences_id')
      .model,
    is_initiation_fee:
      getInput(membershipMember.value.inputs, 'is_initiation_fee').model
        .length == 0
        ? true
        : false,
  }

  getPresupuesto(data).then((response) => {
    presupuesto.value = response.data
    // console.log(resoponse.data)
  })
}
const isLoading = ref(false)

const emit = defineEmit(['changeStep', 'returnData'])

const change = (val, payment = 3) => {
  let obj = {
    total,
  }
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

  if (viewInput(membershipMember.value.member, 'leo_vet_fr').length) {
    suma -= (suma / 100) * infoMembership.value.descuento_vet
  }

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

  if (data.is_vet) {
    suma -= (suma / 100) * data.discount_vet
  }

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
        is_vet: getInput(familiar.member, 'leo_vet_fr').model.length,
        discount_vet: getValueInput(familiar.inputs, 'memberships_id')
          .descuento_vet,
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
    setLoading.value = false
  }
)

watch(error.value, () => {
  if (!error.value) {
    setLoading.value = false
  }
})

const openModalCash = ref(false)

const cash = ref(0)

const changeBack = computed(() => {
  const calculo = parseFloat(cash.value) - parseFloat(total.value)

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
import { useRouter } from 'vue-router'

const router = useRouter()
const showBootomsPayment = ref(true)
const PaymentAction = (data) => {
  router.push({
    name: 'members-profile',
    query: { id: idMember.value },
    hash: '#memberMembership',
  })

  typePago.value = 0
  showBootomsPayment.value = false
}

const isSign = ref(false)
const onSign = (base64) => {
  storeFirma(base64, idMemberMembership.value).then((response) => {
    notyf.success('Sign Success')
  })
}

const setLoading = ref(false)
const disableSave = ref(false)
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
    <VCard color="success" class="mb-3" v-if="!showBootomsPayment">
      <p class="title is-3">Payment Success</p>
    </VCard>
    <VCard class="mb-4" v-if="presupuesto">
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
            <td>{{ presupuesto.membership.name }}</td>
            <td>{{ presupuesto.quote.computed.recurring.interval }}</td>
            <td>
              {{
                monedaDecimal(
                  presupuesto.quote.computed.recurring.amount_subtotal * 10
                )
              }}
            </td>
            <td style="text-align: right">
              {{
                monedaDecimal(
                  presupuesto.quote.computed.recurring.amount_subtotal * 10
                )
              }}
            </td>
          </tr>
          <tr
            v-if="
              getInput(membershipMember.inputs, 'is_initiation_fee').model
                .length == 0
            "
          >
            <td>{{ presupuesto.membership.name }}</td>

            <td>Initiation Fee</td>
            <td>{{ monedaDecimal(presupuesto.membership.initiation_fee) }}</td>

            <td style="text-align: right">
              {{ presupuesto.membership.initiation_fee }}
            </td>
          </tr>
          <tr style="text-align: right">
            <td colspan="3" style="text-align: right">
              Tax {{ presupuesto.tax.percentage }}%
            </td>
            <td>{{ presupuesto.quote.total_details.amount_tax }}</td>
          </tr>
          <tr style="text-align: right">
            <td colspan="3" style="text-align: right"><b>Subtotal</b></td>
            <td>{{ monedaDecimal(presupuesto.quote.amount_subtotal * 10) }}</td>
          </tr>
          <tr style="text-align: right">
            <td colspan="3" style="text-align: right"><b>Total</b></td>
            <td>{{ monedaDecimal(presupuesto.quote.amount_total * 10) }}</td>
          </tr>
          <tr style="text-align: right">
            <td colspan="3" style="text-align: right">Total recurrente</td>
            <td>
              {{
                monedaDecimal(
                  presupuesto.quote.computed.recurring.amount_total * 10
                )
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </VCard>

    <div v-if="showBootomsPayment" class="d-flex justify-content-between">
      <VLoader size="small" :active="setLoading">
        <VButton
          color="success"
          @click="change(6, 3), (typePago = 3), (setLoading = true)"
        >
          Card Payment
        </VButton>
      </VLoader>
      <!-- <VButton color="warning" @click="openModalCash = true">
        Cash Payment
      </VButton> -->
    </div>

    <!-- <p>{{ idMemberMembership }}</p> -->
    <!-- <stripeForm
      v-if="isStripe"
      :amount="total"
      :id="idMember"
      :member_membership="idMemberMembership"
    /> -->
    <stripeAddCard
      v-if="isStripe"
      :amount="total"
      :id="idMember"
      :member_membership="idMemberMembership"
      @PaymentAction="PaymentAction"
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
          :color="undefined"
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
