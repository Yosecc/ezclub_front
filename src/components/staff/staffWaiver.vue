<script setup lang="ts">
import { ref, computed, defineProps, watch } from 'vue'
import { inputsSign, staff, storeWaiverStaff } from '/@src/models/Staffs.ts'

import { setInputModelData, notyf } from '/@src/models/Mixin.ts'

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save', 'back'],
  },
  step: {
    type: Number,
    default: 1,
  },
})

const waivers = ref([
  {
    name: 'Waiver_010221.pdf',
    url: '',
  },
])

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new staff',
      subtitle: 'Add Waiver',
    }
  }
  return {
    title: 'Edit staff waiver',
    subtitle: 'Edit Waiver',
  }
})

const onSign = (base64) => {
  storeWaiverStaff(base64, staff.value.id)
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
</script>

<template>
  <formLayaut :buttons="props.buttons" :step="props.step" :titles="titles">
    <signComponent
      v-if="staff"
      @onSign="onSign"
      :is-sign="props.type == 'create' ? true : false"
      :waiver="`waiver_${staff.id}.pdf`"
      :url-waiver="`staffs/generateWeiver/${staff.id}`"
    />
  </formLayaut>
</template>

<style lang="scss" scope></style>
