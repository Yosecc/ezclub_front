<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
import {
  memberMermship,
  inputsMembership,
  member,
  memberMembershipsHistory,
  putMembership,
  cancelMembershipMembers,
  isSolvente,
} from '/@src/models/Members.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputValuesData,
  perpareDataInputs,
  setInputModelData,
  notyf,
} from '/@src/models/Mixin.ts'
import { Api, API_WEB_URL } from '/@src/services'
import { recurrences } from '/@src/models/Recurrences.ts'

const changeSelect = (obj) => {
  if (obj.input.name == 'memberships_id') {
    let membershipSelected = obj.input.values.find(
      (element) => element.id == obj.input.model
    )
    setInputModelData(
      obj.inputsStep,
      'initiation_fee',
      membershipSelected.initiation_fee
    )
    let locations = []
    membershipSelected.locations.forEach((element) => {
      if (element.sale == 1) {
        locations.push(element.company_locations)
      }
    })
    setInputValuesData(obj.inputsStep, 'locations_id', locations)

    let recurrencesData = []
    membershipSelected.amounts.forEach((element) => {
      let recurrencesD = recurrences.value.find(
        (e) => e.id == element.recurrences_id
      )
      recurrencesD.amount = element.amount
      recurrencesData.push(recurrencesD)
    })
    // setInputValuesData(obj.inputsStep, 'recurrences_id', recurrencesData)
    // reloadForm()
  }

  if (obj.input.name == 'locations_id') {
    getLocationsDiciplines([obj.input.model]).then((response) => {
      setInputValuesData(obj.inputsStep, 'diciplines', response.data)
    })
  }
}

const changeRadio = (input, inputs) => {
  if (input.name == 'recurrences_id') {
    setInputModelData(
      inputs,
      'amount',
      input.values.find((e) => e.id == input.model).amount
    )
  }
}

const onSave = () => {
  const data = perpareDataInputs(inputsMembership.value)

  putMembership(data).then((response) => {
    notyf.success('Success')
  })
}

const onCancel = () => {
  cancelMembershipMembers().then((response) => {
    console.log(response)
  })
}

const onNew = () => {
  const data = perpareDataInputs(inputsMembership.value)
}
</script>

<template>
  <div>
    <VCardAdvanced>
      <template #header-left>
        <div>
          <h1 class="title is-4 mb-0">Membership / Contract</h1>
          <p>Edit member's membership and contract information</p>
        </div>
      </template>
      <template #header-right>
        <VButton v-if="memberMermship" @click="onCancel" color="" class="mr-4">
          Cancel Membership
        </VButton>
        <VButton v-if="memberMermship" @click="onSave" color="primary">
          Save Changes
        </VButton>

        <VButton v-if="!memberMermship" @click="onNew" color="primary">
          New Membership
        </VButton>
      </template>
      <template #content>
        <VCard class="mb-4">
          <h1 class="title is-6">Active Contract Information</h1>
          <div class="columns is-multiline">
            <div class="column is-12">
              <inputsLayaut
                :inputs-step="inputsMembership"
                @changeSelect="changeSelect"
                @changeRadio="changeRadio"
              />
            </div>
            <div
              v-if="member && memberMermship"
              class="columns is-multiline column mt-4 is-12"
            >
              <div>
                <p>
                  <b>Contract Date:</b>
                  {{
                    moment(member.membership_members.created_at).format(
                      'ddd - DD MMM yyyy'
                    )
                  }}
                </p>

                <p>
                  <b>Cancelation date: </b>
                  <span v-if="member.membership_members.cacelation_date">{{
                    moment(member.membership_members.cacelation_date).format(
                      'ddd - DD MMM yyyy'
                    )
                  }}</span
                  ><span v-else> N/A </span>
                </p>
              </div>

              <div class="column is-12">
                <div class="text-center">
                  <a
                    target="_blank"
                    :href="`${API_WEB_URL}generateContract/${member.id}`"
                  >
                    <img src="/public/images/pdf_icon.png" width="40" alt="" />
                    <p>
                      contract_{{ member.id }}_{{
                        member.membership_members.id
                      }}_{{ member.personal_identifications }}.pdf
                    </p>
                    <V-Button color="success" outlined class="mt-4 py-1">
                      View PDF
                    </V-Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </VCard>

        <VCard class="mb-4" v-if="member">
          <h1 class="title is-6">Inactive Contract Information</h1>
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">Contract</th>
                <th scope="col">Agreement Date</th>
                <th scope="col">Sold By</th>
                <th scope="col">Membership Type</th>
                <th scope="col">Decipline</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Auto Renew</th>
                <th scope="col">Discount Type</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, key) in memberMembershipsHistory"
                :key="`item-${key}`"
              >
                <td>
                  <a :href="item.contract"
                    ><img src="/public/images/pdf_icon.png" width="40" alt=""
                  /></a>
                </td>
                <td>
                  {{ moment(item.created_at).format('dd - DD MMM YYYY') }}
                </td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.membership.name }}</td>

                <td>
                  <span
                    v-if="
                      item.diciplines != '' ||
                      item.diciplines != null ||
                      item.diciplines != undefined
                    "
                  >
                    <span
                      v-for="(dicipline, ke) in item.diciplines"
                      :key="`dicipline-${ke}`"
                    >
                      <span> {{ dicipline.dicipline.name }} </span>
                    </span>
                  </span>

                  <span v-else>N/A</span>
                </td>
                <td>
                  {{ moment(item.created_at).format('dd - DD MMM YYYY') }}
                </td>
                <td>
                  {{ moment(item.cacelation_date).format('dd - DD MMM YYYY') }}
                </td>
                <td>
                  <span>
                    {{ item.is_recurrence ? 'Recurrence' : 'Not Recurrence' }}
                  </span>
                  <span v-if="item.is_recurrence">{{
                    item.recurrence.recurrence
                  }}</span>
                </td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </VCard>

        <VCard class="mb-4" v-if="member && memberMermship">
          <h1 class="title is-6">Active Waiver Information</h1>
          <div class="text-center">
            <a
              target="_blank"
              :href="`${API_WEB_URL}generateWeiver/${member.id}`"
            >
              <img src="/public/images/pdf_icon.png" width="40" alt="" />
              <p>
                weiver_{{ member.id }}_{{ member.membership_members.id }}_{{
                  member.personal_identifications
                }}.pdf
              </p>
              <V-Button color="success" outlined class="mt-4 py-1">
                View PDF
              </V-Button>
            </a>
          </div>
        </VCard>
      </template>
    </VCardAdvanced>
  </div>
</template>

<style lang="scss" scope></style>
