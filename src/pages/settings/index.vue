<script setup lang="ts">
// import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { onMounted, watch, ref,computed } from 'vue'
import { company } from '/@src/models/Companies.ts'
</script>


<template>
  <settingLayaout>
    <SettingsProfileCompany 
      :company="company"
     />
  </settingLayaout>
</template>