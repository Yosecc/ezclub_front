<script setup lang="ts">
import { computed, ref, defineProps, onMounted, watch, defineEmit } from 'vue'
import { useRouter } from 'vue-router'
import {
  notyf,
  perpareDataInputs,
  cleanUpModelInputs,
  viewInput,
  getInput,
  getValueInput,
  setInputValuesData,
  setInputModelData,
  getValuesInput,
} from '/@src/models/Mixin.ts'
import {
  inputsDiciplines,
  inputsTrainers,
  inputsDias,
  inputsFechas,
  inputsMismosHorarios,
  inputsHorarios,
  inputsMismasFechas,
  inputsMismosHorariosTrainer,
  objetoSchedule,
  class_locations,
  storeSchedule,
  getSchedule,
  putSchedule,
  deleteSchedule,
  horario,
} from '/@src/models/Schedule.ts'
import { getDiciplines, diciplinesData } from '/@src/models/Diciplines.ts'
import { locations, getCompany, company } from '/@src/models/Companies.ts'
import { getTrainers, trainers } from '/@src/models/Staffs.ts'
import { API_WEB_URL } from '/@src/services/index.ts'
import { locationsSelect } from '/@src/models/Companies.ts'
import moment from 'moment'
const router = useRouter()
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save'],
  },
  step: {
    type: Number,
    default: 1,
  },
  selectInfoData: {
    type: Object,
    default: null,
  },
  idEvent: {
    type: Number,
    default: null,
  },
})

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new schedule',
      subtitle: 'Add information for a new schedule',
    }
  }
  return {
    title: 'Edit schedule',
    subtitle: 'Edit information for a schedule',
  }
})

const emit = defineEmit(['addEvent', 'deleteEvent'])

watch(
  () => props.idEvent,
  () => {
    if (props.type == 'edit') {
      class_locations.value = []
      cleanUpModelInputs(inputsDiciplines.value)
      getSchedule(props.idEvent)
        .then((response) => {
          getInput(inputsDiciplines.value, 'location_id').model.push(
            horario.value.locations_id
          )
          getInput(inputsDiciplines.value, 'discipline_id').model =
            horario.value.class.dicipline_id
          changeLocations(horario.value.locations_id)
        })
        .catch((error) => {
          console.log(error.response.status)
          if (error.response.status == 404) {
            console.log(props.idEvent)
            // emit('deleteEvent',props.idEvent)
          }
          // console.log()
        })
    }
  }
)

watch(
  () => locations.value,
  () => {
    setInputValuesData(inputsDiciplines, 'location_id', locations.value)
  }
)

watch(
  () => props.selectInfoData,
  () => {
    class_locations.value = []
    cleanUpModelInputs(inputsDiciplines.value)
    if (cookies.get('locations_id') != null) {
      getInput(inputsDiciplines.value, 'location_id').model.push(
        parseFloat(cookies.get('locations_id'))
      )
      changeLocations(cookies.get('locations_id'))
    }
  }
)

const changeLocation = function (value) {
  if (typeof value == 'object') {
    value = this.model
  }
  changeLocations(value)
}

watch(
  () => getInput(locationsSelect.value, 'locations_id').model,
  (to) => {
    changeLocations(to)
  }
)

onMounted(() => {
  getCompany().then((response) => {
    setInputValuesData(locationsSelect, 'locations_id', company.value.locations)
    getInput(locationsSelect.value, 'locations_id').change = changeLocation
    if (cookies.get('locations_id') != null) {
      getInput(locationsSelect.value, 'locations_id').model =
        cookies.get('locations_id')
      changeLocation(cookies.get('locations_id'))
    }
  })
  getDiciplines().then((e) => {
    setInputValuesData(inputsDiciplines, 'discipline_id', diciplinesData.value)
  })
  getInput(inputsDiciplines.value, 'location_id').change = changeLocations
  getInput(inputsDiciplines.value, 'location_id').click = function () {}
  getInput(inputsMismasFechas.value, 'mismasfechas').change = function () {
    if (!getInput(inputsMismasFechas.value, 'mismasfechas').model) {
      mismasFechasTodasLocaciones()
    }
  }

  getTrainers().then((e) => {
    setInputValuesData(inputsTrainers, 'trainers_id', trainers.value)
    // getInput(inputsFechas,'trainers_id').values = trainers.value
  })
})

