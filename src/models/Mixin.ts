import { ref, computed } from 'vue'
import moment from 'moment'
import { Notyf } from 'notyf'

export const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
})

// const reload = () => {
//   isLoading.value = true
//   setTimeout(() => {
//     isLoading.value = false
//   }, 500)
// }

const errors = ref([])

export const hasErrors = computed(() => {
  return errors.value.includes(true)
})

const validateData = (inputs, array = true) => {
  errors.value = []
  if (!array) {
    if (inputs.model == '' || inputs.model.length == undefined) {
      notyf.error(inputs.name + ' is required')
      inputs.hasError = true
      errors.value.push(true)
    } else {
      errors.value.push(false)
      inputs.hasError = false
    }
    return hasErrors.value
  }

  inputs.forEach((input) => {
    if (input.required && (input.model == '' || !input.model)) {
      input.hasError = true

      errors.value.push(true)
    } else {
      errors.value.push(false)
      input.hasError = false
    }
  })

  return hasErrors.value
}

export const perpareDataInputs = (
  inputs,
  options = { anidados: false, array: true }
) => {
  const proccessDefault = (data) => {
    validateData(data, options.array)
    const obj = {}
    if (data != null) {
      if (options.array) {
        data.forEach((element) => {
          obj[element.name] = element.model
        })
      }
      if (!options.array) {
        obj[data.name] = data.model
      }
    }

    return obj
  }

  if (!options.anidados) {
    return proccessDefault(inputs)
  }

  if (options.anidados) {
    // console.log('inputs',inputs)
    const contenedor = inputs
    const a = []
    contenedor.forEach((inputs) => {
      if (inputs.inputs != undefined) {
        console.log('inputs', inputs.inputs)
      } else {
        a.push(proccessDefault(inputs))
      }
    })
    return a
  }
}

export const cleanUpModelInputs = (inputs) => {
  const typeArrays = ['checkbox', 'checkboxGroupSimple']
  inputs.forEach((element) => {
    if (typeArrays.includes(element.typeInput)) {
      element.model = []
    } else if (element.typeInput == 'inputsGroup') {
      element.model = {}
    } else if (element.typeInput == 'checkboxGroup') {
      element.values = []
    } else {
      element.model = ''
    }
  })
}

export const viewInput = (inputs, name) => {
  // console.log(inputs)
  return inputs.find((element) => element.name == name).model
}

export const getInput = (inputs: any, name: any) => {
  return inputs.find((e) => e.name == name)
}

export const getValueInput = (inputs: any, name: any) => {
  return inputs
    .find((e) => e.name == name)
    .values.find((i) => i.id == viewInput(inputs, name))
}

export const setInputValuesData = (inputs, name, data) => {
  if (inputs.value == undefined) {
    return (inputs.find((element: any) => element.name == name).values = data)
  }

  return (inputs.value.find((element: any) => element.name == name).values =
    data)
}

const setModel = (input, value) => {
  const camposArray = ['checkbox']
  if (camposArray.includes(input.typeInput)) {
    input.model = []
    input.model.push(value)
    return input
  } else {
    input.model = value
    return input
  }
}

export const setInputModelData = (inputs: any, name, data) => {
  if (inputs.value == undefined) {
    if (inputs.find((element) => element.name == name) != undefined) {
      return setModel(
        inputs.find((element) => element.name == name),
        data
      )
    } else {
      console.warn(`no se agrego el valor de ${name}`)
    }
  }
  if (inputs.value.find((element) => element.name == name) != undefined) {
    return setModel(
      inputs.value.find((element) => element.name == name),
      data
    )
  } else {
    console.warn(`no se agrego el valor de ${name}`)
  }
}

export const moneda = (value) => {
  value += ''
  const x = value.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? ',' + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2')
  }
  return '$' + x1 + x2
}

export const calcularMeses = (dias: any) => {
  const hoy = moment()
  const proxima = moment().add(dias, 'days')

  return Math.abs(Math.round(moment.duration(hoy.diff(proxima)).asMonths()))
}
