<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
  perpareDataInputs,
} from '/@src/models/Mixin.ts'

import { getDiscounts } from '/@src/models/Discounts.ts'
import { getTrainers } from '/@src/models/Staffs.ts'
import { getCompany, locations } from '/@src/models/Companies.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import { updateSuscripcion } from '/@src/models/Subscriptions'
import moment from 'moment'
const emit = defineEmit(['reload'])
// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const isLoaderActive = ref(false)
const isLoader = ref(false)

const changeLocations = function (event, inputsStep) {
  getLocationsDiciplines(this.model).then((response) => {
    if (response.data.length) {
      setInputValuesData(inputsStep, 'diciplines', response.data)
    }
  })
}

const form = ref([
  {
    typeInput: 'checkboxGroupSimpleEventInput',
    name: 'locations',
    placeholder: 'Locations access',
    text: 'Locations access',
    required: true,
    values: [],
    model: '',
    disabled: false,
    class: 'is-12',
    isLabel: true,
    change: changeLocations,
    click: function () {},
  },
  {
    typeInput: 'DropdownCheckbox',
    name: 'diciplines',
    text: 'Disciplines',
    placeholder: 'Disciplines',
    required: false,
    model: [],
    values: [],
    disabled: false,
    class: 'is-12',
    isLabel: true,
    drop: false,
  },
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    data: null,
    model: '',
    disabled: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'DropdownCheckbox',
    name: 'staff_id',
    placeholder: 'Trainer',
    values: [],
    model: [],
    disabled: false,
    required: false,
    class: 'is-12',
    isLabel: true,
    drop: false,
  },
  {
    typeInput: 'date',
    typeInputDefault: 'date',
    name: 'fecha_vencimiento',
    placeholder: 'Next payment date',
    model: '',
    class: 'is-6',
    isLabel: true,
    required: true,
    // maxDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),
  },
  {
    name: 'payment_type_id',
    typeInput: 'selectData',
    placeholder: 'Payment Type',
    model: '',
    required: true,
    values: [
      { id: 1, name: 'Cash' },
      { id: 3, name: 'Debit automatic' },
    ],
    class: 'is-6',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
])

const config = async () => {
  isLoader.value = true

  getInput(form.value, 'fecha_vencimiento').model = moment(
    props.suscripcion.estado.fecha_vencimiento,
    'YYYY-MM-DD'
  ).format('YYYY-MM-DD')

  getInput(form.value, 'payment_type_id').model =
    props.suscripcion.payment_type_id

  if (
    props.suscripcion.memberships_members &&
    props.suscripcion.memberships_members.diciplines.length
  ) {
    getInput(form.value, 'diciplines').model =
      props.suscripcion.memberships_members.diciplines.map((element) => {
        return element.diciplines_id
      })
  }

  if (props.suscripcion.member && props.suscripcion.member.trainers.length) {
    getInput(form.value, 'staff_id').model =
      props.suscripcion.member.trainers.map((element) => {
        return element.staffs_id
      })
  }

  if (props.suscripcion.discount) {
    getInput(form.value, 'discount').model = props.suscripcion.discount.id
  }

  await getCompany().then((response: any) => {
    setInputValuesData(form, 'locations', locations.value)

    if (
      props.suscripcion &&
      props.suscripcion.memberships_members &&
      props.suscripcion.memberships_members.locaciones.length
    ) {
      const locaciones = props.suscripcion.memberships_members.locaciones.map(
        (element) => {
          return element.companies_locations_id
        }
      )
      getInput(form.value, 'locations').model = locaciones

      getLocationsDiciplines(locaciones).then((response) => {
        if (response.data.length) {
          setInputValuesData(form, 'diciplines', response.data)
        }
      })
    }
  })
  await getDiscounts().then((response: any) => {
    setInputValuesData(form, 'discount', response.data.discounts)
  })
  await getTrainers().then((response: any) => {
    setInputValuesData(form, 'staff_id', response.data)
  })

  isLoader.value = false
}

onMounted(() => {
  config()
})

const onSave = async () => {
  const data = perpareDataInputs(form.value)
  isLoaderActive.value = true
  await updateSuscripcion(props.suscripcion.id, data).then((response) => {
    isLoaderActive.value = false
    emit('reload')
  })
}
</script>

<template>
  <VLoader class="h-100" size="small" :active="isLoader">
    <VCard class="">
      <!-- {{ props.suscripcion }} -->
      <inputsLayaut :inputs-step="form" />
      <VLoader class="h-100" size="small" :active="isLoaderActive">
        <V-Button color="primary" @click="onSave" size="small">Save</V-Button>
      </VLoader>
    </VCard>
  </VLoader>
</template>

<style lang="scss"></style>
