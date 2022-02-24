<script setup lang="ts">
import { computed, defineProps, ref, onMounted, defineEmit } from 'vue'
import VueDrawingCanvas from 'vue-drawing-canvas'
import { Api } from '/@src/services'

onMounted(() => {
  // var canvasElm = document.querySelector('canvas')
  // canvasElm.setAttribute('tabindex', '0')
  // canvasElm.focus()
})

const emit = defineEmit(['onSign'])

const props = defineProps({
  // input: {
  //   type: Object,
  //   required: false,
  // },
})

const firmado = ref(false)

const firma = ref(null)
const VueCanvasDrawing = ref()

const viewFirma = async () => {
  let base64 = VueCanvasDrawing.value.save()
  firma.value = base64
  // load.value = true

  emit('onSign', base64)

  firmado.value = true

  return
}
</script>

<template>
  <!-- <p>{{ inputsStep }}</p> -->
  <!--  <inputsLayaut
    :inputsStep="inputsStep"
  /> -->

  <V-Card radius="small">
    <div class="columns is-multiline">
      <div class="d-flex justify-content-center column is-12 mb-4">
        <div class="text-center mr-6">
          <a
            target="_blank"
            :href="`https://dev-api.ushuaiacreative.com/generateContract/`"
          >
            <img src="/public/images/pdf_icon.png" width="40" alt="" />
            <p>
              <!-- contract_{{ member.id }}_{{ member.membership_members.id }}_{{
                member.personal_identifications
              }}.pdf -->
            </p>
            <V-Button color="success" outlined class="mt-4 py-1">
              View PDF
            </V-Button>
          </a>
        </div>

        <div class="text-center ml-6">
          <a
            target="_blank"
            :href="`https://dev-api.ushuaiacreative.com/generateWeiver/`"
          >
            <img src="/public/images/pdf_icon.png" width="40" alt="" />
            <p>
              <!-- weiver_{{ member.id }}_{{ member.membership_members.id }}_{{
                member.personal_identifications
              }}.pdf -->
            </p>
            <V-Button color="success" outlined class="mt-4 py-1">
              View PDF
            </V-Button>
          </a>
        </div>
      </div>

      <VPlaceload
        v-if="props.load && !firmado"
        width="400px"
        height="135px"
        style="margin-top: 10px"
        class="mx-auto"
      />

      <div v-if="props.firmado" class="text-center mb-4 mt-5 mx-auto">
        <p class="mb-4 title is-5">Saved signature</p>
        <img :src="firma" width="400" height="135" alt="" />
      </div>

      <div class="column is-12 mx-auto d-flex justify-content-center">
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
      </div>
    </div>
  </V-Card>
</template>
