<script setup lang="ts">
import { ref } from 'vue'

import { memberFamilies, member, memberParent } from '/@src/models/Members.ts'

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
</script>

<template>
  <VCardAdvanced v-if="member">
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
                :picture="memberParent.photo"
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
              <VAvatar size="medium" :picture="item.photo" />
            </template>
            <template #action>
              <FlexTableDropdown :id-member="item.members_id" />
            </template>
          </VBlock>
        </div>
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
