
<script setup lang="ts">
import { computed, defineProps, defineEmit, onMounted  } from 'vue'


const emit = defineEmit(['changeSelect','changeSwitch'])

const changeData = (input, value) => {
  props.inputsStep.map((element)=>{
    if(element.name == input.name){
      element.model = value
    }
  })
}

const props = defineProps({
  inputsStep:{
    type: Array
  }
})

const configClassCol = () => {
  let content = document.querySelectorAll('.contentInputLayaut .ciclo')

  content.forEach((element)=>{
    // console.log(element)
    element.childNodes.forEach((e)=>{

      if(e.dataset != undefined){

        if(Object.values(e.dataset).length > 0){

          e.dataset.class.split(' ').forEach((ele)=>{
            element.classList.add(ele)
          })
        }
      }
    })
  })
}

onMounted(()=>{
  configClassCol()
})

</script>


<template>
  <!-- <p>{{ typeMember }}</p> -->

  <div class="columns is-multiline contentInputLayaut">
    <div
      v-for="(input, key) in inputsStep"
      :key="key"
      class="column ciclo mb-3" 
    >
      <V-Field
        v-if="input.typeInput == 'buttonGroup'"
        :data-class="input.class"
        addons
      >
        <V-Control 
          v-for="(category, categoryIndex) in input.values"
        >
          <V-Button 
            @click="changeData(input, category)"
            :color="input.model == category ? 'primary':undefined"
          > 
          {{ category }}</V-Button>
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field 
        v-if="input.typeInput == 'switch'"
        :data-class="input.class"
        grouped
      >
        <V-Control
          :has-error="input.hasError ?? false"
        >
          <V-SwitchSegment
            v-model="input.model"
            :label-true="input.values[1]"
            :label-false="input.values[0]"
            color="primary"
          />
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field 
        v-if="input.typeInput == 'switchEventChange'"
        :data-class="input.class"
        grouped
      >
        <V-Control
          :has-error="input.hasError ?? false"
        >
          <V-SwitchSegment
            v-model="input.model"
            :label-true="input.values[1]"
            :label-false="input.values[0]"
            color="primary"
            @click="$emit('changeSwitch',{input,inputsStep })"
          />
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field
        v-if="input.typeInput == 'file'"
        :data-class="input.class"
        class="chacata"
        grouped
      >
        <V-Control

          :has-error="input.hasError ?? false"
        >
          <div class="file">
            <label class="file-label">
              <input 
                class="file-input" 
                type="file" 
                @change="changeData(input, $event.target.files[0])" 
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-cloud-upload-alt"></i>
                </span>
                <span class="file-label"> {{ input.placeholder }}</span>
              </span>
            </label>
          </div>
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field 
        class="px-0 field"
        v-if="['text','date','number','email','password'].includes(input.typeInput) "
        :data-class="input.class"
      >
        <V-Control
          :has-error="input.hasError ?? false"
        >
          <input
            v-model="input.model"
            :type="input.typeInput"
            class="input"
            :placeholder="input.placeholder"
            :disabled="input.disabled ?? false"
            :maxLength="input.maxLength ?? ''"
            @keyup="input.keyUp ? input.keyUp($event, input) : null"

          />
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field
        v-if="input.typeInput == 'select'"
        :data-class="input.class"
        class="chucutu"
      >
        <V-Control
          
          :has-error="input.hasError ?? false"
        >
          <div class="select">
            <select v-model="input.model" :disabled="input.disabled ?? false">
              <option value="">{{ input.placeholder }}</option>
              <option 
                v-for="option in input.values"
                :value="option">{{ option }}</option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field
        v-if="input.typeInput == 'selectData'"
        :data-class="input.class"
        class="bibibi"
      >
        <V-Control
          
          :has-error="input.hasError ?? false"
        >
          <div class="select">
            <select v-model="input.model" :disabled="input.disabled ?? false">
              <option value="">{{ input.placeholder }}</option>
              <option 
                v-for="option in input.values"
                :value="option.id">{{ option.name }}</option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field
        v-if="input.typeInput == 'selectDataActionChange'"
        :data-class="input.class"
      >
        <V-Control
          :has-error="input.hasError ?? false"
        >
          <div class="select">
            <select 
            :disabled="input.disabled ?? false"
              v-model="input.model"
              @change="$emit('changeSelect',{ input, inputsStep })"
            >
              <option value="">{{ input.placeholder }}</option>
              <option 
                v-for="option in input.values"
                :value="option.id">{{ option.name }}</option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field
        v-if="input.typeInput == 'checkbox'"
        :data-class="input.class"
      >
        <V-Control
          id="che"
          :has-error="input.hasError ?? false"
        >
          <V-Checkbox
            v-model="input.model"
            :value="input.name"
            :label="input.placeholder"
            color="primary"
            
          />
        </V-Control>
      </V-Field>
      <!--  -->
      <div
        v-if="input.typeInput == 'checkboxGroup'"
        :data-class="input.class"
      >
        <p v-if="input.text">{{ input.text }}</p>
        <V-Field 
          v-for="check in input.values"
          class="mt-5"
        >
          <V-Control>
            <p><b>{{ check.placeholder }}</b></p>
            <V-Checkbox
              v-for="option in check.values"
              v-model="option.model"
              :value="option.name"
              :label="option.placeholder"
              color="primary"
              
            />
          </V-Control>
        </V-Field>

      </div>
      <V-Field 
          v-if="input.typeInput == 'checkboxGroupSimple'"
          :data-class="input.class"
      >
        <p class="title is-6" v-if="input.text">{{ input.text }}</p>
        <div class="d-flex">
          <V-Control
            v-for="check in input.values"
          >
            <V-Checkbox
              v-model="input.model"
              :value="check.id"
              :label="check.name"
              color="primary"
              
            />
          </V-Control>
        </div>
      </V-Field>
      <!--  -->
      <VField
        v-if="input.typeInput == 'textarea'"
        :data-class="input.class"
      >
        <VControl>
          <textarea
            :rows="input.rows ?? 4"
            v-model="input.model"
            class="textarea"
            :placeholder="input.placeholder"
            :disabled="input.disabled ?? false"
            :maxLength="input.maxLength ?? ''"
            @keyup="input.keyUp ? input.keyUp($event, input) : null"
          ></textarea>
        </VControl>
       </VField>
    </div>
  </div>

</template>