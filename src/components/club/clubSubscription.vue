<script setup lang="ts">
import { computed, ref, defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  type:{
    type: String,
    default: 'create'
  },
  buttons:{
    type: Array,
    default: []
  },
  step:{
    type: Number,
    default: 1
  },
})

const titles = computed(()=>{
  return {
    title: 'Club Subscription',
    subtitle: 'Edit Club Subscription'
  }
})

// const emit = defineEmit(['changeStep','saveData']);

</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
  >
  
    <div class="standard-onboarding">
     
      <div class="onboarding-wrap" >
        <div class="onboarding-wrap-inner">
          <!--Card-->
          <div class="onboarding-card active">
            <!-- <img
              class="light-image"
              src="/@src/assets/illustrations/onboarding/set1-1.svg"
              alt=""
            /> -->
           <!--  <img
              class="dark-image"
              src="/@src/assets/illustrations/onboarding/set1-1-dark.svg"
              alt=""
            /> -->
            <h1 class="title is-3">Starter</h1>
            <p class="mb-6">Get everything you need, when you need it</p>

            <div class="d-flex justify-content-center">
              <h1 class="title is-1">$189</h1>
              <p class="text-scpecial"><small>per <br> Month</small></p>
            </div>

            <p class="font-weight-bold mb-6">Annual Plan 10% Discount - $170/mo</p>

            <ul class="list">
              <li>
                <p>Staff Management</p>
              </li>
              <li>
                <p>Point Management</p>
              </li>
              <li>
                <p>Schedule Management</p>
              </li>
              <li>
                <p>Members Management</p>
              </li>
              <li>
                <p>Reports</p>
              </li>
            </ul>
            <div class="button-wrap">
              <V-Button color="success" class="justify-content-center" rounded raised>
                Active
              </V-Button>
            </div>
          </div>
          <!--Card-->
          <div class="onboarding-card ">
            
            <h1 class="title is-3">Growing</h1>
            <p class="mb-6">Get the full package, plus 3 locations</p>

            <div class="d-flex justify-content-center">
              <h1 class="title is-1">$370</h1>
              <p class="text-scpecial"><small>per <br> Month</small></p>
            </div>

            <p class="font-weight-bold mb-6">Annual Plan 10% Discount - $333/mo</p>

            <p class="font-weight-bold mb-6">Everything on Starter package + Up to 3 Locations</p>

            
            <div class="button-wrap">
              <V-Button color="success" class="justify-content-center" rounded raised outlined >
                Subscribe
              </V-Button>
            </div>
          </div>
          <!--Card-->
          <div class="onboarding-card ">
           
            <h1 class="title is-3">Advance</h1>
            <p class="mb-6">For the savviest of fitness businesses</p>

            <div class="d-flex justify-content-center">
              <h1 class="title is-1">$592</h1>
              <p class="text-scpecial"><small>per <br> Month</small></p>
            </div>

            <p class="font-weight-bold mb-6">Annual Plan 10% Discount - $533/mo</p>
            <p class="font-weight-bold mb-6">Everthing on Growing package + up to 8 locations</p>

           
            <div class="button-wrap">
              <V-Button color="success" class="justify-content-center" rounded outlined  raised>
                Subscribe
              </V-Button>
            </div>
          </div>
        
        </div>
      </div>
    </div>


  
  </formLayaut>
    

</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_onboarding.scss';
.list{
  p{
    font-weight: 900;
  }
}
.font-weight-bold{
  font-weight: bold;
}
.text-scpecial{
  text-align: left;
  line-height: 12px;
  margin-top: 6px;
  margin-left: 6px;
}

.onboarding-card{
  &.active{
    border-color: $green !important;
  }
}
</style>
