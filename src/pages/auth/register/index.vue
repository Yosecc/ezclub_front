<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

import { isDark , logo} from '/@src/state/darkModeState'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

import { Api } from '/@src/services'

import { getcities, getstates, getcontries } from '/@src/services/config.ts'
import { getServicesPacks } from '/@src/pages/servicesPacks/servicesPacks.ts'
import { userNew, remember, locations } from '/@src/pages/auth/auth.ts'


type StepId = 'login' | 'forgot-password'
const step = ref<StepId>('login')
const isLoading = ref(false)
const router = useRouter()
const notif = useNotyf()

const handleRegister = async () => {
  if(userNew.value.email != '' && userNew.value.password != '' && userNew.value.firstName != ''){
     isLoading.value = true
      // notif.success(``)
      router.push({ name: 'auth-register-steps' })
      isLoading.value = false
  }
}

onMounted(()=>{
  getcities().then((response)=>{
    // console.log('getcities',response.value)
  })
  getstates().then((response)=>{
    // console.log('getstates',response)
  })
  getcontries().then((response)=>{
    // console.log('getcontries',response)
  })

  locations.value = []

  getServicesPacks()
})

useHead({
  title: 'Register',
})
</script>

<template>
  <div class="modern-login">
    <div class="underlay h-hidden-mobile h-hidden-tablet-p"></div>

    <div class="columns is-gapless is-vcentered">
      <div class="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p">
        <div class="hero is-fullheight is-image">
          <div class="hero-body" style="background: #F39C12">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <img
                    class="hero-image"
                    src="/@src/assets/img-hero.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4 is-relative">
        <RouterLink :to="{ name: 'index' }" class="" >
          <img v-if="isDark" src="/@src/assets/logo_positive.svg" width="250" class="d-block mr-auto ml-auto"  alt="">

          <img v-else src="/@src/assets/logo_negative.svg" width="250" class="d-block mr-auto ml-auto"  alt="">
        </RouterLink>
        <label class="dark-mode ml-auto">
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
        <div class="is-form">
          <div class="hero-body">
            <div class="form-text">
              <h2>Registro</h2>
              <p>Bienvenido al registro</p>
            </div>
            <div class="form-text is-hidden">
              <h2>Recover Account</h2>
              <p>Reset your account password.</p>
            </div>
            <form
              
              class="login-wrapper"
              @submit.prevent="handleRegister"
            >
              <div class="control has-validation">
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="name"
                  v-model="userNew.firstName"
                />
                <small class="error-text">This is a required field</small>
                <div class="auth-label">First name</div>
                <div class="autv-icon">
                  <i aria-hidden="true" class="lnil lnil-user"></i>
                </div>
                <div class="validation-icon is-success">
                  <V-IconWrap icon="feather:check" />
                </div>
                <div class="validation-icon is-error">
                  <V-IconWrap icon="feather:x" />
                </div>
              </div>
              <div class="control has-validation">
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="off"
                  v-model="userNew.email"
                />
                <small class="error-text">This is a required field</small>
                <div class="auth-label">Email Address</div>
                <div class="autv-icon">
                  <i aria-hidden="true" class="lnil lnil-envelope"></i>
                </div>
                <div class="validation-icon is-success">
                  <V-IconWrap icon="feather:check" />
                </div>
                <div class="validation-icon is-error">
                  <V-IconWrap icon="feather:x" />
                </div>
              </div>
              <div class="control has-validation">
                <input
                  type="password"
                  v-model="userNew.password"
                  class="input"
                  autocomplete="off"
                />
                <div class="auth-label">Password</div>
                <div class="autv-icon">
                  <i aria-hidden="true" class="lnil lnil-lock-alt"></i>
                </div>
              </div>

              <div class="control is-flex">
                <label class="remember-toggle">
                  <input type="checkbox" v-model="remember" />
                  <span class="toggler">
                    <span class="active">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:check"
                      ></i>
                    </span>
                    <span class="inactive">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:circle"
                      ></i>
                    </span>
                  </span>
                </label>
                <div class="remember-me">Remember Me</div>
             
              </div>
              <div class="button-wrap has-help">
                <V-Button
                  :loading="isLoading"
                  color="primary"
                  size="big"
                  rounded
                  raised
                  bold
                >
                  Confirm
                </V-Button>
                <span>
                  Or
                  <RouterLink :to="{ name: 'auth' }">
                    Login
                  </RouterLink>
                  an account.
                </span>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

