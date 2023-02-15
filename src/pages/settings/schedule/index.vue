<script>
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'

import '@fullcalendar/core/vdom' // solves problem with Vite

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

import moment from 'moment'
import { getSchedules } from '/@src/models/Schedule.ts'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import {
  locations,
  getCompany,
  company,
  locationsSelect,
  locationsActives,
  setLocationSistem,
} from '/@src/models/Companies.ts'
import {
  notyf,
  perpareDataInputs,
  cleanUpModelInputs,
  viewInput,
  getInput,
  getValueInput,
  setInputValuesData,
  setInputModelData,
  getValuesInput,
} from '/@src/models/Mixin.ts'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data: function () {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        firstDay: 1,
        initialView: 'timeGridWeek',
        initialEvents: [],
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        allDaySlot: false,
        eventTimeFormat: {
          // like '14:30:00'
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          meridiem: false,
        },
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
      centeredActionsOpen: false,
      selectInfoData: null,
      typeForm: 'create',
      idEvent: null,
      locationsSelect: locationsSelect,
      company: company,
    }
  },
  watch: {
    locationChange: function (to) {
      // cookies.set('locations_id', to)
      setLocationSistem(to)
      getSchedules(to).then((response) => {
        this.calendarOptions.events = response.data
      })
    },
  },
  computed: {
    locationChange() {
      return this.locationsSelect[0].model
    },
  },
  mounted() {
    pageTitle.value = 'Classes / Schedule'
    if (cookies.get('locations_id') != null) {
      getSchedules(parseFloat(cookies.get('locations_id'))).then((response) => {
        this.calendarOptions.events = response.data
      })
    } else {
      // notyf.error('require locations_id')
      // console.error('requiere locations_id')
    }
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      this.typeForm = 'create'
      this.centeredActionsOpen = true
      this.selectInfoData = null
      this.selectInfoData = selectInfo
      this.idEvent = null
    },
    handleEventClick(clickInfo) {
      this.centeredActionsOpen = true
      this.selectInfoData = null
      this.typeForm = 'edit'
      this.idEvent = clickInfo.event._def.publicId
    },
    handleEvents(events) {
      this.currentEvents = events
    },
    addEvent(event) {
      let index = this.calendarOptions.events.findIndex((e) => e.id == event.id)
      if (index > 0) {
        this.calendarOptions.events.splice(index, 1)
        this.calendarOptions.events.push(event)
      } else {
        this.calendarOptions.events.push(event)
      }
      this.centeredActionsOpen = false
    },
    deleteEvent(id) {
      let index = this.calendarOptions.events.findIndex((e) => e.id == id)

      if (index > 0) {
        // console.log(index)
        this.calendarOptions.events.splice(index, 1)
      }
      this.centeredActionsOpen = false
    },
  },
}
</script>

<template>
  <SidebarLayout>
    <div class="page-content-inner">
      <div class="d-flex justify-content-between w-100">
        <!-- <p>{{ locationChange }}</p> -->
        <inputsLayaut class="w-100" :inputs-step="locationsSelect" />
        <V-Button
          :to="{ name: 'settings-schedule-create' }"
          color="primary"
          raised
          class="mb-4"
          >New Schedule</V-Button
        >
      </div>
      <!-- <p>{{ calendarOptions }}</p> -->
      <FullCalendar class="demo-app-calendar" :options="calendarOptions">
        <template #eventContent="arg">
          <p>
            <b
              ><i>{{ arg.event.title }}</i></b
            >
          </p>
          <p
            class="ml-2"
            v-for="(i, k) in arg.event.extendedProps.trainers"
            :key="k"
            style="font-size: 9px"
          >
            {{ i.name }}
          </p>
        </template>
      </FullCalendar>
      <V-Modal
        :open="centeredActionsOpen"
        size="big"
        @close="centeredActionsOpen = false"
      >
        <template #content>
          <scheduleForm
            :select-info-data="selectInfoData"
            @addEvent="addEvent"
            @deleteEvent="deleteEvent"
            :type="typeForm"
            :id-event="idEvent"
          />
        </template>
        <template #action>
          <V-Button color="primary" raised>Confirm</V-Button>
        </template>
      </V-Modal>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/elements/_cards.scss';
.fc-view-harness.fc-view-harness-active {
  // @extend .r-card;
  transition: all 0.3s;
  border-radius: 10px;
  // border: 1px solid #e5e5e5;
  background: #323236;
  border-color: #404046;
}
div,
.fc-timegrid-slots,
.fc-timegrid-slot-label {
  color: #a2a5b9 !important;
}
a.fc-col-header-cell-cushion {
  color: #a2a5b9 !important;
  &:hover {
    color: #a2a5b9 !important;
  }
}
table {
  border-color: rgba(#a2a5b9, 0) !important;
  border-width: 0px;
  border-radius: 10px;
  &.fc-col-header {
    width: 100% !important;
  }
  th {
    border-color: rgba(#a2a5b9, 0.2) !important;
    border-width: 0px;
    border-right: none;
  }
  td {
    border: 1px solid rgba(#a2a5b9, 0.1) !important;
  }
}

.fc-scroller {
  &::-webkit-scrollbar {
    // display: none;
    background: #323236;
  }
  &::-webkit-scrollbar-thumb {
    background: #404046;
    border-radius: 10px;
  }
}

.fc-timegrid-event {
  background: #00838f;
  border: 0px !important;
}

.fc-timegrid-event-harness-inset .fc-timegrid-event,
.fc-timegrid-event.fc-event-mirror,
.fc-timegrid-more-link {
  box-shadow: none !important;
  padding: 2px;
}

.fc .fc-timegrid-col.fc-day-today {
  background: rgba(#e0f7fa, 0.03) !important;
}
.fc-direction-ltr .fc-timegrid-col-events {
  margin: 0 6.5% 0 2px;
}
</style>
