import { ref, computed } from 'vue'
import moment from 'moment'
import { Notyf } from 'notyf'

export const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  }
})

const errors = ref([])

export const hasErrors = computed(()=>{
  return errors.value.includes(true)
})

const validateData = (inputs) => {
  errors.value = []
  // console.log(inputs)
  inputs.forEach((input)=>{
     if(input.required && 
         (input.model == '' || !input.model)){
      input.hasError = true
      notyf.error(input.placeholder+' is required')
      errors.value.push(true)
    }else{
      errors.value.push(false)
      input.hasError = false
    }
  })

  return hasErrors.value
}

export const perpareDataInputs = (inputs,  options = { anidados: false, array: true })=>{

	const proccessDefault = (data) =>{
		// validateData(data)
    let obj = {}
    if(data != null){
      if(options.array){
        data.forEach((element)=>{
          obj[element.name] = element.model
        })
      }
      if(!options.array){
        obj[data.name] = data.model
      }
    }
    return obj
  }

  if(!options.anidados){
    return proccessDefault(inputs)
  }

  if(options.anidados){
    let contenedor = inputs
    let a = []
    contenedor.forEach((inputs)=>{
      a.push(proccessDefault(inputs))
    })
    return a
  } 

}

export const cleanUpModelInputs = (inputs) => {
  let typeArrays = ['checkbox','checkboxGroupSimple']
  inputs.forEach((element)=>{
    if(typeArrays.includes(element.typeInput)){
      element.model = []
    }else if(element.typeInput == 'inputsGroup'){
      element.model = {}
    }else if(element.typeInput == 'checkboxGroup'){
      element.values = []
    }else{
      element.model = ''
    }
  })
}

export const viewInput = (inputs, name) =>{
  // console.log(inputs)
  return inputs.find((element)=>element.name == name).model
}

export const getValueInput = (inputs,name)=>{

  return inputs.find((e)=> e.name == name).values
                  .find((i)=>i.id == viewInput(inputs,name))
}


export const setInputValuesData = (inputs, name, data) =>{
  if (inputs.value == undefined) {
    return inputs.find((element) => element.name == name).values = data
  }
  return inputs.value.find((element) => element.name == name).values = data

}

export const setInputModelData = (inputs:any, name, data) =>{
  if (inputs.value == undefined) {
    return inputs.find((element) => element.name == name).model = data
  }
  return inputs.value.find((element) => element.name == name).model = data 
}

export const moneda = (value) => {
  value += '';
  var x = value.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return '$'+ x1 + x2;
}

export const calcularMeses = (dias:any) => {
  let hoy = moment()
  let proxima = moment().add(dias, 'days')

  return Math.abs(Math.round(moment.duration(hoy.diff(proxima)).asMonths()))
}