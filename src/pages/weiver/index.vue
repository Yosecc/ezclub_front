<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, onMounted } from 'vue'
import { inputs, getDiciplines } from '/@src/models/Weiver'
import { setInputValuesData } from '/@src/models/Mixin'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Weiver'
useHead({
  title: 'Weiver',
})

import { useWindowScroll } from '@vueuse/core'
const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const date = ref(new Date())
const { y } = useWindowScroll()
const isStuck = computed(() => {
  return y.value > 30
})

const firmar = ref(false)

onMounted(() => {
  getDiciplines().then((response) => {
    setInputValuesData(inputs, 'dicipline_id', response)
    console.log(response)
  })
})
</script>

<template>
  <MinimalLayout>
    <div class="page-content-inner mb-6">
      <img
        src="/@src/assets/logo_negative.svg"
        width="250"
        class="d-block mr-auto ml-auto py-6"
        alt=""
      />
      <form class="form-layout" @submit.prevent>
        <div class="form-outer">
          <div
            :class="[isStuck && 'is-stuck']"
            class="form-header stuck-header"
          >
            <div class="form-header-inner">
              <div class="left">
                <h3>Sign Weiver</h3>
              </div>
            </div>
          </div>

          <div class="form-body mb-6">
            <div v-if="!firmar">
              <inputsLayaut :inputs-step="inputs" />

              <V-Button color="primary" @click="firmar = true" bold raised>
                Continue
              </V-Button>
            </div>
            <div v-if="firmar">
              <p class="title is-6 mt-6">Please sign in the box below</p>
              <div class="d-flex justify-content-center mt-6 mb-6">
                <firma />
              </div>
              <div class="d-flex justify-content-center mt-4 mb-6">
                <V-Button color="primary" bold raised> Sign and send </V-Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_forms.scss';

.textarea {
  border-color: rgba(45, 45, 49, 0.3) !important;
}
</style>
