<script setup lang="ts">
import { computed, defineProps, defineEmit, ref, onMounted } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'

const emit = defineEmit(['onSign'])

const props = defineProps({
  waiver: {
    type: String,
    default: null,
  },
  urlWaiver: {
    type: String,
    default: null,
  },
  contract: {
    type: String,
    default: null,
  },
  urlContract: {
    type: String,
    default: null,
  },
  isSign: {
    type: Boolean,
    default: true,
  },
})

const firmado = ref(false)

const firma = ref(null)

const viewFirma = async (base64) => {
  firma.value = base64
  firmado.value = true
  emit('onSign', base64)
}

import { imgdefault } from '/@src/data/image_default.ts'

const sinFirmar = () => {
  let base64 = imgdefault
  viewFirma(base64)
}
</script>

<template>
  <V-Card radius="small">
    <div class="columns is-multiline">
      <div class="d-flex justify-content-center column is-12 mb-4">
        <div v-if="contract" class="text-center mr-6">
          <a target="_blank" :href="`${API_WEB_URL}${urlContract}`">
            <img src="/public/images/pdf_icon.png" width="40" alt="" />
            <p>
              {{ contract }}
            </p>
            <V-Button color="success" outlined class="mt-4 py-1">
              View PDF
            </V-Button>
          </a>
        </div>

        <div v-if="waiver" class="text-center ml-6">
          <a target="_blank" :href="`${API_WEB_URL}${urlWaiver}`">
            <img src="/public/images/pdf_icon.png" width="40" alt="" />
            <p>
              {{ waiver }}
            </p>
            <V-Button color="success" outlined class="mt-4 py-1">
              View PDF
            </V-Button>
          </a>
        </div>
      </div>

      <drawingCanvasCustom
        v-if="isSign"
        @sinFirmar="sinFirmar"
        @onSignYes="viewFirma"
      />

      <div v-if="firmado" class="text-center mb-4 mt-5 mx-auto">
        <p class="mb-4 title is-5">Saved signature</p>
        <img :src="firma" width="400" height="135" alt="" />
      </div>
    </div>
  </V-Card>
</template>
