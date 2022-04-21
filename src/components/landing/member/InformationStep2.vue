<script setup lang="ts">
import type { WizardRelatedTo } from '/@src/models/wizard'
import { ref, onMounted } from 'vue'
import {
  currentStep,
  photoInput,
  inputsInformation,
  member,
  onconfirm,
  storeInformation,
} from '/@src/state/wizardStateLandingMembersUpdated'

import {
  notyf,
  getInput,
  perpareDataInputs,
  setInputModelData,
  hasErrors,
} from '/@src/models/Mixin.ts'

const isLoaderActive = ref(false)
const onAddFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error)
    return
  }

  const _file = fileInfo.file as File
  if (_file) {
    getInput(photoInput.value, 'photo').model = _file
  }
}

const onRemoveFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error)
    return
  }

  getInput(photoInput.value, 'photo').model = null
}

onMounted(() => {
  for (var i in member.value) {
    setInputModelData(inputsInformation, i, member.value[i])
  }
})

const onChangeStep = () => {
  const data = perpareDataInputs(inputsInformation.value)

  if (!hasErrors.value) {
    storeInformation(member.value.id, data)
      .then((response) => {
        currentStep.value = 3
        notyf.success('Success')
      })
      .catch((error) => {
        notyf.error(error.response.data)
        console.log(typeof error.response.data)
      })
  }
}
</script>

<template>
  <VCard class="column mx-auto is-5">
    <div class="step-content">
      <div class="step-title mb-4">
        <h2 class="dark-inverted title is-5">Personal Information</h2>
      </div>

      <div class="wizard-types">
        <div class="text-center p-1 pt-4">
          <V-FilePond
            size="small"
            class="profile-filepond"
            name="profile_filepond"
            :chunk-retry-delays="[500, 1000, 3000]"
            label-idle="<i class='lnil lnil-cloud-upload'></i>"
            :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
            :image-preview-height="140"
            :image-resize-target-width="140"
            :image-resize-target-height="140"
            image-crop-aspect-ratio="1:1"
            style-panel-layout="compact circle"
            style-load-indicator-position="center bottom"
            style-progress-indicator-position="right bottom"
            style-button-remove-item-position="left bottom"
            style-button-process-item-position="right bottom"
            @addfile="onAddFile"
            @removefile="onRemoveFile"
          />
          <p>
            <span>Upload a member photo</span><br />
            <span>File size cannot exceed 2MB</span>
          </p>

          <inputsLayaut :inputs-step="inputsInformation" />

          <VLoader style="height: 50px" :active="isLoaderActive">
            <div class="d-flex justify-content-between">
              <VButton
                outlined
                color="danger"
                class="mr-3"
                @click="
                  onconfirm('Rolling back will lose changes')
                    ? (currentStep = 1)
                    : (currentStep = currentStep)
                "
                >Back</VButton
              >
              <VButton color="success" @click="onChangeStep">Continue</VButton>
            </div>
          </VLoader>
        </div>
      </div>
    </div>
  </VCard>
</template>
