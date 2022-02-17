<script setup lang="ts">
import { computed, defineEmit, defineProps, onMounted } from 'vue'
import moment from 'moment'
// import { inputsStepData } from '/@src/components/members/MembersData'
// import { toggleMemberActive, memberActive, member } from '/@src/components/members/MembersData'

// watch(
//   () => [memberActive.member_id,memberActive.active],
//   ([member_id,active],[prev_member_id, prev_active]) => {
//     if(active){
//       // setTimeout(()=>{
//       //   toggleMemberActive(false, null)
//       // },4000)
//     }
//   }
// )

onMounted(() => {
  console.log(props.member)
})

const diasPasados = computed(() => {
  let fechaPayment = moment(
    props.member.membership_members.payments[0].created_at
  )
  let hoy = moment()

  return moment.duration(hoy.diff(fechaPayment))._days
})

const props = defineProps({
  status: {
    type: Boolean,
  },
  member: {
    type: Object,
  },
})

const emit = defineEmit(['closeMemberCard'])
</script>

<template>
  <transition name="fade-slow">
    <V-Card
      id="sidebarMember"
      v-if="status"
      :color="!member.membership_members.payments[0].status ? 'danger' : 'info'"
      class="column is-6"
    >
      <div v-if="member">
        <div class="d-flex justify-content-between mb-4">
          <div class="d-flex align-items-center">
            <V-Avatar
              :picture="member.photo"
              :color="undefined"
              initials="AR"
              size="sm"
            />
            <div class="ml-5">
              <h1 class="title is-5 is-narrow mb-1">
                {{ member.name }} {{ member.second_name }}
                {{ member.last_name }}
              </h1>
              <p>Member</p>
              <h2 class="title is-6 is-narrow"># {{ member.id }}</h2>
            </div>
          </div>
          <div>
            <V-IconButton
              color="danger"
              @click="$emit('closeMemberCard')"
              style="background: transparent"
              light
              raised
              circle
              icon="feather:x"
            />
          </div>
        </div>

        <div
          class="text-center mb-4"
          v-if="!member.membership_members.payments[0].status"
        >
          <V-Tag color="white" label="PAYMENT" class="mb-3" />
          <p>last payment attempt</p>
          <p v-if="diasPasados > 0">{{ diasPasados }} days past due</p>
          <p v-else>
            {{
              moment(
                props.member.membership_members.payments[0].created_at
              ).format('yy/mm/d hh:mm:ss')
            }}
          </p>
        </div>

        <div class="d-flex justify-content-center">
          <V-Button
            :to="{
              name: 'members-profile',
              query: { id: member.id, category: member.category },
            }"
            color="primary"
            class="m-3 button-custom"
            icon="fas fa-pen"
          >
            Update
          </V-Button>
          <V-Button
            color="warning"
            class="m-3 button-custom"
            icon="fas fa-clock"
          >
            Ckeck-in
          </V-Button>
        </div>
      </div>
      <div v-else>
        <p>No hay miembro seleccionado</p>
      </div>
    </V-Card>
  </transition>
</template>
