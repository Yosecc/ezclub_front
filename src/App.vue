<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { watchEffect, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const defaultLocale = useStorage(
  'locale',
  (navigator && navigator.language) || 'en'
)

import { Api } from '/@src/services'
import { user } from '/@src/pages/auth/auth.ts'

watch(user, ()=>{
  if(user.value != null){
    Api.defaults.headers.common['x-api-key'] = user.value.token;
  }
})

watchEffect(() => {
  if(user.value != null){
    Api.defaults.headers.common['x-api-key'] = user.value.token;
  }
  defaultLocale.value = i18n.locale.value
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
