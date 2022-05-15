<script setup lang="ts">
import { computed, ref, defineProps, onMounted, watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
import {
  inputs,
  inputsRecurrentes,
  inputsUnicos,
  saveMembership,
  putMembership,
  notes,
  inputsConfig,
} from '/@src/models/Memberships.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputValuesData,
  viewInput,
  notyf,
  perpareDataInputs,
  cleanUpModelInputs,
  getInput,
  hasErrors,
} from '/@src/models/Mixin.ts'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save', 'back'],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new membership',
      subtitle: 'Add information for a new club membership',
    }
  }
  return {
    title: 'Edit membership',
    subtitle: 'Edit information for a club membership',
  }
})

const locations_options = computed(() => {
  return inputs.find((element) => element.name == 'locations_options')
})

const locations = computed(() => {
  return inputs.find((element) => element.name == 'locations')
})

watch(locations.value, (to) => {
  changeLocation(to)
})

const changeLocation = (data) => {
  let dat = []
  if (data.model.length > 0) {
    data.model.forEach((element) => {
      let location = data.values.find((e) => e.id == element)

      if (props.type == 'create') {
        dat.push({
          name: 'locationsSaleOrAccess',
          value: location.id,
          placeholder: location.name,
          values: [
            {
              placeholder: 'Access',
              name: 'access',
              model: ['access'],
            },
            {
              placeholder: 'Sale',
              name: 'sale',
              model: ['sale'],
            },
          ],
        })
      }
    })
    setInputValuesData(inputs, 'locations_options', dat)
  }

  getLocationsDiciplines(locations.value.model).then((response) => {
    setInputValuesData(inputs, 'diciplines', response.data)
    getInput(inputs, 'diciplines').values.push({ id: 0, name: 'All' })
  })
}

const diciplines = computed(() => {
  return inputs.find((element) => element.name == 'diciplines')
})

const isLoaderButton = ref(false)
const saveData = () => {
  isLoaderButton.value = true

  let data = {
    ...perpareDataInputs(inputs),
    ...perpareDataInputs(inputsRecurrentes),
    ...perpareDataInputs(inputsUnicos),
    ...perpareDataInputs(notes),
    ...perpareDataInputs(inputsConfig),
  }

  let locationsData = []
  if (props.type == 'create') {
    if (data.locations.length > 0) {
      data.locations.forEach((element) => {
        let option = locations_options.value.values.find(
          (e) => e.value == element
        )
        locationsData.push({
          id: element,
          access: option.values.find((access) => access.name == 'access').model
            .length
            ? 1
            : 0,
          sale: option.values.find((access) => access.name == 'sale').model
            .length
            ? 1
            : 0,
        })
      })
      data.locations = locationsData
      delete data.locations_options
    }
  }

  // console.log(data)
  if (!hasErrors.value) {
    if (props.type == 'create') {
      saveMembership(data)
        .then((response) => {
          // cleanUpModelInputs(inputs)
          isLoaderButton.value = false
          router.back()
        })
        .catch((error) => {
          isLoaderButton.value = false
          if (typeof error.response.data != 'string') {
            for (var i in error.response.data) {
              error.response.data[i].forEach((e) => {
                notyf.error(`${e}: ${i}`)
              })
            }
          } else {
            notyf.error(`${error.response.data}`)
          }
        })
    } else {
      putMembership(route.query.id, data)
        .then((response) => {
          notyf.success('Success')
          isLoaderButton.value = false
        })
        .catch((error) => {
          isLoaderButton.value = false
          if (typeof error.response.data != 'string') {
            for (var i in error.response.data) {
              error.response.data[i].forEach((e) => {
                notyf.error(`${e}: ${i}`)
              })
            }
          } else {
            notyf.error(`${error.response.data}`)
          }
        })
    }
  }
}
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :titles="titles"
    :is-loading="isLoading"
    :is-loader-active="isLoaderButton"
    @saveData="saveData"
  >
    <div class="columns is-multiline">
      <div class="column is-12">
        <inputsLayaut :inputs-step="inputs" />
      </div>
      <div class="column is-6">
        <inputsLayaut :inputs-step="inputsRecurrentes" />
      </div>
      <div class="column is-6">
        <inputsLayaut :inputs-step="inputsUnicos" />
      </div>
      <div class="column is-12">
        <inputsLayaut :inputs-step="inputsConfig" />
      </div>
      <div class="column is-12">
        <inputsLayaut :inputs-step="notes" />
      </div>
    </div>
  </formLayaut>
</template>

<style lang="scss">
// @import '../../scss/abstracts/_variables.scss';
// @import '../../scss/abstracts/_mixins.scss';
</style>
