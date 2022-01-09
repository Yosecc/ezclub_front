<script setup lang="ts">
// import { useHead } from '@vueuse/head'
import { computed, ref, onMounted, watch, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getMember, member } from '/@src/components/members/MembersData.ts'

const route = useRoute()

const idMember = ref(route.query.member)

onMounted(()=>{
  getMember()
})

</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <!--  -->
    <div class="page-content-inner d-flex">
      
      <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quis quas tenetur animi facilis natus labore asperiores repudiandae accusamus repellendus, doloribus illo nam delectus quo eum ex officiis ea voluptatum inventore.</p>

    </div>
  </SidebarLayout>
</template>