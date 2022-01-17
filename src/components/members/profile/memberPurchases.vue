<script setup lang="ts">

import { ref } from 'vue'


</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
        Purchases History
        </h1>
        <p>Edit member's purchases history</p>
      </div>
    </template>
    <template #header-right>
    </template>
    <template #content>
     <div class="p-6">
  
      <div class="mt-4">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">TIME</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">PAYMENT TYPE</th>
              <th scope="col">ITEMS</th>

            </tr>
          </thead>
          <tbody>

            <tr v-for="i in 20">
              <td>01/01/2021</td>
              <td>12:00 pm</td>
              <td>${{ i }}07</td>
              <td>****** 4787</td>
              <td>Gym Access Membership</td>
            </tr>
            
          </tbody>
        </table>
      </div>

        
      </div>

    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>