.modern-login {
  position: relative;
  background: $white;
  min-height: 100vh;

  .column {
    &.is-relative {
      position: relative;
    }
  }

  .hero {
    &.has-background-image {
      position: relative;

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #5d4298 !important;
        opacity: 0.6;
      }
    }
  }

  .underlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 66.6%;
    height: 100%;
    background: lighten(#fafafa, 1%);
    z-index: 0;
  }

  .dark-mode {
    position: absolute;
    top: -64px;
    right: 38px;
    transform: scale(0.6);
    z-index: 2;
  }

  .top-logo {
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    img {
      display: block;
      width: 100%;
      max-width: 50px;
      margin: 0 auto;
    }

    svg {
      height: 50px;
      width: 50px;
    }
  }

  .is-image {
    position: relative;
    border-right: 1px solid $fade-grey;

    .hero-image {
      position: relative;
      z-index: 2;
      display: block;
      margin: -80px auto 0 auto;
      max-width: 60%;
      width: 60%;
    }
  }

  .is-form {
    position: relative;
    max-width: 420px;
    margin: 0 auto;

    form {
      animation: fadeInLeft 0.5s;
    }

    .form-text {
      padding: 0 20px;
      animation: fadeInLeft 0.5s;

      h2 {
        font-family: $font-alt;
        font-weight: 400;
        font-size: 2rem;
        color: $primary;
      }

      p {
        color: $muted-grey;
        margin-top: 10px;
      }
    }

    .recover-text {
      font-size: 0.9rem;
      color: $dark-text;
    }

    .login-wrapper {
      padding: 30px 20px;

      .control {
        position: relative;
        width: 100%;
        margin-top: 16px;

        .input {
          padding-top: 14px;
          height: 60px;
          border-radius: 10px;
          padding-left: 55px;
          transition: all 0.3s;

          &:focus {
            background: lighten($fade-grey, 6%);
            border-color: $placeholder;

            ~ .auth-label,
            ~ .autv-icon i {
              color: $muted-grey;
            }
          }
        }

        .error-text {
          color: $danger;
          font-size: 0.8rem;
          display: none;
          padding: 2px 6px;
        }

        .auth-label {
          position: absolute;
          top: 6px;
          left: 55px;
          font-size: 0.8rem;
          color: $dark-text;
          font-weight: 500;
          z-index: 2;
          transition: all 0.3s;
        }

        .autv-icon {
          position: absolute;
          top: 0;
          left: 0;
          height: 60px;
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 24px;
            color: $placeholder;
            transition: all 0.3s;
          }
        }

        &.has-validation {
          .validation-icon {
            position: absolute;
            top: 0;
            right: 0;
            height: 60px;
            width: 60px;
            display: none;
            justify-content: center;
            align-items: center;

            .icon-wrapper {
              height: 20px;
              width: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: $radius-rounded;

              svg {
                height: 10px;
                width: 10px;
                stroke-width: 3px;
                color: $white;
              }
            }

            &.is-success {
              .icon-wrapper {
                background: $success;
              }
            }

            &.is-error {
              .icon-wrapper {
                background: $danger;
              }
            }
          }

          &.has-success {
            .validation-icon {
              &.is-success {
                display: flex;
              }

              &.is-error {
                display: none;
              }
            }
          }

          &.has-error {
            .input {
              border-color: $danger;
            }

            .error-text {
              display: block;
            }

            .validation-icon {
              &.is-error {
                display: flex;
              }

              &.is-success {
                display: none;
              }
            }
          }
        }

        &.is-flex {
          display: flex;
          align-items: center;

          a {
            display: block;
            margin-left: auto;
            color: $muted-grey;
            font-weight: 500;
            font-size: 0.9rem;
            transition: color 0.3s;

            &:hover {
              color: $primary;
            }
          }

          .remember-me {
            font-size: 0.9rem;
            color: $muted-grey;
            font-weight: 500;
          }
        }
      }

      .button-wrap {
        margin: 40px 0;

        &.has-help {
          display: flex;
          align-items: center;

          > span {
            margin-left: 12px;
            font-family: $font;

            a {
              color: $primary;
              font-weight: 500;
              padding: 0 2px;
            }
          }
        }

        .button {
          height: 46px;
          width: 140px;
          margin-left: 6px;

          &:first-child {
            &:hover {
              opacity: 0.8;
            }
          }

          &:nth-child(2) {
            color: $dark-text;
            border-color: $placeholder;
          }
        }
      }
    }
  }
}

