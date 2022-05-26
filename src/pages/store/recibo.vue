<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'
import { moneda } from '/@src/models/Mixin.ts'
import { order } from '/@src/models/Store.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
import moment from 'moment'
onMounted(async () => {
  let id = route.query.order
  await Api.get(`orders/${id}`)
    .then((response) => {
      order.value = response.data
    })
    .catch((error) => {
      notyf.error(error.response.data)
    })
})

watch(
  () => order.value,
  () => {
    setTimeout(() => {
      window.print()
    }, '1000')
  }
)

const print = () => {
  window.print()
}
</script>

<template>
  <div class="p-0" v-if="order">
    <ReciboComponent :data="order" />
  </div>
</template>
