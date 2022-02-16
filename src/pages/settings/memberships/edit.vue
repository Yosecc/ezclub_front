<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { locations } from '/@src/models/Companies.ts'
import { getTaxes, taxes } from '/@src/services/config.ts'
import { perpareDataInputs, hasErrors, notyf } from '/@src/models/Mixin.ts'
import { inputs, membership, memberships, getMeberships, updateMembership } from '/@src/models/Memberships.ts'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const router = useRouter()

const idMembership = ref(null)

const isLoading = ref(false)

watch(memberships,()=>{
  // console.log(route.query.id)
  idMembership.value = route.query.id
  membership.value =  memberships.value.find((element)=>element.id == idMembership.value)
})

onMounted(()=>{
  isLoading.value = true
  getTaxes()
  getMeberships().then(()=>{
    inputs.value.map((element)=>{
      element.model = membership.value[element.name]
      // if(membership.value.locations.length > 0){
        if(element.name == 'locations_to_sale'){
          let locations_to_sale = []
          element.values = JSON.parse(JSON.stringify(locations.value))
          element.model = []
          membership.value.locations.forEach((e)=>{
            if(e.sale == 1){
              element.model.push(e.companies_locations_id)
            }
          })
        }
        if(element.name == 'locations_to_access'){
          let locations_to_access = []
          element.values = JSON.parse(JSON.stringify(locations.value))
          element.model = []
          membership.value.locations.forEach((e)=>{
            if(e.access == 1){
              element.model.push(e.companies_locations_id)
            }
          })
        }
      // }

      if(element.name == 'taxes_id'){
        element.values = taxes.value
      }
    })

    isLoading.value = false
  })
})

const processData = (inputs) =>{
  inputs = perpareDataInputs(inputs)
  inputs.locations = []
  inputs.locations_to_sale.forEach((element)=>{
    if(element != ''){
      inputs.locations.push({
        id: element,
        sale: 1
      })
    }
  })
  inputs.locations_to_access.forEach((element)=>{
    if(element != ''){
      inputs.locations.map((e)=>{
        if(element == e.id){
          e.access = 1
        }else{
          inputs.locations.push({
            id: element,
            access: 1
          })
        }
      })
    }
  })
  delete inputs.locations_to_access
  delete inputs.locations_to_sale
  return inputs
}
  
const onSave = (inputs)=>{
  inputs = processData(inputs)

  if(!hasErrors.value){
    updateMembership(inputs).then((response)=>{
      if(response.data.status){
        membership.value = response.data.membership
        notyf.success('Record Update')
        router.back()
      }
    }).catch((error)=>{
      if (error.response == undefined) {
        return
      }
      notyf.error(error.response.data.mensaje)
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((element)=>{
          notyf.error(element)
        })
      }
    })
  }
  console.log('inputs',inputs)
}
</script>


<template>
  <settingLayaout
    title="New Memberships"
  >

      <membershipForm
        v-if="!isLoading"
        type="edit"
        :membership="membership"
        :inputs="inputs"
        @onSave="onSave"
      />
       
  </settingLayaout>
</template>
