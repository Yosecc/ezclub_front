<script setup lang="ts">
import { computed, defineProps, defineEmit  } from 'vue'
import { configClassColumn } from '/@src/components/members/MembersData'

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


</script>


<template>
  <!-- <p>{{ typeMember }}</p> -->

  <div class="columns is-multiline">
    <!-- <p>{{ inputsStep }}</p> -->
    
    <div
      v-for="(input, key) in inputsStep"
      :key="key"
      class="column "
      :class="configClassColumn(input)"
    >
      <V-Field
        v-if="input.typeInput == 'buttonGroup'"
        class="column is-12"
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
        class="column is-12"
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
        class="column is-12"
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
        class="column is-12 justify-content-end"
        grouped
      >
        <V-Control
          id="sel"
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
        class="column px-0"
        v-if="['text','date','number','email'].includes(input.typeInput) "
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
          />
        </V-Control>
      </V-Field>
      <!--  -->
      <V-Field
        v-if="input.typeInput == 'select'"
        class="column px-0"
      >
        <V-Control
          id="sel"
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
        class="column px-0"
      >
        <V-Control
          id="sel"
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
        class="column px-0"
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
        class="column px-0"
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
        class="column px-0"
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
          class="column px-0"
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
    </div>
  </div>

</template>