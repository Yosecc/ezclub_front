<script setup lang="ts">
import { computed, ref, defineProps, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
import {
  inputs,
  saveMembership,
  putMembership,
} from '/@src/models/Memberships.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputValuesData,
  viewInput,
  notyf,
  perpareDataInputs,
  cleanUpModelInputs,
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
  return inputs.value.find((element) => element.name == 'locations_options')
})

const locations = computed(() => {
  return inputs.value.find((element) => element.name == 'locations')
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
  })
}

const diciplines = computed(() => {
  return inputs.value.find((element) => element.name == 'diciplines')
})

watch(diciplines.value, (to) => {
  let number = parseFloat(viewInput(inputs.value, 'diciplines_number'))
  if (!isNaN(number)) {
    if (to.model.length > number) {
      notyf.error('You must select a limit of ' + number + ' diciplines')
    }
  }
})

const saveData = () => {
  let data = perpareDataInputs(inputs.value)
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

  let amountsData = []
  let obj = data.amounts
  for (var i in obj) {
    amountsData.push({
      recurrences_id: parseFloat(i),
      amount: parseFloat(obj[i]),
    })
  }
  data.amounts = amountsData

  if (props.type == 'create') {
    saveMembership(data)
      .then((response) => {
        cleanUpModelInputs(inputs.value)
        router.back()
      })
      .catch((error) => {
        for (var i in error.response.data.rerrores) {
          error.response.data.rerrores[i].forEach((e) => {
            notyf.error(e)
          })
        }
      })
  } else {
    console.log('este es')
    console.log(data)
    putMembership(route.query.id, data).then((response) => {
      notyf.success('Success')
    })

    // .catch((error) => {
    //   for (var i in error.response.data.rerrores) {
    //     error.response.data.rerrores[i].forEach((e) => {
    //       notyf.error(e)
    //     })
    //   }
    // })
  }
}
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :titles="titles"
    :is-loading="isLoading"
    @saveData="saveData"
  >
    <inputsLayaut :inputs-step="inputs" />
  </formLayaut>
</template>

<style lang="scss">
// @import '../../scss/abstracts/_variables.scss';
// @import '../../scss/abstracts/_mixins.scss';
</style>