const changeTrainer = function (event, inputsStep) {
  getValuesInput([this], 'trainers_id').forEach((e) => {
    if (
      class_locations.value
        .find((i) => i.locations_id == this.locations_id)
        .trainers.find((i) => i.staffs_id == e.id) == undefined
    ) {
      class_locations.value
        .find((i) => i.locations_id == this.locations_id)
        .trainers.push({
          locations_id: this.locations_id,
          staffs_id: e.id,
          name: e.name,
        })
    } else {
      if (e.id == event.target.value) {
        class_locations.value
          .find((i) => i.locations_id == this.locations_id)
          .trainers.splice(
            class_locations.value
              .find((i) => i.locations_id == this.locations_id)
              .trainers.findIndex((i) => i.staffs_id == e.id),
            1
          )
      }
    }
  })
}

watch(
  () => getInput(inputsMismasFechas.value, 'mismasfechas').model,
  () => {
    if (getInput(inputsMismasFechas.value, 'mismasfechas').model) {
      mismasFechasTodasLocaciones()
    }
  }
)

const changeLocations = function (event, inputsStep) {
  let id = null
  if (typeof event == 'object') {
    id = event.target.value
  } else {
    id = event
  }

  getValuesInput(inputsDiciplines.value, 'location_id').forEach((e) => {
    if (
      class_locations.value.find((i) => i.locations_id == e.id) == undefined
    ) {
      getInput(
        inputsMismosHorariosTrainer.value,
        'mismoshorariostrainers'
      ).change = mismoshorariostrainers
      getInput(
        inputsMismosHorariosTrainer.value,
        'mismoshorariostrainers'
      ).locations_id = e.id

      let inputsfechas = ref(JSON.parse(JSON.stringify(inputsFechas))).value

      if (props.selectInfoData) {
        getInput(inputsfechas, 'start_date').model = moment(
          props.selectInfoData.start
        ).format('YYYY-MM-DD')
        getInput(inputsfechas, 'start_time').model = moment(
          props.selectInfoData.start
        ).format('HH:mm:ss')
        getInput(inputsfechas, 'end_date').model = moment(
          props.selectInfoData.end
        ).format('YYYY-MM-DD')

        getInput(inputsfechas, 'end_time').model = moment(
          props.selectInfoData.end
        ).format('HH:mm:ss')
      }

      if (props.type == 'edit') {
        if (horario.value != undefined) {
          getInput(inputsfechas, 'start_date').model = moment(
            horario.value.start_date
          ).format('YYYY-MM-DD')
          getInput(inputsfechas, 'start_time').model = moment(
            horario.value.start_date
          ).format('HH:mm:ss')
          getInput(inputsfechas, 'end_date').model = moment(
            horario.value.end_date
          ).format('YYYY-MM-DD')
          getInput(inputsfechas, 'end_time').model = moment(
            horario.value.end_date
          ).format('HH:mm:ss')
          getInput(inputsfechas, 'capacity').model = horario.value.capacity
          getInput(inputsfechas, 'color').model = horario.value.color

          if (horario.value.recurrence.length > 0) {
            getInput(inputsfechas, 'is_recurrence').model = true
            getInput(inputsfechas, 'recurrence').model =
              horario.value.recurrence
            getInput(inputsfechas, 'recurrence').disabled = false
          }
          getInput(inputsfechas, 'type_of_member').model =
            horario.value.type_of_member
          getInput(inputsfechas, 'level').model = horario.value.level
        } else {
          notyf.error('Error Desconocido')
          window.location.reload()
          return
        }
      }

      getInput(inputsfechas, 'start_date').change = cambioFechaLocation
      getInput(inputsfechas, 'end_date').change = cambioFechaLocation
      getInput(inputsfechas, 'capacity').change = cambioFechaLocation
      getInput(inputsfechas, 'end_time').change = cambioFechaLocation
      getInput(inputsfechas, 'start_time').change = cambioFechaLocation
      getInput(inputsfechas, 'is_recurrence').change = function () {
        getInput(inputsfechas, 'recurrence').disabled = this.model
      }
      getInput(inputsfechas, 'recurrence').click = function () {}
      getInput(inputsfechas, 'recurrence').change = function () {
        if (this.model.includes('All')) {
          this.model = this.default
        }
      }

      let inputsTrainersw = ref(
        JSON.parse(JSON.stringify(inputsTrainers.value[0]))
      ).value
      inputsTrainersw.change = changeTrainer
      inputsTrainersw.click = function () {}
      inputsTrainersw.locations_id = e.id

      if (props.type == 'edit') {
        horario.value.trainers.forEach((e) => {
          inputsTrainersw.model.push(e.staffs_id)
        })
      }
      inputsfechas.push(inputsTrainersw)

      class_locations.value.push({
        locations_id: e.id,
        name: e.name,
        start_date: getInput(inputsfechas, 'start_date'),
        start_time: getInput(inputsfechas, 'start_time'),
        end_date: getInput(inputsfechas, 'end_date'),
        end_time: getInput(inputsfechas, 'end_time'),
        capacity: getInput(inputsfechas, 'capacity'),
        recurrence: getInput(inputsfechas, 'recurrence'),
        inputsfechas: inputsfechas,
        // days: getInput(inputsfechas,'semana'),
        type_of_member: getInput(inputsfechas, 'type_of_member'),
        level: getInput(inputsfechas, 'level'),
        color: getInput(inputsfechas, 'color'),
        trainers: [],
      })
    } else {
      if (e.id == id) {
        class_locations.value.splice(
          class_locations.value.findIndex((i) => i.locations_id == e.id),
          1
        )
      }
    }
  })
}

