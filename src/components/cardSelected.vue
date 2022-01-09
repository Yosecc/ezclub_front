<script setup lang="ts">
  import { ref, defineProps, defineEmit } from 'vue'

  const emit = defineEmit(['changeSelect'])

  const props = defineProps({
    data:{
      type: Array
    },
    value:{
      type: Number,
      default: 0
    }
    
  })

  const cardActive = ref(props.value)
  const selectCard = (id) => {
    cardActive.value = id
  }
</script>

<template>
  <div class="onboarding-wrapper onboarding-v4">

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner d-flex justify-content-center" >
        <!--Card-->
        <div class="onboarding-card "
          :class="item.id == cardActive  ?'active':''"
          v-for="(item , key) in data"
          :key="`item-${key}`"
        >
          <img
            class=""
            :src="item.image"
            alt=""
          />
          <!-- <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set5-1-dark.svg"
            alt=""
          /> -->
          <div class="onboarding-content mt-4">
            <h3 class="dark-inverted">{{ item.name }}</h3>
            <p>
             {{ item.description }}
            </p>
            <div class="button-wrap">
              <V-Button color="primary" @click="$emit('changeSelect',item.id),selectCard(item.id)" rounded elevated> <span style="font-size: 1.3rem; color: black; font-weight: 900">${{ item.price }}</span> </V-Button>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/generic/_onboarding.scss';

.onboarding-card {
  &.active{
    transform: scale(1.1);
    background: $green !important;
    p,h3{
      color: black !important;
    }
  }
}
</style>
