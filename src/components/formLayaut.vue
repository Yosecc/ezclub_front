<script setup lang="ts">
import { computed, ref, defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  buttons:{
    type: Array,
    default: ['save', 'back']
  },
  step:{
    type: Number,
    default: 1
  },
  titles:{
    type: Object,
    default: {
      title: '',
      subtitle: ''
    }
  },
  newRoute:{
    type: Object,
    default: { name: '', to: '' }
  },
  isLoading:{
    type: Boolean,
    default: false
  }
})

const emit = defineEmit(['changeStep','saveData']);

</script>

<template>
  <VPlaceload v-if="isLoading" height="500px"   />
  <VCardAdvanced v-else>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
       {{titles.title}}
      </h1>
      <p>{{titles.subtitle}}</p>
      </div>
    </template>
    <template #header-right>
      <VButton
        v-if="buttons.includes('back')"
       @click="router.back()" 
       class="mr-3"> Go Back </VButton>

       <VButton
        v-if="buttons.includes('prev')"
       @click="$emit('changeStep',step-1)" 
       class="mr-3"> Go Back </VButton>

      <VButton 
        v-if="buttons.includes('next')"
        color="primary" 
        @click="$emit('changeStep',step+1)"> Next </VButton>

        <VButton 
        v-if="buttons.includes('save')"
        color="primary" 
        @click="$emit('saveData')"> Save Changes </VButton>

        <VButton 
          v-if="buttons.includes('new')"
          :to="newRoute.to"
          color="primary" 
          > {{ newRoute.title }} </VButton>
    </template>
    <template #content>
      
      <slot>
        <!-- <inputsLayaut
          :inputs-step="inputs"
        /> -->
      </slot>
      
    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';


</style>