const cambioFechaLocation = function () {
  if (getInput(inputsMismasFechas.value, 'mismasfechas').model) {
    mismasFechasTodasLocaciones()
  }
}

const mismasFechasTodasLocaciones = function () {
  let locacion = class_locations.value.find(
    (l) =>
      l.locations_id ==
      getValuesInput(inputsDiciplines.value, 'location_id')[0].id
  )

  let locaciones = class_locations.value.filter(
    (l) =>
      l.locations_id !=
      getValuesInput(inputsDiciplines.value, 'location_id')[0].id
  )

  locaciones.forEach((l) => {
    getInput(l.inputsfechas, 'start_date').model = getInput(
      locacion.inputsfechas,
      'start_date'
    ).model
    getInput(l.inputsfechas, 'end_date').model = getInput(
      locacion.inputsfechas,
      'end_date'
    ).model
    getInput(l.inputsfechas, 'end_time').model = getInput(
      locacion.inputsfechas,
      'end_time'
    ).model
    getInput(l.inputsfechas, 'start_time').model = getInput(
      locacion.inputsfechas,
      'start_time'
    ).model
    getInput(l.inputsfechas, 'capacity').model = getInput(
      locacion.inputsfechas,
      'capacity'
    ).model
    getInput(l.inputsfechas, 'color').model = getInput(
      locacion.inputsfechas,
      'color'
    ).model

    getInput(l.inputsfechas, 'type_of_member').model = getInput(
      locacion.inputsfechas,
      'type_of_member'
    ).model

    getInput(l.inputsfechas, 'level').model = getInput(
      locacion.inputsfechas,
      'level'
    ).model

    getInput(l.inputsfechas, 'recurrence').model = getInput(
      locacion.inputsfechas,
      'recurrence'
    ).model
  })
}

const mismoshorariostrainers = function (inp) {
  let se = null
  let locations_id = null
  if (typeof inp == 'number') {
    locations_id = inp
    se = getInput(
      inputsMismosHorariosTrainer.value,
      'mismoshorariostrainers'
    ).model
  } else {
    locations_id = this.locations_id
    se = !getInput(inputsMismosHorariosTrainer.value, 'mismoshorariostrainers')
      .model
  }

  let location = class_locations.value.find(
    (l) => l.locations_id == locations_id
  )

  let trainer = location.trainers[0]
  let diassemana = getInput(trainer.inputsDias, 'semana').model

  let trainers = location.trainers.filter(
    (t) => t.staffs_id != trainer.staffs_id
  )

  let save = null
  trainers.forEach((t) => {
    save = ref(JSON.parse(JSON.stringify(t.days)))
    if (se) {
      getInput(t.inputsDias, 'semana').model = diassemana
      t.days = trainer.days
    } else {
      getInput(t.inputsDias, 'semana').model = getInput(
        t.inputsDias,
        'semana'
      ).default
      t.days = save
    }
  })
}

