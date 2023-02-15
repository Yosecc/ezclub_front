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
import { viewInput, getInput, notyf } from '/@src/models/Mixin.ts'

import {
  inputsMembership,
  getPresupuesto,
  mismatarjeta,
  dataContact,
  categoriesMembers,
  notasInput,
  proccessMembership,
  generaPresupuesto,
  presupuestos,
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

const change = (val, payment = 3, total) => {
  let obj = {
    total,
  }
  emit('returnData', obj)
  emit('changeStep', val, payment, {})
}

const presupuestoComputed = computed(() => {
  let arr = []
  presupuestos.value.forEach((e) => {
    if (getInput(e.member, 'is_family').model == 0) {
      arr.push(e)
    }
  })
  presupuestos.value.forEach((e) => {
    if (getInput(e.member, 'is_family').model == 1) {
      arr.push(e)
    }
  })
  return arr
})

const miembrosNuevos = ref([])

const PaymentAllMembership = async () => {
  const princial = presupuestoComputed.value.find(
    (e) => getInput(e.member, 'is_family').model == 0
  )

  await proccessMembership({
    member: princial.member,
    membresia: princial.membresia,
    contact: dataContact.value,
    presupuesto_id: princial.presupuesto_id,
    categoriesMembers: categoriesMembers.value,
    notasInput: notasInput.value,
    total: princial.totales.upfront.amount_total,
  })
    .then((response) => {
      miembrosNuevos.value.push({
        idMember: response.data.id,
        idMemberMembership: response.data.membership_members_id,
        principal: true,
      })

      presupuestoComputed.value.forEach((presupuesto) => {
        if (getInput(presupuesto.member, 'is_family').model != 0) {
          proccessMembership({
            member: presupuesto.member,
            membresia: presupuesto.membresia,
            contact: dataContact.value,
            presupuesto_id: presupuesto.presupuesto_id,
            categoriesMembers: categoriesMembers.value,
            notasInput: notasInput.value,
            total: presupuesto.totales.upfront.amount_total,
          }).then((response) => {
            miembrosNuevos.value.push({
              idMember: response.data.id,
              idMemberMembership: response.data.membership_members_id,
              principal: false,
            })
          })
        }
      })

      console.log('ya cargo', miembrosNuevos.value)
    })
    .catch((error) => {
      console.log('ya error', error)
    })
}

const reloa = () => {
  window.location.reload()
}

const membersPagados = ref([])

const PaymentAction = (idMember) => {
  membersPagados.value.push(idMember)
}
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :is-loading="isLoading"
    :buttons="['prev']"
    :step="5"
    @changeStep="change"
  >
    <!-- <div class="d-flex justify-content-end align-items-center mb-4">

      <VButton @click="PaymentAllMembership" color="primary"
        >Pay all memberships</VButton
      >

      <div v-if="miembrosNuevos.length">
        <stripeAddCard
          :amount="props.total"
          :id="miembrosNuevos[0].idMember"
          :member_membership="miembrosNuevos[0].idMemberMembership"
          :variosMiembros="true"
          :miembros="miembrosNuevos"
          @PaymentAction="PaymentAction"
        />
      </div>
      
    </div> -->

    <VPlaceload height="300px" class="mb-4" v-if="!presupuestos.length" />
    <div v-if="presupuestos">
      <Presupuesto
        v-for="(presupuesto, key) in presupuestoComputed"
        :key="`presupuesto-${key}`"
        class="mb-4"
        :presupuesto="presupuesto"
      >
        <div class="d-flex justify-content-end w-100">
          <p>{{ presupuesto.presupuesto_id }}</p>
          <generateMember
            :member="presupuesto.member"
            :membresia="presupuesto.membresia"
            :contact="dataContact"
            :presupuesto_id="presupuesto.presupuesto_id"
            :categories-members="categoriesMembers"
            :notas-input="notasInput"
            :total="presupuesto.total"
            :presupuesto="presupuesto"
            @PaymentAction="PaymentAction"
          />
        </div>
      </Presupuesto>
    </div>

    <div class="d-flex justify-content-between w-100">
      <VButton
        v-if="
          presupuestoComputed.length > 0 &&
          membersPagados.length == presupuestoComputed.length
        "
        color="danger"
        :to="{ name: 'index' }"
      >
        Finish
      </VButton>
      <VButton v-else color="danger" :to="{ name: 'index' }"> Cancel </VButton>

      <VButton
        v-if="
          presupuestoComputed.length > 0 &&
          membersPagados.length == presupuestoComputed.length
        "
        color="success"
        @click="reloa"
      >
        Register another member
      </VButton>
    </div>
  </formLayaut>
</template>

<style lang="scss"></style>
