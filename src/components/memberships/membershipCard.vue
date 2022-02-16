<script setup lang="ts">
import { defineProps } from 'vue'

import { putStatus } from '/@src/models/Memberships.ts'

const props = defineProps({
  membership:{
    type: Object,
    default: {}
  }
})


</script>

<template>
  <div >
    <div class="d-flex justify-content-between">

      <label  class="h-toggle">
        <input type="checkbox" @change="putStatus(membership)" :checked="!membership.status" />
        <span class="toggler">
          <span class="active">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:lock"
            ></i>
          </span>
          <span class="inactive">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:check"
            ></i>
          </span>
        </span>
      </label>
    </div>

    <div class="cardBox mb-4">
      <i class="fas fa-dumbbell"></i>
    </div>

    <div class="mb-3">
      <h1 class="title is-4 mb-0">{{ membership.name }}</h1>
      <p>{{ membership.description }}</p>
    </div>


     
    <div class="d-flex">
      <VAvatar 
        v-tooltip="location.company_locations.name"
        v-for="(location, key) in membership.locations"
        :key="`membership_location-${key}`"
        class="mr-3" 
        :picture="location.company_locations.image" />
    </div>
      


    <div class="d-flex justify-content-end mt-5">
      <V-Button
        :to="{ name: 'settings-memberships-edit', query:{id:membership.id}}"
       raised>
        <span class="icon">
          <i class="fas fa-edit"></i>
        </span>
        <span>Edit Membership</span>
      </V-Button>
    </div>
    
    
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';

.card-grid {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v3 {
  .card-grid-item {
    @include vuero-s-card();

    position: relative;
    text-align: center;
    padding: 30px;

    .h-toggle {
      position: absolute;
      top: 28px;
      right: 10px;
      transform: scale(0.85);
    }

    > .v-avatar {
      display: block;
      margin: 0 auto 10px auto;
      border-radius: 16px;

      .avatar {
        object-fit: cover;
        border: 1px solid darken($fade-grey, 4%);
        box-shadow: $light-box-shadow;
      }

      .badge {
        bottom: 22px;
        right: -12px;
      }
    }

    > h3 {
      font-size: 1.1rem;
      font-weight: 600;
      font-family: $font-alt;
      color: $dark-text;
    }

    > p {
      font-size: 0.9rem;
    }

    .description {
      padding: 12px 0;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px 0;

      .v-avatar {
        margin: 0 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .button {
        width: calc(50% - 4px);
        color: $light-text;

        &:hover {
          border-color: darken($fade-grey, 4%);
          color: $primary;
          box-shadow: $light-box-shadow;
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v3 {
    .card-grid-item {
      @include vuero-card--dark();
    }
  }
}

.cardBox{
  background: white;
  height: 70px;
  width: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 20px;
  box-shadow: 2px 2px 10px rgba(0,0,0,.3);
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-grid-v3 .card-grid-item > h3 {
    font-size: 1rem;
  }
}
</style>
