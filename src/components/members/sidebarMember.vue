<script setup lang="ts">
import { computed, watch } from 'vue'
import { inputsStepData } from '/@src/components/members/MembersData'
import { toggleMemberActive, memberActive, member } from '/@src/components/members/MembersData'

watch(
  () => [memberActive.member_id,memberActive.active],
  ([member_id,active],[prev_member_id, prev_active]) => {
    if(active){
      // setTimeout(()=>{
      //   toggleMemberActive(false, null)
      // },4000)
    }   
  }
)

</script>


<template>

  <transition name="fade-slow">
    <V-Card  id="sidebarMember"  v-if="memberActive.active" color="info">
      <!-- <p>{{ member }}</p> -->
      <div class="d-flex justify-content-between mb-4">
        <div class="d-flex align-items-center">
          <V-Avatar
            :picture="member.photo"
            color=""
            initials="AR"
            size="xl"
          />
          <div class="ml-5">
            <h1 class="title is-3 is-narrow">{{ member.name }} {{ member.second_name }} {{ member.last_name }}</h1>
            <h2 class="title is-5 is-narrow"># {{ member.id }}</h2>
            <p>Member</p>
          </div>
        </div>
        <V-IconButton color="danger" @click="toggleMemberActive(false, null)" light raised circle icon="feather:x" />
      </div>

      <div class="text-center mb-4">
        <V-Tag color="white" label="PAYMENT" class="mb-3" />
        <p>10 days past due</p>
      </div>

      <div class="d-flex justify-content-center ">
        <V-Button color="primary" class="m-3 button-custom" icon="fas fa-pen" > 
          Update
        </V-Button>
        <V-Button color="warning" class="m-3 button-custom"  icon="fas fa-clock"  > 
          Ckeck-in
        </V-Button>
      </div>
    </V-Card>
  </transition>
</template>