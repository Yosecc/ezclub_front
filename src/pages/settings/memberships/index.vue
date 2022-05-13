<script setup lang="ts">
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { company } from '/@src/models/Companies.ts'
import { onMounted, watch, ref, computed } from 'vue'
import { memberships, getMeberships } from '/@src/models/Memberships.ts'

const isLoading = ref(false)
onMounted(() => {
  getMeberships().then((response) => {
    if (response.data.status) {
      isLoading.value = true
    }
  })
})
</script>

<template>
  <settingLayaout title="Memberships">
    <VPlaceload v-if="!isLoading" height="500px" />
    <membershipsList v-if="isLoading" :memberships="memberships" />
  </settingLayaout>
</template>
