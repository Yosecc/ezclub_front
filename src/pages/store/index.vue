
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
pageTitle.value = 'Store'
useHead({
  title: 'Store',
})

const route = useRoute()

onMounted(() => {

})

import { posts } from '/@src/data/layouts/card-grid-v4'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return posts
  } else {
    return posts.filter((item) => {
      return (
        item.title.match(new RegExp(filters.value, 'i')) ||
        item.author.name.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'All Posts',
  'Recent Posts',
  'Older Posts',
  'Popular Posts',
]
</script>

<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner columns is-multiline">
      <div class="column is-8">

        <div class="card-grid-toolbar">
          
          <div class="columns is-multiline w-100">
            <VCard 
              v-for="(i, key) in 5"
              radius="small" 
              class="column is-2 d-flex flex-column align-items-center justify-content-center text-center cursor-pointer">
               <VAvatar
                  size="medium"
                  :picture="`https://picsum.photos/20${i}/300`"
                />
                <p>Category Name</p>
            </VCard>
          </div>
       

          <V-Control icon="feather:search">
            <input
              v-model="filters"
              class="input custom-text-filter"
              placeholder="Search..."
            />
          </V-Control>
          
        </div>

        <div class="card-grid card-grid-v4">
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
                src="/@src/assets/illustrations/placeholders/search-4.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                alt=""
              />
            </template>
          </V-PlaceholderPage>

          <transition-group name="list" tag="div" class="columns is-multiline">
            <!--Grid item-->
            <div v-for="item in filteredData" :key="item.id" class="column is-3">
              <a href="#" class="card-grid-item">
                <img
                  :src="item.image"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/400x300'
                  "
                />
                <div class="card-grid-item-content">
                  <h3 class="dark-inverted">
                    {{ item.title }}
                  </h3>
                </div>
                <div class="card-grid-item-footer">
                  <V-Avatar :picture="item.author.avatar" size="small" />
                  <div class="meta">
                    <span class="dark-inverted">{{ item.author.name }}</span>
                    <span>{{ item.published }}</span>
                  </div>
                </div>
              </a>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="column is-4 card_counte">
        <div>
          <VCard class="mb-4" radius="small">
            <p>Pasos</p>
          </VCard>
         <VCard radius="small">
            <h3 class="title is-5 mb-2">Iam an S-Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
              multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
              ridens.
            </p>
          </VCard>
        </div>  
      </div>
    </div>
  </SidebarLayout>
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

.card-grid-v4 {
  .card-grid-item {
    @include vuero-s-card();

    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 16px;
    min-height: 300px;

    &:hover {
      box-shadow: $light-box-shadow;
    }

    > img {
      display: block;
      border-radius: 12px;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .card-grid-item-content {
      padding: 12px 5px;

      h3 {
        font-family: $font-alt;
        font-size: 1rem;
        font-weight: 600;
        color: $dark-text;
        line-height: 1.3;
      }
    }

    .card-grid-item-footer {
      display: flex;
      align-items: center;
      margin-top: auto;
      padding: 0 5px 10px 5px;

      .meta {
        margin-left: 8px;
        line-height: 1.2;

        span {
          display: block;
          font-weight: 400;

          &:first-child {
            font-family: $font-alt;
            font-size: 0.9rem;
            color: $dark-text;
            font-weight: 600;
          }

          &:nth-child(2) {
            font-family: $font;
            font-size: 0.85rem;
            color: $light-text;
          }
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v4 {
    .card-grid-item {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .card-grid-v4 {
    .columns {
      display: flex;
    }

    .column {
      width: 33.3%;
      min-width: 33.3%;
    }
  }
}
.card_counte{
  & >div{
    position: sticky;
  top: 10px;
  }
}
</style>
