<script setup lang="ts">

import { ref } from 'vue'

const waivers = ref([
  {
    name: 'Waiver_010221.pdf',
    url: ''
  },
  {
    name: 'Waiver_010221.pdf',
    url: ''
  },
])

</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
        Waiver
        </h1>
      <p>Edit member's waiver information</p>
      </div>
    </template>
    <template #header-right>
      <VButton color="info"> Convert to Members </VButton>
    </template>
    <template #content>
      <div class="columns is-multiline">
        <div class="column is-2 mb-4"
          v-for="(item, key) in waivers"
            :key="`family-${key}`"
        >
          <div class="border-1 document_box p-4 d-flex justify-content-center radius-small">
              <a href="234" class="text-center">
                <img 
                  style="width: 70px;"
                  src="/public/images/pdf_icon.png"
                  alt="">
                <p>{{ item.name }}</p>
              </a>
          </div>
        </div>
      </div>

    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>

</style>