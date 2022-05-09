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

import { saveMember, idMemberPrincipal } from '/@src/models/Members.ts'

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
  // proccessMembership()
  const fd = new FormData()
  const memberObject = perpareDataInputs(props.member)

  convertFormData(fd, memberObject)

  for (var i = 0; i < props.contact.length; i++) {
    var item = props.contact[i]
    for (var prop in item) {
      fd.append(`notifications[${i}][${prop}]`, item[prop])
    }
  }

  let memberMembershipFD = perpareDataInputs(props.membresia)
  for (var i in memberMembershipFD) {
    if (i == 'diciplines') {
      let ite = memberMembershipFD[i]
      for (var e = 0; e < ite.length; ++e) {
        fd.append('diciplines[]', ite[e])
      }
    } else {
      fd.append(i, memberMembershipFD[i])
    }
  }

  fd.append('total', props.total)
  fd.append('payment_type_id', 3)

  let categoriesMembersFD = perpareDataInputs(props.categoriesMembers, {
    array: false,
  })
  for (var i in categoriesMembersFD) {
    fd.append(i, categoriesMembersFD[i])
  }

  let notasInputFD = perpareDataInputs(props.notasInput)
  for (var i in notasInputFD) {
    fd.append(i, notasInputFD[i])
  }

  fd.append('presupuesto_id', props.presupuesto_id)

  if (idMemberPrincipal.value) {
    fd.append('id_principal', idMemberPrincipal.value)
  }

  saveMember(fd)
    .then((response) => {
      idMember.value = response.data.id
      idMemberMembership.value = response.data.membership_members_id
      setLoading.value = false
      if (soyPrincipal.value) {
        idMemberPrincipal.value = idMember.value
      }
    })
    .catch((error) => {
      setLoading.value = false
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
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
