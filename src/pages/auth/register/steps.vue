<script setup lang="ts">

import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import useNotyf from '/@src/composable/useNotyf'

import { cities, states, contries } from '/@src/services/config.ts'
import { servicesPacks } from '/@src/pages/servicesPacks/servicesPacks.ts'

import { Api } from '/@src/services'

import { isDark, logo } from '/@src/state/darkModeState'
// import sleep from '/@src/utils/sleep'

import { contact, userNew, step, locationsData, locations, servicesPacksSelected, creditCard, flipped, setAuthStorage} from '/@src/pages/auth/auth.ts'

import { companyInputs } from '/@src/models/Companies.ts'

const router = useRouter()
const notif = useNotyf()
const isLoading = ref(false)

useHead({
  title: 'Registration Process',
})

onMounted(()=>{

  if(cities.value.length == 0){
    router.push({ name: 'auth-register' })
  }

  companyInputs.value.map((element)=>{
    if(element.name == "company_city_id"){
      element.values = cities.value
    }
    if(element.name == "company_state_id"){
      element.values = states.value
    }
    if(element.name == "company_country_id"){
      element.values = contries.value
    }
  })

  locationsData.value.map((element)=>{
    if(element.name == "city_id"){
      element.values = cities.value
    }
    if(element.name == "state_id"){
      element.values = states.value
    }
    if(element.name == "country_id"){
      element.values = contries.value
    }
  })

  locations.value.push(JSON.parse(JSON.stringify(locationsData.value)))

  contact.value.map((element)=>{
    if(element.name == "contact_city_id"){
      element.values = cities.value
    }
    if(element.name == "contact_state_id"){
      element.values = states.value
    }
    if(element.name == "contact_country_id"){
      element.values = contries.value
    }

    if(element.name == "contact_name"){
      element.model = userNew.value.firstName
    }

    if(element.name == "contact_email"){
      element.model = userNew.value.email
    }
  })

})

const setServicesPacksSelected = (id) => {
  servicesPacksSelected.value.model = id
}

const limitLocations = computed(()=>{
  return servicesPacks.value.find((element) => element.id == servicesPacksSelected.value.model).locations_num
})

// $P53st0!123%
const creditCardData = (campo) => {
  return creditCard.value.find((element) => element.name == campo)
}

const processData = (inputs, options = { anidados: false, array: true })=>{ //Array

  const proccessDefault = (data) =>{
    let obj = {}
    if(options.array){
      data.forEach((element)=>{
        obj[element.name] = element.model
      })
    }
    if(!options.array){
      obj[data.name] = data.model
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


const handleSignup = async () => {

  const data = { 
    ...processData(companyInputs.value),
    ...processData(contact.value),
    ...userNew.value,
    ...processData(servicesPacksSelected.value, { array: false }),
    ...processData(creditCard.value),
    locations: processData(locations.value, { anidados: true, array: true }),
  }
  console.log('data',data)
  await Api.post('companies/create',data).then((response)=>{
    let user = response.data.user
    if (response.data.status) {
      isLoading.value = true
      setAuthStorage(user)
      notif.success(`Welcome, ${user.name}`)
      router.push({ name: 'index' })
      isLoading.value = false
    }else{

      for (let clave in response.data.errores){
        notif.error(`${response.data.mensaje}: ${response.data.errores[clave]}`)
      }
      
    }
  }).catch((error)=>{
    console.log(error.response.data)
  })
}

const title = computed(()=>{
  if(step.value == 1){
    return 'Company Information'
  }
  
  if(step.value == 3){
    return 'Company Locations'
  }

  if(step.value == 4){
    return 'Contact Information'
  }

  if(step.value == 2){
    return 'Service Packs'
  }
})

const next = (stepNumber) => {
  step.value = stepNumber
}

const calcProgressStep = computed(()=>{
  return (step.value * 100) / 4
})

const addLocation = () =>{
 locations.value.push(JSON.parse(JSON.stringify(locationsData.value)))  
}

const removeLocation = (key) =>{
  locations.value.splice(key,1)
}
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink :to="{ name: 'index' }" class="">
          <img :src="logo" width="150" class="d-block mr-auto ml-auto"  alt="">
        </RouterLink>
      </div>
      <div class="right">
        <label class="dark-mode ml-auto">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="
              (event) => {
                isDark = !event.target.checked
              }
            "
          />
          <span></span>
        </label>
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap mt-6">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>{{ title }}</h2>  
        </div>

        <VProgress  size="small" :value="calcProgressStep" />

        <!-- STEP 1 COMPANY -->
          <div  class="form-card" v-if="step == 1">
            <inputsLayaut
              :inputs-step="companyInputs"
            />
            <div class="d-flex justify-content-end"> 
              <VButton @click="next(2)" color="primary"> Continue </VButton>
            </div>
          </div>

        <!-- STEP 2 SERVICES PACKS -->
          <div class="form-card"  v-if="step == 2">

            <cardSelected 
              :data="servicesPacks"
              :value="servicesPacksSelected.model"
              @changeSelect="setServicesPacksSelected"
            />
            <div class="d-flex justify-content-between"> 
              <VButton @click="next(1)" color="danger"> Back </VButton>
              <VButton @click="next(3)" color="primary"> Continue </VButton>
            </div>
          </div>

        <!-- STEP 3 LOCATIONS -->
          <div class="form-card" v-if="step == 3" >
            <VCard
              v-for="(location , key) in locations"
              :key="`location-${key}`"
              class="mb-4"
            >
              <inputsLayaut
                :inputs-step="location"
              />
              <div class="d-flex justify-content-around"> 
                <VButton 
                  v-if="(key+1) == locations.length && limitLocations > locations.length" 
                  @click="addLocation" 
                  class="mx-auto d-block" 
                  color="info"> Add Location </VButton>
                <VButton 
                  v-if="key > 0" 
                  @click="removeLocation(key)" 
                  class="mx-auto d-block" 
                  color="danger"> Remove Location </VButton>
              </div>
            </VCard>
            <div class="d-flex justify-content-between">
              <VButton @click="next(2)" color="danger"> Back </VButton>
              <VButton @click="next(4)" color="primary"> Continue </VButton>
            </div>
          </div>

        <!-- STEP 4 CONTACT -->
          <div  class="form-card" v-if="step == 4">
            <inputsLayaut
              :inputs-step="contact"
            />
            <div class="d-flex justify-content-between"> 
              <VButton @click="next(3)" color="danger"> Back </VButton>
              <VButton @click="next(5)" color="primary"> Continue </VButton>
            </div>
          </div>

        <!-- STEP 5 CREDICt CARD -->
          <div  class="form-card" v-if="step == 5">
            <VCreditCard 
              color="orange"
              :number="creditCardData('number_card').model"
              :name="creditCardData('name_card').model"
              :expiry="creditCardData('expiration_date').model"
              :cvc="creditCardData('password_card').model"
              :flipped="flipped" 
              @flip="flipped = !flipped" 
            />

            <inputsLayaut
            class="mt-6"
              :inputs-step="creditCard"
            />

            <div class="d-flex justify-content-between"> 
              <VButton @click="next(4)" color="danger"> Back </VButton>
              <VButton @click="handleSignup" color="primary"> Register </VButton>
            </div>
          </div>

        <!--Form-->
       


      </div>
    </div>

  </div>
</template>
