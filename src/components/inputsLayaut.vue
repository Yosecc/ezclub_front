<script setup lang="ts">
import { ref, computed, defineProps, defineEmit, onMounted, watch } from 'vue'

const emit = defineEmit([
  'changeSelect',
  'changeSwitch',
  'changeCheckbox',
  'changeRadio',
])

const changeData = (input, value) => {
  props.inputsStep.map((element) => {
    if (element.name == input.name) {
      element.model = value
    }
  })
}

const k = ref(0)
const props = defineProps({
  inputsStep: {
    type: Array,
  },
  title_form: {
    type: String,
    default: '',
  },
})

const configClassCol = () => {
  let content = document.querySelectorAll('.contentInputLayaut .ciclo')

  content.forEach((element) => {
    // console.log(element)
    element.childNodes.forEach((e) => {
      if (e.dataset != undefined) {
        if (Object.values(e.dataset).length > 0) {
          e.dataset.class.split(' ').forEach((ele) => {
            element.classList.add(ele)
          })
        }
      }
    })
  })
}

onMounted(() => {
  configClassCol()
})

const showModalCamera = ref(false)

const changeShowModal = (value) => {
  showModalCamera.value = value
}
const takePhoto = (event) => {
  console.log(event)
}
</script>

<template>
  <!-- <p>{{ typeMember }}</p> -->

  <div class="columns is-multiline contentInputLayaut">
    <div class="column is-12">
      <slot> </slot>
    </div>
    <div
      v-for="(input, key) in inputsStep"
      :key="`inputs-${key}-${input.name}`"
      class="column ciclo mb-3"
    >
      <!-- buttonGroup -->
      <V-Field
        v-if="input.typeInput == 'buttonGroup'"
        :data-class="input.class"
        addons
      >
        <V-Control
          v-for="(category, categoryIndex) in input.values"
          :key="`input-values${categoryIndex}`"
        >
          <V-Button
            @click="changeData(input, category)"
            :color="input.model == category ? 'primary' : undefined"
          >
            {{ category }}</V-Button
          >
        </V-Control>
      </V-Field>
      <!-- switch -->
      <V-Field
        v-else-if="input.typeInput == 'switch'"
        :data-class="input.class"
        grouped
      >
        <V-Control :has-error="input.hasError ?? false">
          <V-SwitchSegment
            v-model="input.model"
            :label-true="input.values[1]"
            :label-false="input.values[0]"
            color="primary"
          />
        </V-Control>
      </V-Field>
      <!-- switchEventChange -->
      <V-Field
        v-else-if="input.typeInput == 'switchEventChange'"
        :data-class="input.class"
        grouped
      >
        <V-Control :has-error="input.hasError ?? false">
          <V-SwitchSegment
            v-model="input.model"
            :label-true="input.values[1]"
            :label-false="input.values[0]"
            color="primary"
            @change="$emit('changeSwitch', { input, inputsStep })"
          />
        </V-Control>
      </V-Field>
      <!-- switchEventChangeInput -->
      <V-Field
        v-else-if="input.typeInput == 'switchEventChangeInput'"
        :data-class="input.class"
        grouped
      >
        <V-Control :has-error="input.hasError ?? false">
          <V-SwitchSegment
            v-model="input.model"
            :label-true="input.values[1]"
            :label-false="input.values[0]"
            color="primary"
            @change="input.change(inputsStep)"
          />
        </V-Control>
      </V-Field>
      <!-- file -->
      <V-Field
        v-else-if="input.typeInput == 'file'"
        :data-class="input.class"
        class="px-0 field"
        grouped
      >
        <V-Control class="input-file" :has-error="input.hasError ?? false">
          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                @change="changeData(input, $event.target.files[0])"
              />
              <span class="file-cta" :class="input.model ? 'bg-success' : ''">
                <span class="file-icon">
                  <i class="fas fa-cloud-upload-alt"></i>
                </span>
                <span class="file-label"> {{ input.placeholder }}</span>
              </span>
            </label>
          </div>
        </V-Control>

        <div v-if="input.camera">
          <V-Button @click="showModalCamera = true">Open Camera</V-Button>
          <webCam
            v-model:modal="showModalCamera"
            :key-modal="`${input.modalName}-${key}`"
            @changeShowModal="changeShowModal"
            @takePhoto="(photo) => (input.model = photo)"
          />
        </div>
      </V-Field>
      <!-- ['text','date','number','email','password', 'time', 'color'] -->
      <V-Field
        class="px-0 field"
        v-else-if="
          [
            'text',
            'date',
            'number',
            'email',
            'password',
            'hidden',
            'time',
            'color',
          ].includes(input.typeInput)
        "
        :data-class="input.class"
      >
        <V-Control :has-error="input.hasError ?? false">
          <label class="label" v-if="input.isLabel" :for="input.name"
            ><p>{{ input.placeholder }}</p></label
          >
          <input
            v-model="input.model"
            :name="input.name"
            :type="input.typeInput"
            class="input"
            :placeholder="input.placeholder"
            :disabled="input.disabled ?? false"
            :maxLength="input.maxLength ?? ''"
            @keyup="input.keyUp ? input.keyUp($event, input) : null"
            @change="input.change ? input.change($event, input) : null"
          />
        </V-Control>
      </V-Field>
      <!-- inputsGroup -->
      <V-Field
        class="px-0 field"
        v-else-if="input.typeInput == 'inputsGroup'"
        :data-class="input.class"
      >
        <V-Control :has-error="input.hasError ?? false">
          <p class="mb-4">
            <b>{{ input.text }}</b>
          </p>
          <input
            v-for="(option, keyA) in input.values"
            :key="`option-input-${keyA}`"
            v-model="input.model[option.id]"
            :type="input.type"
            class="input mb-4"
            :placeholder="option.descriptions"
            :disabled="input.disabled ?? false"
            :maxLength="input.maxLength ?? ''"
            @keyup="input.keyUp ? input.keyUp($event, input) : null"
          />
        </V-Control>
      </V-Field>
      <!-- select -->
      <V-Field
        v-else-if="input.typeInput == 'select'"
        :data-class="input.class"
        class="chucutu"
      >
        <label class="label" v-if="input.isLabel" :for="input.name"
          ><p>{{ input.placeholder }}</p></label
        >
        <V-Control class="input-select" :has-error="input.hasError ?? false">
          <div class="select">
            <select v-model="input.model" :disabled="input.disabled ?? false">
              <option value="">{{ input.placeholder }}</option>
              <option
                v-for="(option, keyB) in input.values"
                :key="`option-${keyB}09`"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!-- selectData -->
      <V-Field
        v-else-if="input.typeInput == 'selectData'"
        :data-class="input.class"
        class="bibibi"
      >
        <!-- <p>{{ input.values }}</p> -->
        <V-Control class="input-select" :has-error="input.hasError ?? false">
          <!-- <p>{{ input.values }}</p> -->
          <div class="select">
            <select v-model="input.model" :disabled="input.disabled ?? false">
              <option value="">{{ input.placeholder }}</option>
              <option
                v-for="(option, keyC) in input.values"
                :key="`option-${keyC}08`"
                :value="option.id"
              >
                <span v-if="!input.filterOptionText">
                  <span v-if="option.description">
                    {{ option.description }}
                  </span>
                  <span v-else>
                    {{ option.name }}
                  </span>
                </span>
                <span v-else> {{ input.filterOptionText(option) }} </span>
              </option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!-- selectDataActionChange -->
      <V-Field
        v-else-if="input.typeInput == 'selectDataActionChange'"
        :data-class="input.class"
      >
        <V-Control class="input-select" :has-error="input.hasError ?? false">
          <div class="select">
            <select
              :disabled="input.disabled ?? false"
              v-model="input.model"
              @change="$emit('changeSelect', { input, inputsStep })"
            >
              <option value="">{{ input.placeholder }}</option>

              <option
                v-for="(option, keyD) in input.values"
                :key="`option-${keyD}09`"
                :value="option.id"
              >
                <span v-if="input.filter">{{ input.filter(option) }}</span>
                <span v-else>{{ option.name }}</span>
              </option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!-- selectDataActionChangeInput -->
      <V-Field
        v-else-if="input.typeInput == 'selectDataActionChangeInput'"
        :data-class="input.class"
      >
        <V-Control class="input-select" :has-error="input.hasError ?? false">
          <div class="select">
            <select
              :disabled="input.disabled ?? false"
              v-model="input.model"
              @change="input.change(inputsStep)"
            >
              <option value="">{{ input.placeholder }}</option>

              <option
                v-for="(option, keyD) in input.values"
                :key="`option-${keyD}09`"
                :value="option.id"
              >
                <span v-if="input.filter">{{ input.filter(option) }}</span>
                <span v-else>{{ option.name }}</span>
              </option>
            </select>
          </div>
        </V-Control>
      </V-Field>
      <!-- checkbox -->
      <V-Field
        v-else-if="input.typeInput == 'checkbox'"
        :data-class="input.class"
        :id="`${input.name}`"
      >
        <V-Control
          id="che"
          class="input-checkbox-simple"
          :has-error="input.hasError ?? false"
        >
          <V-Checkbox
            :id="`${input.name}`"
            v-model="input.model"
            :value="input.name"
            :label="input.placeholder"
            :class="input.disabled ? 'is-disabled' : ''"
            color="primary"
            @change="$emit('changeCheckbox', input)"
          />
        </V-Control>
      </V-Field>
      <!-- checkboxGroup -->
      <div
        v-else-if="
          input.typeInput == 'checkboxGroup' && input.values.length > 0
        "
        :data-class="input.class"
        :class="input.multilinea ? 'is-12 columns is-multiline border-1' : ''"
      >
        <p :class="input.multilinea ? 'is-12 column' : ''" v-if="input.text">
          {{ input.text }}
        </p>
        <V-Field
          v-for="(check, keyE) in input.values"
          :key="`check-${keyE}08`"
          :class="input.subClass ? input.subClass : 'mt-5'"
          :id="`${input.name}`"
        >
          <V-Control
            class="input-checkbox-checkboxGroup"
            :has-error="input.hasError ?? false"
          >
            <p>
              <b>{{ check.placeholder }}</b>
            </p>
            <V-Checkbox
              :id="`${input.name}-${keyE}`"
              v-for="(option, keyF) in check.values"
              :key="`option-${keyF}78`"
              v-model="option.model"
              :value="option.name"
              :label="option.placeholder"
              color="primary"
            />
          </V-Control>
        </V-Field>
      </div>
      <!-- checkboxGroupSimple -->
      <V-Field
        v-else-if="input.typeInput == 'checkboxGroupSimple'"
        v-show="input.values.length > 0"
        :data-class="input.class"
        :id="`${input.name}`"
      >
        <p class="title is-6" v-if="input.text">{{ input.text }}</p>
        <div
          class="d-flex flex-wrap input-checkbox-checkboxGroupSimple"
          :class="input.hasError ? 'has-error' : ''"
        >
          <V-Control
            v-for="(check, keyG) in input.values"
            :key="`check-${keyG}78`"
          >
            <V-Checkbox
              v-model="input.model"
              :value="check.id"
              :label="!input.filter ? check.name : input.filter(check)"
              color="primary"
              @change="$emit('changeCheckbox', input)"
            />
          </V-Control>
        </div>
      </V-Field>
      <!-- checkboxGroupSimpleEventInput -->
      <V-Field
        v-else-if="input.typeInput == 'checkboxGroupSimpleEventInput'"
        v-show="input.values.length > 0"
        :data-class="input.class"
        :id="`${input.name}`"
      >
        <p class="title is-6" v-if="input.text">{{ input.text }}</p>
        <div
          class="d-flex flex-wrap input-checkbox-checkboxGroupSimple"
          :class="input.hasError ? 'has-error' : ''"
        >
          <V-Control
            v-for="(check, keyG) in input.values"
            :key="`check-${keyG}78`"
          >
            <V-Checkbox
              v-model="input.model"
              :value="check.id"
              :label="!input.filter ? check.name : input.filter(check)"
              :disabled="input.disabled ?? false"
              color="primary"
              :name="`check-${keyG}78-input${check.id}`"
              :id="`check-${keyG}78-inputid${check.id}`"
              @click="input.click($event, inputsStep, check.id)"
              @change="input.change($event, inputsStep)"
            />
          </V-Control>
        </div>
      </V-Field>
      <!-- checkboxGroupSimpleAvatar -->
      <V-Field
        v-else-if="input.typeInput == 'checkboxGroupSimpleAvatar'"
        :data-class="input.class"
        :id="`${input.name}`"
      >
        <p class="title is-6" v-if="input.placeholder">
          {{ input.placeholder }}
        </p>
        <div class="d-flex flex-wrap">
          <V-Control
            v-for="(check, keyH) in input.values"
            :key="`check-${keyH}79`"
            class="d-flex align-items-center"
          >
            <!-- <VAvatar
                @click="input.model = check.id"
                :picture="check.image"
                squared
              /> -->
            <V-Checkbox
              v-model="input.model"
              :value="check.id"
              :label="check.name"
              color="primary"
              class="pl-1 pr-6"
              @change="$emit('changeCheckbox', input)"
            />
          </V-Control>
        </div>
      </V-Field>
      <!-- textarea -->
      <VField
        v-else-if="input.typeInput == 'textarea'"
        :data-class="input.class"
        :class="input.hasError ? 'has-error' : ''"
      >
        <VControl>
          <textarea
            :rows="input.rows ?? 4"
            v-model="input.model"
            class="textarea"
            :placeholder="input.placeholder"
            :disabled="input.disabled ?? false"
            :maxLength="input.maxLength ?? ''"
            @keyup="input.keyUp ? input.keyUp($event, input) : null"
          ></textarea>
        </VControl>
      </VField>
      <!-- radioBoxs -->
      <form
        class="form-layout is-split"
        v-else-if="input.typeInput == 'radioBoxs' && input.values.length > 0"
        :data-class="input.class"
      >
        <p class="mb-3">{{ input.placeholder }}</p>
        <div class="form-outer">
          <div class="form-body">
            <div class="form-section">
              <V-Field>
                <V-Control
                  class="input-radio-pills"
                  :has-error="input.hasError ?? false"
                >
                  <div class="radio-pills flex-wrap justify-content-start">
                    <div
                      class="radio-pill mb-3"
                      v-for="(check, keyJ) in input.values"
                      :key="`check-${keyJ}38`"
                    >
                      <input
                        type="radio"
                        v-model="input.model"
                        :value="check.id"
                        :name="input.name"
                        @change="$emit('changeRadio', input, inputsStep)"
                      />
                      <div class="radio-pill-inner">
                        <span v-if="input.filterName"
                          >{{ check[input.filterName] }}
                          <span v-if="input.otros">
                            ${{ check[input.otros] }}
                          </span>
                        </span>
                        <span v-else>{{ check.name }}</span>
                      </div>
                    </div>
                  </div>
                </V-Control>
              </V-Field>
            </div>
          </div>
        </div>
      </form>
      <!-- radioBoxsInput -->
      <form
        class="form-layout is-split"
        v-else-if="
          input.typeInput == 'radioBoxsInput' && input.values.length > 0
        "
        :data-class="input.class"
      >
        <p class="mb-3">{{ input.placeholder }}</p>
        <div class="form-outer">
          <div class="form-body">
            <div class="form-section">
              <V-Field>
                <V-Control
                  class="input-radio-pills"
                  :has-error="input.hasError ?? false"
                >
                  <div class="radio-pills flex-wrap justify-content-start">
                    <div
                      class="radio-pill mb-3"
                      v-for="(check, keyJ) in input.values"
                      :key="`check-${keyJ}38`"
                    >
                      <input
                        type="radio"
                        v-model="input.model"
                        :disabled="input.disabled"
                        :value="check.id"
                        :name="input.name"
                        @change="input.change(inputsStep)"
                      />
                      <div class="radio-pill-inner">
                        <span v-if="input.filterName"
                          >{{ check[input.filterName] }}
                          <span v-if="input.otros">
                            ${{ check[input.otros] }}
                          </span>
                        </span>
                        <span v-else>{{ check.name }}</span>
                      </div>
                    </div>
                  </div>
                </V-Control>
              </V-Field>
            </div>
          </div>
        </div>
      </form>
      <!--  -->
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/generic/_forms.scss';
.justify-content-start {
  justify-content: flex-start !important;
}
.form-outer {
  border: 0px !important;
  .form-section {
    padding: 0px !important;
    .radio-pill {
      margin-right: 15px;
      .radio-pill-inner {
        border-radius: 5px !important;
        padding: 8px;
        width: inherit !important;
      }
    }
  }
}
</style>
