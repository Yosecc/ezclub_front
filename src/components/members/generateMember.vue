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
  // setInputValuesData,
  // setInputModelData,
  // moneda,
  // calcularMeses,
  // getValueInput,
  getInput,
  notyf,
  // monedaDecimal,
  // convertFormData
  perpareDataInputs,
  convertFormData,
} from '/@src/models/Mixin.ts'
saveMember

import {
  saveMember,
  idMemberPrincipal,
  proccessMembership,
} from '/@src/models/Members.ts'

const emit = defineEmit([])

const props = defineProps({
  member: {
    type: Array,
    required: true,
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
})

const setLoading = ref(false)
const idMember = ref(null)
const idMemberMembership = ref(null)
onMounted(() => {
  setLoading.value = false
  isMemberPayment.value = false
})

const save = () => {
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

const isMemberPayment = ref(false)
const PaymentAction = (data) => {
  isMemberPayment.value = true
}

const soyPrincipal = computed(() => {
  if (!getInput(props.member, 'is_family').model) {
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
        color="success"
        @click="processMembershipStatus ? save() : null"
        :style="!processMembershipStatus ? { opacity: '.5' } : {}"
      >
        Process Membership
      </VButton>
    </VLoader>

    <stripeAddCard
      v-if="idMember && !isMemberPayment"
      :amount="props.total"
      :id="idMember"
      :member_membership="idMemberMembership"
      @PaymentAction="PaymentAction"
    />

    <VCard color="success" class="mt-6" v-if="isMemberPayment">
      <p class="title is-4">Payment Success</p>
    </VCard>
  </div>
</template>

<style lang="scss"></style>
