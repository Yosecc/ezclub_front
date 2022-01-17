<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, onMounted, watch, onBeforeMount, defineProps } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute } from 'vue-router'

const route = useRoute()

pageTitle.value = 'Member Profile'
useHead({
  title: 'Members',
})

const Component = ref('personalInformation')

const changeMenu = (val) =>{
  Component.value = val.value
}

</script>


<template>
  <SidebarLayout >

    <div class="columns is-multiline">
      <div class="column is-3">

        <MemberProfileMenu
          :category="route.query.category"
          @changeMenu="changeMenu"
        />
      </div>
      <div class="column is-9">

        <personalInformation
          :category="route.query.category"
          v-show="Component == 'personalInformation'"
        />
        <memberCreditCard
           v-show="Component == 'memberCreditCard'"
        />
        <memberMembership
           v-show="Component == 'memberMembership'"
        />
        <memberFamily
           v-show="Component == 'memberFamily'"
        />
        <memberEmergency
           v-show="Component == 'memberEmergency'"
        />
        <memberCheckins
           v-show="Component == 'memberCheckins'"
        />
        <memberPurchases
           v-show="Component == 'memberPurchases'"
        />
        <memberWaiver
           v-show="Component == 'memberWaiver'"
        />

        
      </div>
    </div>
    
    
  </SidebarLayout>
</template>