.remember-toggle {
  width: 65px;
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: scale(0.9);

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .toggler {
      border-color: $primary;

      .active,
      .inactive {
        transform: translateX(100%) rotate(360deg);
      }

      .active {
        opacity: 1;
      }

      .inactive {
        opacity: 0;
      }
    }
  }

  .toggler {
    position: relative;
    display: block;
    height: 34px;
    width: 61px;
    border: 2px solid $placeholder;
    border-radius: 100px;
    transition: all 0.3s;

    .active,
    .inactive {
      position: absolute;
      top: 2px;
      left: 2px;
      height: 26px;
      width: 26px;
      border-radius: $radius-rounded;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(0) rotate(0);
      transition: all 0.3s ease;

      svg {
        color: $white;
        height: 14px;
        width: 14px;
        stroke-width: 3px;
      }
    }

    .inactive {
      background: $placeholder;
      border-color: $placeholder;
      opacity: 1;
      z-index: 1;
    }

    .active {
      background: $primary;
      border-color: $primary;
      opacity: 0;
      z-index: 0;
    }
  }
}

@media only screen and (max-width: 767px) {
  .modern-login {
    .top-logo {
      top: 30px;
    }

    .dark-mode {
      top: 36px;
      right: 44px;
    }

    .is-form {
      padding-top: 100px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .modern-login {
    .top-logo {
      svg {
        height: 60px;
        width: 60px;
      }
    }

    .dark-mode {
      top: -58px;
      right: 30%;
    }

    .columns {
      display: flex;
      height: 100vh;
    }
  }
}

/* ==========================================================================
Dark mode
========================================================================== */

.is-dark {
  .modern-login {
    background: $dark-sidebar;

    .underlay {
      background: lighten($dark-sidebar, 10%);
    }

    .is-image {
      border-color: lighten($dark-sidebar, 10%);
    }

    .is-form {
      .form-text {
        h2 {
          color: $accent;
        }
      }

      .login-wrapper {
        .control {
          &.is-flex {
            a:hover {
              color: $accent;
            }
          }

          .input {
            background: lighten($dark-sidebar, 4%);

            &:focus {
              border-color: $accent;

              ~ .autv-icon {
                i {
                  color: $accent;
                }
              }
            }
          }

          .auth-label {
            color: $light-text;
          }
        }

        .button-wrap {
          &.has-help {
            span {
              color: $light-text;

              a {
                color: $accent;
              }
            }
          }
        }
      }
    }
  }
  .remember-toggle {
    input {
      &:checked + .toggler {
        border-color: $accent;

        > span {
          background: $accent;
        }
      }
    }

    .toggler {
      border-color: lighten($dark-sidebar, 12%);

      > span {
        background: lighten($dark-sidebar, 12%);
      }
    }
  }
}
</style>
