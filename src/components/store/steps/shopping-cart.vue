<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { API_WEB_URL } from '/@src/services/index.ts'
import { moneda } from '/@src/models/Mixin.ts'
import {
  cart,
  subTotal,
  tax,
  total,
  changeCountProduct,
} from '/@src/models/Store.ts'

const route = useRoute()

const props = defineProps({})

const emit = defineEmit(['proccessCheckout'])

onMounted(() => {})
</script>

<template>
  <VCard
    class="d-flex flex-column justify-content-between"
    style="min-height: 500px"
  >
    <div>
      <slot></slot>
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Cuantity</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, key) in cart" :key="`cart-${key}`">
            <td>{{ i.name }}</td>
            <td>
              <div class="d-flex">
                <VTag
                  color="white"
                  @click="changeCountProduct('minus', i, key)"
                  label="-"
                />
                <VTag color="white" :label="i.count" />
                <VTag
                  color="white"
                  @click="changeCountProduct('plus', i, key)"
                  label="+"
                />
              </div>
            </td>
            <td>{{ moneda(i.products_amount * i.count) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="">
      <hr />
      <table class="table is-striped is-fullwidth">
        <tbody>
          <tr>
            <td>SubTotal</td>
            <td class="text-right">{{ moneda(subTotal) }}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td class="text-right">{{ moneda(tax) }}</td>
          </tr>
          <tr>
            <td><b>Total</b></td>
            <td class="text-right">{{ moneda(total) }}</td>
          </tr>
        </tbody>
      </table>
      <VButton
        color="success"
        :disabled="cart.length == 0"
        @click="$emit('proccessCheckout')"
        class="w-100 justify-content-center"
      >
        Checkout
      </VButton>
    </div>
  </VCard>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

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
