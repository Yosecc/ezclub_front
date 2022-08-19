<script setup lang="ts">
// define props
import { defineProps, ref } from 'vue'

const props = defineProps({
  isLoaderActive: Boolean,
})

const openModal = ref(false)

const handleModal = () => {
  openModal.value = !openModal.value
}
</script>
<template>
  <VLoader class="h-100 w-100" size="small" :active="isLoaderActive">
    <VCard
      :color="undefined"
      outlined
      @click="handleModal"
      class="
        mr-4
        btn-card
        text-center
        px-2
        h-100
        d-flex
        align-items-center
        justify-content-center
      "
      style="font-size: 12px"
    >
      <p>
        <b>Upgrade Subscription</b>
      </p>
    </VCard>

    <updateSubscriptionModal :open="openModal" @closeModal="handleModal()" />
  </VLoader>
</template>
