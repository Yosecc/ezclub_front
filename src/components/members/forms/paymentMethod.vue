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
} from '/@src/models/Mixin.ts'

import {
  // member,
  // idMember,
  // idMemberMembership,
  inputsMembership,
  // storeFirma,
  // error,
  getPresupuesto,
  mismatarjeta,
  dataContact,
  categoriesMembers,
  notasInput,
  // familiaresMembers
} from '/@src/models/Members.ts'

const emit = defineEmit(['changeStep', 'returnData'])

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  title: {
    type: String,
    default: '',
  },
})

const setLoading = ref(false)
const isLoading = ref(false)
const presupuestos = ref([])

//  MEMBER //////////////////

const membershipMember = computed(() => {
  return inputsMembership.value[0]
})

// FAMILY ///////////////////

const membershipsFamilies = computed(() => {
  let data = []
  inputsMembership.value.forEach((e, index) => {
    if (index > 0) {
      data.push(e)
    }
  })
  return data
})

onMounted(() => {
  getInput(mismatarjeta.value, 'mismatarjeta').change =
    pagarConDiferentesTarjetas
  presupuestos.value = []
  if (membershipMember.value) {
    generaPresupuesto(
      membershipMember.value.membresia,
      membershipMember.value.member
    )

    if (membershipsFamilies.value.length) {
      membershipsFamilies.value.forEach((e) => {
        generaPresupuesto(e.membresia, e.member)
      })
    }
  } else {
    console.error('No tiene membresia')
    notyf.error('Membership is required')
  }
})

const pagarConDiferentesTarjetas = function () {
  // console.log(this.model)
  if (!this.model) {
  } else {
  }
}

const Objectforthebudget = (inputs) => {
  return {
    memberships_id: getInput(inputs, 'memberships_id').model,
    recurrences_id: getInput(inputs, 'recurrences_id').model,
    is_initiation_fee:
      getInput(inputs, 'is_initiation_fee').model.length == 0 ? true : false,
    discount: getInput(inputs, 'discount').data
      ? getInput(inputs, 'discount').data.code
      : null,
  }
}

const generaPresupuesto = async (membresia, member) => {
  let data = {
    ...Objectforthebudget(membresia),
  }

  getPresupuesto(data)
    .then((response) => {
      presupuestos.value.push({
        ...response.data,
        member: member,
        membresia: membresia,
      })
    })
    .catch((error) => {
      for (var e in error.response.data) {
        error.response.data[e].forEach((i) => {
          notyf.error(`${e}: ${i}`)
        })
      }
    })
}

const change = (val, payment = 3, total) => {
  let obj = {
    total,
  }
  emit('returnData', obj)
  emit('changeStep', val, payment, {})
}

const presupuestoComputed = computed(() => {
  return presupuestos.value.sort((a, b) => {
    if (getInput(a.member, 'is_family').model == 0) {
      return -1
    } else {
      return 1
    }
    return 0
  })
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
    <div class="d-flex justify-content-end align-items-center mb-4">
      <!-- <inputsLayaut :inputs-step="mismatarjeta" /> -->
      <VButton @click="PaymentAllMembership" color="primary"
        >Pay all memberships</VButton
      >
    </div>
    <div v-if="presupuestos">
      <Presupuesto
        v-for="(presupuesto, key) in presupuestoComputed"
        :key="`presupuesto-${key}`"
        class="mb-4"
        :presupuesto="presupuesto"
      >
        <div class="d-flex justify-content-end w-100">
          <generateMember
            :member="presupuesto.member"
            :membresia="presupuesto.membresia"
            :contact="dataContact"
            :presupuesto_id="presupuesto.presupuesto_id"
            :categories-members="categoriesMembers"
            :notas-input="notasInput"
            :total="presupuesto.totales.upfront.amount_total"
          />
        </div>
      </Presupuesto>
    </div>
  </formLayaut>
</template>

<style lang="scss"></style>
