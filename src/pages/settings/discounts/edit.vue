<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { getDiscount, inputs } from '/@src/models/Discounts.ts'
import { setInputModelData } from '/@src/models/Mixin.ts'
import moment from 'moment'
const route = useRoute()

pageTitle.value = 'New Discount'

useHead({
  title: 'Discounts',
})

onMounted(() => {
  getDiscount(route.query.id).then((response) => {
    for (var i in response.data) {
      if (i == 'date_start') {
        setInputModelData(
          inputs,
          i,
          moment(response.data[i]).format('YYYY-MM-DD')
        )
        setInputModelData(
          inputs,
          'time_start',
          moment(response.data[i]).format('HH:mm:ss')
        )
      } else if (i == 'date_expired') {
        setInputModelData(
          inputs,
          i,
          moment(response.data[i]).format('YYYY-MM-DD')
        )
        setInputModelData(
          inputs,
          'time_expired',
          moment(response.data[i]).format('HH:mm:ss')
        )
      } else {
        setInputModelData(inputs, i, response.data[i])
      }
    }
  })
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <discountForm type="edit" />
    </div>
  </SidebarLayout>
</template>
