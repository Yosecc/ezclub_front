<script setup lang="ts">
import { computed, defineProps, ref, onMounted } from 'vue'
import VueDrawingCanvas from 'vue-drawing-canvas'
import { Api, API_WEB_URL } from '/@src/services'

onMounted(() => {
  // var canvasElm = document.querySelector('canvas')
  // console.log(canvasElm)
  // canvasElm.setAttribute('tabindex', '0')
  // canvasElm.focus()
})
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const load = ref(false)
const firmado = ref(false)

const firma = ref(null)
const VueCanvasDrawing = ref()
const viewFirma = async (base64) => {
  // let base64 = VueCanvasDrawing.value.save()
  firma.value = base64
  load.value = true
  let response = Api.post(`sign/${props.member.membership_members.id}`, {
    sign: base64,
  }).then((response) => {
    firmado.value = true
    load.value = false
  })
  return response
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
      <div
        v-if="!loading"
        class="d-flex justify-content-center column is-12 mb-4"
      >
        <p></p>
        <div class="text-center mr-6">
          <a
            target="_blank"
            :href="`${API_WEB_URL}generateContract/${member.id}`"
          >
            <img src="/public/images/pdf_icon.png" width="40" alt="" />
            <p>
              contract_{{ member.id }}_{{ member.membership_members.id }}_{{
                member.personal_identifications
              }}.pdf
            </p>
            <V-Button color="success" outlined class="mt-4 py-1">
              View PDF
            </V-Button>
          </a>
        </div>

        <div class="text-center ml-6">
          <a
            target="_blank"
            :href="`${API_WEB_URL}generateWeiver/${member.id}`"
          >
            <img src="/public/images/pdf_icon.png" width="40" alt="" />
            <p>
              weiver_{{ member.id }}_{{ member.membership_members.id }}_{{
                member.personal_identifications
              }}.pdf
            </p>
            <V-Button color="success" outlined class="mt-4 py-1">
              View PDF
            </V-Button>
          </a>
        </div>
      </div>

      <!-- <VPlaceload
        v-if="load && !firmado"
        width="400px"
        height="135px"
        style="margin-top: 10px"
        class="mx-auto"
      /> -->

      <!-- <VueDrawingCanvas
        v-if="!firmado && !load"
        class="column is-6 mx-auto"
        ref="VueCanvasDrawing"
        save-as="jpeg"
        width="600"
        height="200"
      /> -->

      <drawingCanvasCustom @sinFirmar="sinFirmar" @onSignYes="viewFirma" />

      <div v-if="firmado" class="text-center mb-4 mt-5 mx-auto">
        <p class="mb-4 title is-5">Saved signature</p>
        <img :src="firma" width="400" height="135" alt="" />
      </div>

      <!-- <div
        v-if="!firmado"
        class="column is-12 mx-auto d-flex justify-content-center"
      >
        <V-Button color="info" class="text-center mx-auto" @click="viewFirma">
          Sign and save
        </V-Button>
        <V-Button
          color="danger"
          class="text-center mx-auto"
          @click="VueCanvasDrawing.reset()"
        >
          Reset
        </V-Button>
      </div> -->
    </div>
  </V-Card>
</template>
