<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'
import { moneda } from '/@src/models/Mixin.ts'
// import { order } from '/@src/models/Store.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
import moment from 'moment'
onMounted(async () => {
  let id = route.query.id

  await Api.get(`ticket_membership/${id}`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      notyf.error(error.response.data)
    })
})

// watch(
//   () => recibo.value,
//   () => {
//     setTimeout(() => {
//       window.print()
//     }, '1000')
//   }
// )

const print = () => {
  window.print()
}
</script>

<template>
  <div class="p-0">
    <div id="print" class="justify-content-center d-flex w-100 mt-4">
      <VButton @click="print">Print</VButton>
    </div>
  </div>
</template>

<style lang="scss" media="print" scoped>
body,
html {
  margin: 0px;
  width: 15cm;
}
</style>
