<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { reactive, ref, watch } from 'vue'
import { notyf } from '/@src/models/Mixin'
const country = ref('')
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { Api } from '/@src/services'

pageTitle.value = 'Form Layouts 3'
useHead({
  title: 'Form Layouts 3 - Sidebar - Vuero',
})
const surveypublic = reactive({
  member_id: '',
  trainer: '',
  ask1: '',
  ask2: '',
  ask3: '',
  ask4: '',
  ask5: '',
  ask6: '',
  ask7: '',
  ask8: '',
})
const survey = () => {
  let contador = 0
  for (var campo in surveypublic) {
    if (surveypublic[campo] == '') {
      document.getElementById(campo)?.classList.add('campoempty')
      contador++
    }
  }
  if (contador) {
    notyf.error('Fill in the missing fields')
    return
  }
  surveysave()
}

const miembros = ref([])

const searchmember = (value) => {
  Api.get('searchmember?value=' + value).then((response) => {
    console.log(response.data)
    miembros.value = response.data
  })
}

const seleccionmiembro = (miembro) => {
  surveypublic.member_id = miembro.id
  value.value = miembro.name + ' ' + miembro.last_name
  miembros.value = []
}

const value = ref('')

const surveysave = () => {
  Api.post('surveysave', surveypublic)
    .then((response) => {
      notyf.success(response.data)
    })
    .catch((error) => {
      console.log(error.response.data)
      for (var i in error.response.data) {
        error.response.data[i].forEach((element) => {
          notyf.error(element)
        })
      }
    })
}
watch(
  () => value.value,
  () => {
    //surveypublic.member_id = ''
  }
)
</script>

<template>
  <div class="page-content-inner">
    <form class="form-layout is-separate" @submit.prevent="survey">
      <div class="form-outer">
        <div class="form-body">
          <div class="form-section">
            <div class="form-section-inner has-padding-bottom">
              <img
                src="/public/images/logos/logo/logo-kozone-bo.png"
                style="justify-content: center"
                width="300"
                height="300"
              />
              <h3 style="padding-top: 50px" class="has-text-centered">
                CLASS RATING<br />LET US KNOW WHAT YOU THINK TO IMPROVE OUR
                SERVICES
              </h3>

              <div class="columns is-multiline">
                <div class="column is-12">
                  <V-Field>
                    <label>Name of Instructor and Class:</label>
                    <V-Control icon="feather:user">
                      <input
                        type="text"
                        id="trainer"
                        class="input"
                        v-model="surveypublic.trainer"
                        placeholder="Trainer Name"
                        autocomplete=""
                      /><br />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>Member Name</label>
                    <V-Control icon="feather:user">
                      <input
                        type="text"
                        id="member_id"
                        class="input"
                        v-model="value"
                        @keyup="value.length > 3 ? searchmember(value) : null"
                        placeholder="Member name, last name or email"
                        autocomplete=""
                      /><br />
                    </V-Control>
                  </V-Field>
                  <div>
                    <ul style="text-color: red">
                      <li
                        v-for="(item, key) in miembros"
                        :key="`miembro-${key}`"
                        @click="seleccionmiembro(item)"
                      >
                        {{ item.name }} {{ item.last_name }} {{ item.email }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div style="color: black font-weight: bold">
                  <p>
                    <br />Answer using numbers from 1 to 10, 1 being very bad
                    and 10 being excellent.
                  </p>
                  <br />
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label
                      >1. How would you rate the organization of the
                      class?</label
                    >
                    <V-Control>
                      <input
                        type="number"
                        id="ask1"
                        class="input"
                        v-model="surveypublic.ask1"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete=""
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label
                      >2. How well did the instructor engage and motivate the
                      class?</label
                    >
                    <V-Control>
                      <input
                        type="number"
                        id="ask2"
                        class="input"
                        v-model="surveypublic.ask2"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete=""
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label
                      >3. How well did the instructor guide class / teach you
                      the technique? </label
                    >
                    <V-Control>
                      <input
                        type="number"
                        id="ask3"
                        class="input"
                        v-model="surveypublic.ask3"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete="street-address"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label
                      >4. How much did the class increase your knowledge?</label
                    >
                    <V-Control>
                      <input
                        type="number"
                        id="ask4"
                        class="input"
                        v-model="surveypublic.ask4"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete="street-address"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label
                      >5. How would you rate the instructor’s overall
                      performance? </label
                    >
                    <V-Control>
                      <input
                        type="number"
                        id="ask5"
                        class="input"
                        v-model="surveypublic.ask5"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete="address-level2"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>6. How much would you rate the overall class?</label>
                    <V-Control>
                      <input
                        type="number"
                        id="ask6"
                        class="input"
                        v-model="surveypublic.ask6"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete=""
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>7. How likely are you to come back?</label>
                    <V-Control>
                      <input
                        type="number"
                        id="ask7"
                        class="input"
                        v-model="surveypublic.ask7"
                        placeholder="1  2  3  4  5  6  7  8  9  10"
                        autocomplete=""
                      />
                    </V-Control>
                  </V-Field>
                </div>

                <div class="column is-12">
                  <V-Field>
                    <label
                      >8. Feel free to leave any additional thoughts / comments
                      about your experience.</label
                    >
                    <V-Control>
                      <input
                        type="text"
                        id="ask8"
                        class="textarea"
                        v-model="surveypublic.ask8"
                        placeholder=""
                        autocomplete=""
                      />
                    </V-Control>
                  </V-Field>
                  <div class="button-wrap,">
                    <V-Button
                      style="justify-content: center"
                      color="primary"
                      bold
                      type="submit"
                      raised
                      fullwidth
                    >
                      SEND
                    </V-Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_forms.scss';
.campoempty {
  border-color: red !important;
  .multiselect-input {
    border-color: red !important;
  }
}
</style>
