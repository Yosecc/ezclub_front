<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { API_WEB_URL } from '/@src/services/index.ts'
import { moneda } from '/@src/models/Mixin.ts'
import { addProduct } from '/@src/models/Store.ts'

const route = useRoute()

const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
})

onMounted(() => {})
</script>

<template>
  <a href="#" @click.prevent="addProduct(product)" class="card-grid-item">
    <img
      :src="`${API_WEB_URL}storage/${product.photo}`"
      alt=""
      @error.once="$event.target.src = 'https://via.placeholder.com/400x300'"
    />
    <div class="card-grid-item-content">
      <h3 class="dark-inverted text-center">
        <h2 class="title is-6">{{ product.name }}</h2>
        <h2 class="title is-5">{{ moneda(product.price) }}</h2>
        <p v-if="product.stock" class="is-7 title">
          Stock: {{ product.stock.current_stock }}
        </p>
        <p v-else class="is-7 title">Stock: 0</p>
        <p>{{ product.category.name }}</p>
      </h3>
    </div>
    <div class="card-grid-item-footer">
      <VButton color="white" class="w-100 justify-content-center">
        ADD
      </VButton>
    </div>
  </a>
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
.card_counte {
  & > div {
    position: sticky;
    top: 10px;
  }
}

.card-grid-item {
  // position: relative !important;
  &:hover {
    box-shadow: 3px 3px 2px rgba(black, 0.3) !important;
  }
}
</style>
