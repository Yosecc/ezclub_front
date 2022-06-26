<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
import { accessDay, member } from '/@src/models/Members.ts'
</script>

<template>
  <VCardAdvanced v-if="member">
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Check-ins History</h1>
        <p>Edit member's check-ins history</p>
      </div>
    </template>
    <template #header-right> </template>
    <template #content>
      <div class="p-6">
        <!-- <div class="d-flex">
          <V-Field class="field mr-3">
            <V-Control>
              <input
                type="date"
                class="input"
                placeholder="input.placeholder"
              />
            </V-Control>
          </V-Field>
          <V-Field class="field mr-3">
            <V-Control>
              <input
                type="date"
                class="input"
                placeholder="input.placeholder"
              />
            </V-Control>
          </V-Field>
          <VButton color="primary"> Export </VButton>
        </div> -->

        <div class="mt-4">
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">DATE</th>
                <th scope="col">TIME</th>
                <!-- <th scope="col">STAFF</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(access, key) in accessDay" :key="`access-${key}`">
                <td>{{ moment(access.created_at).format('MM/DD/YYYY') }}</td>
                <td>{{ moment(access.created_at).format('HH:mm:ss') }}</td>
                <!-- <td>{{ access.user.name }}</td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
