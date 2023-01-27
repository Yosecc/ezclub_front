<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, onMounted } from 'vue'
import { inputs, getDiciplines, saveData } from '/@src/models/Weiver'
import {
  setInputValuesData,
  perpareDataInputs,
  hasErrors,
  notyf,
} from '/@src/models/Mixin'
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
const isDisabled = ref(false)
const onFirma = (firma: string) => {
  if (firma == '') {
    alert('error signing. try again')
    return
  }

  let data = perpareDataInputs(inputs.value)
  if (!hasErrors.value) {
    data.firma = firma
    isDisabled.value = true

    saveData(data)
      .then((response) => {
        notyf.success(response.data.message)
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      })
      .catch((error) => {
        isDisabled.value = false
        for (var i in error.response.data) {
          error.response.data[i].forEach((e) => {
            notyf.error(`${i}: ${e}`)
          })
        }
      })
  }
}

const continuar = () => {
  let data = perpareDataInputs(inputs.value)
  if (!hasErrors.value) {
    firmar.value = true
  }
}

onMounted(() => {
  getDiciplines().then((response) => {
    setInputValuesData(inputs, 'dicipline_id', response)
    // console.log(response)
  })
})

const resetFirma = ref(true)

const onResetFirma = () => {
  resetFirma.value = false

  setTimeout(() => {
    resetFirma.value = true
  }, 1)
}
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

              <V-Button color="primary" @click="continuar" bold raised>
                Continue
              </V-Button>
            </div>
            <div v-if="firmar">
              <div class="d-flex justify-content-between">
                <p class="title is-6 mt-2">Please sign in the box below</p>
                <V-Button
                  color="info"
                  size="small"
                  outlined
                  @click="firmar = false"
                >
                  Go back
                </V-Button>
              </div>
              <firma
                @onFirma="onFirma"
                @onReset="onResetFirma"
                :isdisabled="isDisabled"
                v-if="resetFirma"
              />
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