const saveData = () => {
  const dicipline_id = perpareDataInputs(inputsDiciplines.value).discipline_id
  const locations_id = perpareDataInputs(inputsDiciplines.value).location_id

  let locations = []

  locations_id.forEach((ld) => {
    let location = class_locations.value.find((l) => l.locations_id == ld)
    let trainers = []
    location.trainers.forEach((trainer) => {
      trainers.push({ staffs_id: trainer.staffs_id })
    })
    locations.push({
      locations_id: location.locations_id,
      start_date: location.start_date.model + ' ' + location.start_time.model,
      end_date: location.end_date.model + ' ' + location.end_time.model,
      capacity: location.capacity.model,
      recurrence: JSON.stringify(location.recurrence.model),
      type_of_member: location.type_of_member.model,
      level: location.level.model,
      color: location.color.model,
      trainers: trainers,
    })
  })
  objetoSchedule.value = {
    dicipline_id: dicipline_id,
    status: true,
    locations: locations,
  }

  if (props.type == 'create') {
    storeSchedule(objetoSchedule.value)
      .then((response) => {
        notyf.success('Save Success')
        response.data.forEach((e) => {
          emit('addEvent', e)
          class_locations.value = []
          cleanUpModelInputs(inputsDiciplines.value)
        })
      })
      .catch((error) => {
        for (var i in error.response.data.errores) {
          error.response.data.errores[i].forEach((e) => {
            notyf.error(`${i} ${e}`)
          })
        }
      })
  } else {
    putSchedule(horario.value.id, objetoSchedule.value)
      .then((response) => {
        notyf.success('Success Update')
        response.data.forEach((e) => {
          emit('addEvent', e)
          class_locations.value = []
          cleanUpModelInputs(inputsDiciplines.value)
        })
      })
      .catch((error) => {
        for (var i in error.response.data.errores) {
          error.response.data.errores[i].forEach((e) => {
            notyf.error(`${i} ${e}`)
          })
        }
      })
  }
}

const ondeleteEvent = () => {
  const id = horario.value.id
  deleteSchedule(id)
    .then((response) => {
      emit('deleteEvent', horario.value.id)
      class_locations.value = []
      cleanUpModelInputs(inputsDiciplines.value)
    })
    .catch((error) => {
      if (error.response.status == 404) {
        console.log('props.idEvent', id)
        emit('deleteEvent', id)
      }
    })
}
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
    class="mb-2"
    @saveData="saveData"
    color="warning"
  >
    <VCard v-if="props.type != 'create'" color="warning">
      <div class="d-flex justify-content-between">
        <VButton
          @click="ondeleteEvent"
          icon="fa fa-times"
          color="danger"
          elevated
        >
          DELETE</VButton
        >
        <h3 class="title is-5 mb-2">Warning Edit</h3>
      </div>
    </VCard>

    <!-- <inputsLayaut :inputs-step="locationsSelect" /> -->
    <inputsLayaut :inputs-step="inputsDiciplines" />
  </formLayaut>

  <VCard
    v-for="(location, key) in class_locations"
    :key="`location-${key}`"
    class="mb-4"
  >
    <div class="d-flex align-items-center">
      <VAvatar :picture="`${API_WEB_URL}storage/${location.image}`" />
      <h1 class="ml-3 title is-6">{{ location.name }}</h1>
    </div>
    <inputsLayaut :inputs-step="inputsMismasFechas" />
    <inputsLayaut :inputs-step="location.inputsfechas" />
    <!--  <inputsLayaut
          :inputs-step="inputsMismosHorariosTrainer"
        /> -->
    <!-- <VCard 
      v-for="(trainer, key) in location.trainers"
      :key="`trainer-${key}`"
      class="mb-4"
     >
        <p>{{ trainer.name }}</p>
        <inputsLayaut
          :inputs-step="trainer.inputsDias"
        />

         
        
          <div 
            v-for="(day, key) in trainer.days"
            key="`day-${key}`"
            class="mb-4">

            <VCard
            v-show="(trainer.days.All && key == 'All') || (!trainer.days.All && key != 'All')"
            >
   
              <p v-show="!trainer.days.All" >{{ key }}</p>  
              <div
                v-for="(horario, keey) in day"
                :key="`horario-${key}`"
                
              >

                <div class="columns">
                  <div class="column is-9">
                    <inputsLayaut
                      :inputs-step="horario.inputsHorarios"
                    />

                  </div>
                  <div class="column is-3 mt-6 d-flex">
                    <VButton 
                      @click="addHorario(key, trainer)"
                      color="info"  
                      icon="fa fa-plus" 
                      v-if="keey >= day.length-1"
                      > Add</VButton>
                    <VButton v-if="keey > 0" color="danger" class="ml-2"  icon="fa fa-minus" elevated> Remove</VButton>
                  </div>
                </div>
              </div>
            </VCard>
          </div>
        
        
        
      </VCard> -->
  </VCard>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
