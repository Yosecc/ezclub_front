<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, defineEmit, defineProps } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Member Profile'
useHead({
  title: 'Members',
})

const props = defineProps({
  category: {
    type: String,
    default: "Adult"
  }
})

const itemsMenuAdult = [
    {
      name:'Personal Information',
      component: 'personalInformation'
    },
    {
      name:'Credit Card',
      component: 'memberCreditCard'
    },
    {
      name:'Membership/Contract',
      component: 'memberMembership'
    },
    
    {
      name:'Family Members',
      component: 'memberFamily'
    },
    {
      name:'Emergency',
      component: 'memberEmergency'
    },
    {
      name:'Check-ins',
      component: 'memberCheckins'
    },
    {
      name:'Purchases',
      component: 'memberPurchases'
    },
]

const itemsMenuProspect = [
  {
    name:'Personal Information',
    component: 'personalInformation'
  },
  {
    name:'Waiver',
    component: 'memberWaiver'
  },
];

const menuMemberProfile = computed(()=>{
  if(['Adult','Minor'].includes(props.category)){
    return itemsMenuAdult
  }else{
    return itemsMenuProspect
  }
  
})

const menuActive = ref(0)

const componentDefault = ref(null)

const componentActive = computed(()=>{
  if (menuMemberProfile.value[menuActive.value] != null) {
    return menuMemberProfile.value[menuActive.value].component
  }
  return componentDefault.value
})

const emit = defineEmit(['changeMenu'])

const change = (key) => {
  menuActive.value = key
  emit('changeMenu',componentActive)
}



</script>


<template>
  <VCard >
    <div class="d-flex">
      <VAvatar picture="https://picsum.photos/150/151" size="large"/>
      <div class="ml-3">
        <h2 class="title is-4 is-narrow ">Name Member</h2>
        <p>#76545678</p>
        <p><small>Member since. Sep, 10, 2020</small></p>
        
      </div>
    </div>
    <div class="w-100 mt-5">
      <ul>
        <li
          v-for="(item, key) in menuMemberProfile"
          :key="`item-${key}`"
        >
          <VCard 
            class="mb-3 item_menu d-flex justify-content-between align-items-center"
            :class="menuActive == key ? 'active':''"
            :color="menuActive == key ? 'warning': undefined" 
            :elevated="menuActive == key"
            @click="change(key)"
           
          >
            <p>
              {{ item.name }}
            </p>
            <i class="iconify" style="font-size: 20px; color: white" data-icon="feather:arrow-right" aria-hidden="true"></i>
          </VCard>
        </li>
      </ul>
    </div>
  </VCard>
</template>

<style lang="scss" scope>
  .item_menu{
    cursor:pointer;
    &.active{
      p{
        color: black !important;
        font-weight: 900;
      }
      
    }
    &:hover{

    }
  }
</style>