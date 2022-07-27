<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { company } from '/@src/models/Companies.ts'
import {
  inputsForm,
  getDayPass,
  loading,
  storeProductAndPrice,
  dayPass,
} from '/@src/models/DayPass.ts'
import {
  notyf,
  perpareDataInputs,
  hasErrors,
  getInput,
} from '/@src/models/Mixin.ts'
// import { cart } from '/@src/models/Store.ts'
const isLoading = ref(true)

onMounted(() => {
  getDayPass()

  // cart.value.push({
  //   product_id: 1,
  //   count: 1,
  //   products_amount: dayPass.value.amount,
  //   name: dayPass.value.name,
  //   stock: 999,
  // })
})

const saveData = () => {
  if (!hasErrors.value) {
    storeProductAndPrice()
      .then((response) => {
        getInput(inputsForm.value, 'amount').model = response.data.amount / 100
        getInput(inputsForm.value, 'name').model = response.data.name
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <formLayaut
      :titles="{ title: 'Day Pass' }"
      :is-loading="loading"
      :buttons="['save']"
      @saveData="saveData"
    >
      <inputsLayaut :inputs-step="inputsForm" />
    </formLayaut>
  </SidebarLayout>
</template>
