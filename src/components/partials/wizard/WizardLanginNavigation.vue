<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
import {
  currentStep,
  stepTitle,
  company,
  isLoading,
} from '/@src/state/wizardStateLandingMembersUpdated'
import { isDark } from '/@src/state/darkModeState'

const dropdownElement1 = ref<HTMLElement | null>(null)
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement | null>(null)
const dropdown2 = useDropdown(dropdownElement2)

const setStep = (target: number) => {
  if (currentStep.value >= target) {
    currentStep.value = target
    dropdown1.close()
  }
}
</script>

<template>
  <nav class="wizard-navigation">
    <VPlaceloadAvatar v-if="isLoading" class="mx-1" size="medium" />
    <VAvatar v-else :picture="company.logo" squared size="medium" />

    <div class="navbar-item is-wizard-title" style="width: 70%">
      <VPlaceload v-if="isLoading" height="25px" width="200px" class="mx-2" />
      <p v-else class="title is-6">
        Step {{ currentStep }}: <span>{{ stepTitle }}</span>
      </p>
    </div>

    <div class="navbar-item is-dark-mode">
      <div class="navbar-icon">
        <label class="dark-mode">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="
              (event) => {
                isDark = !event.target.checked
              }
            "
          />
          <span></span>
        </label>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

.wizard-navigation {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background: $white;
  padding: 0 20px;
  transition: all 0.3s;
  z-index: 99;

  .wizard-brand {
    img {
      display: block;
      height: 34px;
      margin: 0 auto;
    }
  }

  .navbar-item {
    &.is-wizard-title {
      margin-left: 15px;
      border-left: 1px solid lighten($muted-grey, 15%);
      padding-bottom: 6px;
      padding-top: 6px;
      font-family: $font;

      .title-wrap {
        position: relative;
        display: block;
        font-family: $font-alt;
        font-size: 1.2rem;
        font-weight: 600;

        span {
          font-weight: 400;
        }
      }
    }
  }

  .wizard-dropdown {
    cursor: pointer;

    .is-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;

      svg {
        height: 18px;
        width: 18px;
        color: $light-text;
      }
    }

    .dropdown-menu {
      border: 1px solid darken($fade-grey, 3%);
      box-shadow: $light-box-shadow;
      border-radius: 8px;
      padding-top: 0;
      overflow: hidden;

      .dropdown-content {
        .dropdown-item {
          font-family: $font;
        }
      }
    }
  }

  .is-dark-mode {
    margin-left: auto;
    background: transparent !important;

    .navbar-icon {
      height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $radius-rounded;
      border: 1px solid darken($fade-grey, 3%);
      box-shadow: $light-box-shadow;
      background: $white;
      transition: all 0.3s;

      .dark-mode {
        transform: scale(0.6);
      }
    }
  }

  .user-dropdown {
    .is-trigger {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;

      .profile-avatar {
        position: relative;

        .avatar {
          display: block;
          width: 38px;
          height: 38px;
          border-radius: $radius-rounded;
        }

        .badge {
          position: absolute;
          right: -8px;
          bottom: 0;
          width: 20px;
          height: 20px;
          border: 2px solid $white;
          border-radius: $radius-rounded;
        }
      }

      svg {
        margin-left: 3px;
        width: 18px;
        height: 18px;
        color: $light-text;
        transition: all 0.3s;
      }
    }

    .dropdown-menu {
      top: 52px;
      border: 1px solid darken($fade-grey, 3%);
      box-shadow: $light-box-shadow;
      border-radius: 8px;
      padding-top: 0;
      width: 180px;
      overflow: hidden;

      .dropdown-item {
        display: flex;
        align-items: center;
        font-family: $font;
        font-size: 0.9rem;
        padding: 8px 12px;
        color: $light-text;

        p {
          font-family: $font-alt;
          font-weight: 600;
          font-size: 0.95rem;
          color: $dark-text;
        }

        svg {
          margin-right: 8px;
          height: 16px;
          width: 16px;
          color: $light-text;
        }
      }
    }
  }
}
</style>
