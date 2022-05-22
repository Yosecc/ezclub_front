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
  getInput,
  notyf,
  perpareDataInputs,
  convertFormData,
} from '/@src/models/Mixin.ts'

import {
  saveMember,
  idMemberPrincipal,
  proccessMembership,
  storeFirma,
  FormaLizar,
  storePaymentCash,
  storeNewMembership,
} from '/@src/models/Members.ts'

const emit = defineEmit(['PaymentAction'])

const props = defineProps({
  member: {
    type: Array,
    required: true,
  },
  member_id: {
    type: Number,
    default: 0,
  },
  membresia: {
    type: Array,
    required: true,
  },
  contact: {
    type: Array,
    required: true,
  },
  presupuesto_id: {
    type: String,
  },
  total: {
    type: [String, Number],
    required: true,
  },
  categoriesMembers: {
    type: Object,
    required: true,
  },
  notasInput: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: 'create',
  },
})

const paymentMethod = ref(null)
const setLoading = ref(false)
const idMember = ref(null)
const idMemberMembership = ref(null)

onMounted(() => {
  setLoading.value = false
  isMemberPayment.value = false
})

const save = () => {
  paymentMethod.value = null
  setLoading.value = true
  idMember.value = null
  idMemberMembership.value = null

  proccessMembership({
    member: props.member,
    contact: props.contact,
    membresia: props.membresia,
    total: props.total,
    categoriesMembers: props.categoriesMembers,
    notasInput: props.notasInput,
    presupuesto_id: props.presupuesto_id,
  })
    .then((response) => {
      idMember.value = response.data.id
      idMemberMembership.value = response.data.membership_members_id
    })
    .catch((error) => {})
  setLoading.value = false
}

const newMembership = () => {
  paymentMethod.value = null
  setLoading.value = true

  idMember.value = props.member.id
  idMemberMembership.value = null

  const data = perpareDataInputs(props.membresia)
  data.members_id = props.member_id
  data.total = props.total
  data.payment_type_id = 3

  storeNewMembership(data)
    .then((response) => {
      idMember.value = response.data.id
      idMemberMembership.value = response.data.membership_members_id
      notyf.success('Success')
      setLoading.value = false
    })
    .catch((error) => {
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}

const isMemberPayment = ref(false)
const PaymentAction = (idMember) => {
  isMemberPayment.value = true
  emit('PaymentAction', idMember)
}

const soyPrincipal = computed(() => {
  if (getInput(props.member, 'is_family').model == 0) {
    return true
  }
  return false
})

const processMembershipStatus = computed(() => {
  if (!isMemberPayment.value) {
    if (!soyPrincipal.value && !idMemberPrincipal.value) {
      return false
    }
    return true
  } else {
    return false
  }
})

const onSign = (base64) => {
  storeFirma(base64, idMemberMembership.value)
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

const onPaymentCash = (obj) => {
  paymentMethod.value = 1
  if (idMemberMembership.value) {
    const datos = {
      cash: obj.cash,
      payment_type_id: paymentMethod.value,
      total: props.total,
      cash_back: obj.changeBack,
      membership_member_id: idMemberMembership.value,
    }
    storePaymentCash(idMemberMembership.value, datos)
      .then((response) => {
        PaymentAction(idMember.value)
        notyf.success('Success Payment')
      })
      .catch((error) => {
        console.log(error.response)
      })
  } else {
    notyf.error(
      'The membership ID is required. Click on Process Membership to generate it automatically'
    )
  }
}

const subscribir = (payment_method) => {
  setLoading.value = true
  FormaLizar({
    payment_method: payment_method,
    amount: props.total,
    user_id: idMember.value,
    membership_member_id: idMemberMembership.value,
    payment_type_id: 3,
  })
    .then((response) => {
      PaymentAction(idMember.value)
      notyf.success('Success')
      setLoading.value = false
    })
    .catch((error) => {
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}
</script>

<template>
  <div class="w-100">
    <div class="my-4">
      <p>
        {{ getInput(props.member, 'name').model }}
        {{ getInput(props.member, 'last_name').model }}
      </p>
      <p>
        <small>{{ soyPrincipal ? 'Main member' : 'Family' }}</small>
      </p>

      <p v-if="!soyPrincipal && !idMemberPrincipal">
        <small>Register the principal first</small>
      </p>
    </div>

    <VLoader size="small" :active="setLoading">
      <VButton
        v-if="props.type == 'create'"
        color="success"
        @click="processMembershipStatus ? save() : null"
        :style="!processMembershipStatus ? { opacity: '.5' } : {}"
      >
        Process Membership
      </VButton>
      <VButton v-else color="success" @click="newMembership">
        Process Membership
      </VButton>
    </VLoader>

    <!-- <p>{{ paymentMethod }}</p> -->
    <div
      v-if="idMember && !isMemberPayment"
      class="columns is-multiline justify-content-center mt-6"
    >
      <VCard
        color="info"
        class="mx-2 btn-card w-100 column is-4"
        :style="paymentMethod == 1 ? { opacity: '0.4' } : {}"
        @click="paymentMethod = 3"
      >
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <p class="title is-3">
              <i class="fas fa-credit-card" aria-hidden="true"></i>
            </p>
            <p class="title is-5">Debit Automatic</p>
          </div>
          <p v-if="paymentMethod == 3" class="title is-6">
            <i class="fas fa-check" aria-hidden="true"></i>
          </p>
        </div>
      </VCard>

      <memberCheckoutCash :total="props.total" @onPaymentCash="onPaymentCash" />
    </div>

    <div class="columns is-multiline justify-content-center mt-6">
      <memberCheckoutRecibo
        v-if="idMemberMembership && isMemberPayment"
        :membership_member="idMemberMembership"
      />
    </div>

    <MemberCards
      v-if="paymentMethod == 3 && !isMemberPayment"
      :show-new-card="false"
      :memberid="idMember"
      @onMethodPayment="subscribir"
    />

    <stripeAddCard
      v-if="paymentMethod == 3 && !isMemberPayment"
      :amount="props.total"
      :id="idMember"
      :member_membership="idMemberMembership"
      @PaymentAction="PaymentAction(idMember)"
    />

    <VCard color="success" class="my-6" v-if="isMemberPayment">
      <p class="title is-4">Payment Success</p>
    </VCard>

    <signComponent
      v-if="isMemberPayment"
      @onSign="onSign"
      :is-sign="true"
      :contract="`contract_${idMember}_${idMemberMembership}_${
        getInput(props.member, 'personal_identifications').model
      }.pdf`"
      :url-contract="`generateContract/${idMember}`"
    />
  </div>
</template>

<style lang="scss"></style>
