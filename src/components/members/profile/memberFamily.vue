<script setup lang="ts">
import { ref, computed } from 'vue'

import {
  memberFamilies,
  member,
  memberParent,
  parentInsputs,
  putMemberGuardian,
  inputsInformation,
} from '/@src/models/Members.ts'
import { API_WEB_URL } from '/@src/services'
import {
  viewInput,
  notyf,
  getInput,
  perpareDataInputs,
  hasErrors,
} from '/@src/models/Mixin.ts'
const families = ref([
  {
    id: 1,
    name: 'Wonder Woman',
    subtitle: 'Mother/Adult',
    img: 'https://picsum.photos/150/150',
  },
  {
    id: 2,
    name: 'Lionel Messi',
    subtitle: 'Father/Minor',
    img: 'https://picsum.photos/150/151',
  },
])

const onSave = () => {
  const data = perpareDataInputs(parentInsputs.value)

  const fd = new FormData()

  for (var i in data) {
    fd.append(i, data[i])
  }
  if (!hasErrors.value) {
    putMemberGuardian(fd).then((response) => {
      notyf.success('Success')
    })
  }
}

const inputsFiltrados = computed(() => {
  console.log('info', inputsInformation.value)

  getInput(parentInsputs.value, 'city_id').model = getInput(
    inputsInformation.value,
    'city_id'
  ).model
  getInput(parentInsputs.value, 'state_id').model = getInput(
    inputsInformation.value,
    'state_id'
  ).model
  getInput(parentInsputs.value, 'postal_code').model = getInput(
    inputsInformation.value,
    'postal_code'
  ).model
  getInput(parentInsputs.value, 'country_id').model = getInput(
    inputsInformation.value,
    'country_id'
  ).model

  return parentInsputs.value
})
</script>

<template>
  <div>
    <VCardAdvanced v-if="member && member.category == 'Adult'">
      <template #header-left>
        <div>
          <h1 class="title is-4 mb-0">Family Members</h1>
          <p>Edit member's family members</p>
        </div>
      </template>
      <template #header-right>
        <!-- <VButton color="primary"> Save Changes </VButton> -->
      </template>
      <template #content>
        <div class="columns is-multiline">
          <!-- <p>{{ memberParent.photo }}</p> -->
          <div v-if="memberParent" class="column is-4 mb-4">
            <VBlock
              :title="`${memberParent.name} ${memberParent.second_name} ${memberParent.last_name}`"
              class="border-1 p-4 radius-small"
            >
              <template #icon>
                <VAvatar
                  size="medium"
                  :picture="`${API_WEB_URL}storage/${memberParent.photo}`"
                  :subtitle="'Principal Family'"
                />
              </template>
              <template #action>
                <FlexTableDropdown :id-member="memberParent.id" />
              </template>
            </VBlock>
          </div>

          <div
            class="column is-4 mb-4"
            v-for="(item, key) in memberFamilies"
            :key="`family-${key}`"
          >
            <VBlock
              :title="`${item.member.name} ${item.member.second_name} ${member.last_name}`"
              :subtitle="item.member.relationships"
              class="border-1 p-4 radius-small"
            >
              <template #icon>
                <VAvatar
                  size="medium"
                  :picture="`${API_WEB_URL}storage/${item.member.photo}`"
                />
              </template>
              <template #action>
                <FlexTableDropdown :id-member="item.members_id" />
              </template>
            </VBlock>
          </div>
        </div>
      </template>
    </VCardAdvanced>
    <VCardAdvanced v-if="member && member.category == 'Minor'">
      <template #header-left>
        <div>
          <h1 class="title is-4 mb-0">Parent</h1>
          <p>Edit parent contact</p>
        </div>
      </template>
      <template #header-right>
        <VButton @click="onSave" color="primary"> Save Changes </VButton>
      </template>
      <template #content>
        <div class="">
          <h1 class="title is-5">Parent Contact Information</h1>

          <div class="d-flex justify-content-end mr-6">
            <VAvatar
              :picture="`${API_WEB_URL}storage/${
                getInput(parentInsputs, 'parent_photo').data
              }`"
              size="large"
            />
          </div>
          <inputsLayaut :inputs-step="inputsFiltrados" />
        </div>
      </template>
    </VCardAdvanced>
  </div>
</template>

<style lang="scss" scope></style>
