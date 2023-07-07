<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from 'vue'
import { inputsInformation, putInformation, member } from '/@src/models/Members'
import { memberProcess } from '/@src/models/v2/Members'
import { perpareDataInputs, notyf, getInput } from '/@src/models/Mixin'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  category: {
    type: String,
    default: 'Adult',
  },
  suscripcion: {
    type: Object,
    default: null,
  },
  user: {
    type: Object,
    default: null,
  },
})

onMounted(() => {
  // console.log(props.user)
  if (props.suscripcion && props.user) {
    getInput(inputsInformation.value, 'email').model = props.user.email
    getInput(inputsInformation.value, 'email').disabled = true
    getInput(inputsInformation.value, 'country_id').model = 34
  }
  console.log(getInput(inputsInformation.value, 'category'))
})

const isProspect = computed(() => {
  if (props.category == 'Prospect') {
    return true
  }
  return false
})

const isLoaderActive = ref(false)
const onSave = () => {
  isLoaderActive.value = true
  let data = perpareDataInputs(inputsInformation.value)
  let fd = new FormData()

  for (var i in data) {
    fd.append(i, data[i])
  }

  if (member.value) {
    putInformation(fd)
      .then((response) => {
        notyf.success('Edit Success')
        isLoaderActive.value = false
      })
      .catch((error) => {
        isLoaderActive.value = false
      })
  } else {
    if (props.suscripcion) {
      fd.append('suscripcion_id', props.suscripcion.id)
    }
    memberProcess(fd)
      .then((response) => {
        notyf.success('Success')
        isLoaderActive.value = false
        console.log(response.data.member.id)
        router.push({
          name: 'members-profile',
          query: {
            id: response.data.member.id,
          },
          hash: '#susbcriptionIndex',
        })
      })
      .catch((error) => {
        isLoaderActive.value = false
      })
  }
}

// const camposMenor = [ '','','','','','','','' ]

const inputsFiltrados = computed(() => {
  console.log('personal', inputsInformation.value)
  return inputsInformation.value.filter((input) =>
    input.categories.includes(props.category)
  )
})
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
      <VLoader size="small" :active="isLoaderActive">
        <VButton @click="onSave" color="primary"> Save Changes </VButton>
        <VButton v-if="props.category == 'Prospect'" color="info" class="ml-3">
          Convert to Members
        </VButton>
      </VLoader>
    </template>
    <template #content>
      <inputsLayaut
        v-if="props.category == 'Minor'"
        :inputs-step="inputsFiltrados"
      />
      <inputsLayaut v-else :inputs-step="inputsInformation" />
      <!-- <p>{{ inputsInformation }}</p> -->
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
