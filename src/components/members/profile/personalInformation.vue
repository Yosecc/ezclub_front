<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import { inputsInformation, putInformation } from '/@src/models/Members.ts'
import { perpareDataInputs, notyf } from '/@src/models/Mixin.ts'

const props = defineProps({
  category: {
    type: String,
    default: 'Adult',
  },
})

const isProspect = computed(() => {
  if (props.category == 'Prospect') {
    return true
  }
  return false
})

const onSave = () => {
  let data = perpareDataInputs(inputsInformation.value)
  let fd = new FormData()

  for (var i in data) {
    if (i == 'id_leo_vet_fr') {
      if (data[i] == null) {
        fd.append(i, 0)
      }
    } else {
      fd.append(i, data[i])
    }
  }

  putInformation(fd).then((response) => {
    notyf.success('Edit Success')
  })
}
</script>

<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Personal Information</h1>
        <p>Edit member's personal information</p>
      </div>
    </template>
    <template #header-right>
      <VButton @click="onSave" color="primary"> Save Changes </VButton>
      <VButton v-if="props.category == 'Prospect'" color="info" class="ml-3">
        Convert to Members
      </VButton>
    </template>
    <template #content>
      <!-- <div class="p-6">
        <h1 class="title is-5 mb-0">Profile Picture</h1>
        <p>This is how other will recognize the member</p>
        <div class="d-flex justify-content-center">
          <div class="text-center">
            <VAvatar picture="https://picsum.photos/150/151" class="mb-4" size="xl"/>
            <inputsLayaut
              :inputs-step="input_image"
            />
          </div>
        </div>
      </div> -->
      <inputsLayaut :inputs-step="inputsInformation" />
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
