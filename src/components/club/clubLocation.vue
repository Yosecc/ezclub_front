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
    default: ['new']
  },
  step:{
    type: Number,
    default: 1
  },
})

const titles = computed(()=>{
  return {
    title: 'Club Locations',
    subtitle: 'Edit Club Locations'
  }
})

const locations = ref([
  {
    img: 'https://picsum.photos/150/153',
    name: 'Location Name',
    address: '5555 NW 13 St Miami Fl 33145',
    id: '09876543',
    url: 'https://goo.gl/maps/p3QNRiQ5LbwER47J7',
    status: true,
  },
  {
    img: 'https://picsum.photos/151/153',
    name: 'Location Name',
    address: '5555 NW 13 St Miami Fl 33145',
    id: '09876543',
    url: 'https://goo.gl/maps/p3QNRiQ5LbwER47J7',
    status: false,
  }
])

// const emit = defineEmit(['changeStep','saveData']);

</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :titles="titles"
    :newRoute="{ to: {name:'settings-clubinformation-locations-create'},           title: 'New Location'}"
  >
  
    <div class="columns is-multilinea">
      <div 
        v-for="(location, key) in locations"
        :key="key"
        class="column is-6"
      >
        
        <VCard >
          <VTag 
            :color="location.status ? 'success':'danger'" 
            :label="location.status ? 'Active':'Inactive'" 
            class="mb-4" />
          <div class="d-flex mb-3">

            <VAvatar squared class="mr-3" :picture="location.img" size="xl" />
            <div>
              <p><small>{{ location.id }}</small></p>
              <h2 class="title is-5 mb-1">{{ location.name }}</h2>
              <p>{{ location.address }}</p>
              <a target="_blank" :href="location.url">
                <i class="fas fa-map-marker-alt"></i>
                View map
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            
            <VButton :to="{ name: 'settings-clubinformation-locations-edit' }" > Edit </VButton>
          </div>
        </VCard>
          
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
