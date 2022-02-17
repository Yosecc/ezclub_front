<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { putStatus } from '/@src/models/Diciplines.ts'

const props = defineProps({
  diciplines: {
    type: Array,
    default: [],
  },
})

const filters = ref('')

const items = ref([
  {
    image: 'https://picsum.photos/150/152',
    name: 'Boxing',
    description: 'This membership allow members full access gyn facility',
    locations: [
      {
        img: 'https://picsum.photos/151/152',
      },
      {
        img: 'https://picsum.photos/151/151',
      },
    ],
    status: true,
  },
  {
    image: 'https://picsum.photos/150/152',
    name: 'Boxing',
    description: 'This membership allow members full access gyn facility',
    locations: [
      {
        img: 'https://picsum.photos/151/152',
      },
      {
        img: 'https://picsum.photos/151/151',
      },
    ],
    status: true,
  },
  {
    image: 'https://picsum.photos/150/152',
    name: 'Boxing',
    description: 'This membership allow members full access gyn facility',
    locations: [
      {
        img: 'https://picsum.photos/151/152',
      },
      {
        img: 'https://picsum.photos/151/151',
      },
    ],
    status: true,
  },
  {
    image: 'https://picsum.photos/150/152',
    name: 'Boxing',
    description: 'This membership allow members full access gyn facility',
    locations: [
      {
        img: 'https://picsum.photos/151/152',
      },
      {
        img: 'https://picsum.photos/151/151',
      },
    ],
    status: true,
  },
  {
    image: 'https://picsum.photos/150/152',
    name: 'Boxing',
    description: 'This membership allow members full access gyn facility',
    locations: [
      {
        img: 'https://picsum.photos/151/152',
      },
      {
        img: 'https://picsum.photos/151/151',
      },
    ],
    status: true,
  },
  {
    image: 'https://picsum.photos/150/152',
    name: 'Boxing',
    description: 'This membership allow members full access gyn facility',
    locations: [
      {
        img: 'https://picsum.photos/151/152',
      },
      {
        img: 'https://picsum.photos/151/151',
      },
    ],
    status: true,
  },
])

const filteredData = computed(() => {
  if (!filters.value) {
    return props.diciplines
  } else {
    // return projects.filter((item) => {
    //   return (
    //     item.name.match(new RegExp(filters.value, 'i')) ||
    //     item.remaining.match(new RegExp(filters.value, 'i'))
    //   )
    // })
  }
  return []
})

const valueSingle = ref(0)
const optionsSingle = [
  'All Projects',
  'Web Apps',
  'Mobile Apps',
  'Dashboards',
  'Landing Pages',
]
</script>

<template>
  <div>
    <div class="card-grid-toolbar">
      <V-Control icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </V-Control>

      <div class="buttons">
        <V-Button
          :to="{ name: 'settings-disciplines-create' }"
          color="primary"
          raised
        >
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>New Discipline</span>
        </V-Button>
      </div>
    </div>

    <div class="card-grid card-grid-v3">
      <!--List Empty Search Placeholder -->
      <V-PlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
            alt=""
          />
        </template>
      </V-PlaceholderPage>

      <!--Card Grid v3-->
      <transition-group
        name="list"
        tag="div"
        class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
      >
        <!--Grid Item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-4">
          <div class="card-grid-item">
            <!-- <p>{{ item }}</p> -->
            <div class="d-flex justify-content-between">
              <label class="h-toggle">
                <input
                  type="checkbox"
                  @change="putStatus(item)"
                  :checked="!item.status"
                />
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
              <h1 class="title is-4 mb-0">{{ item.name }}</h1>
              <p>{{ item.descrptions }}</p>
            </div>

            <div class="d-flex">
              <VAvatar
                v-tooltip="location.location.name"
                v-for="(location, key) in item.locations"
                :key="`membership_location-${key}`"
                class="mr-3"
                :picture="location.location.image"
              />
            </div>

            <div class="d-flex justify-content-end mt-5">
              <V-Button
                :to="{
                  name: 'settings-disciplines-edit',
                  query: { id: item.id },
                }"
                raised
              >
                <span class="icon">
                  <i class="fas fa-edit"></i>
                </span>
                <span>Edit discipline</span>
              </V-Button>
            </div>
          </div>
        </div>
      </transition-group>
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

.cardBox {
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
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-grid-v3 .card-grid-item > h3 {
    font-size: 1rem;
  }
}
</style>
