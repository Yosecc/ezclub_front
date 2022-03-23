<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { watchEffect, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const defaultLocale = useStorage(
  'locale',
  (navigator && navigator.language) || 'en'
)

import { Api, PUBLIC_KEY_STRIPE } from '/@src/services'
import { user } from '/@src/pages/auth/auth.ts'

watch(user, () => {
  if (user.value != null) {
    Api.defaults.headers.common['x-api-key'] = user.value.token
    PUBLIC_KEY_STRIPE.value = user.value.key_stripe_public
  }
})

watchEffect(() => {
  if (user.value != null) {
    Api.defaults.headers.common['x-api-key'] = user.value.token
    PUBLIC_KEY_STRIPE.value = user.value.key_stripe_public
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
