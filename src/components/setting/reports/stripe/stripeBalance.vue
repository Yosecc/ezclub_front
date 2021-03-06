<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
  },
  balance: {
    type: Object,
  },
})
</script>

<template>
  <div class="banking-dashboard banking-dashboard-v3">
    <div class="columns">
      <div class="column is-12">
        <!--Tiles-->
        <div class="dashboard-tiles">
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Balance Available</span>
            <span class="dark-inverted"
              >$ {{ balance.balance_available / 100 }}</span
            >
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Balance Instant</span>
            <span class="dark-inverted"
              >$ {{ balance.instant_available / 100 }}</span
            >
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Balance Pending</span>
            <span class="dark-inverted">$ {{ balance.pending / 100 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';

.banking-dashboard-v3 {
  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $font;
    margin-bottom: 20px;

    .left {
      > span {
        color: $light-text;
      }

      .currency {
        .amount {
          position: relative;
          font-size: 2rem;
          font-weight: 600;
          color: $dark-text;

          &.is-positive {
            &::after {
              color: $h-green;
            }
          }

          &.is-negative {
            &::after {
              color: $h-red;
            }
          }

          &::after {
            content: '+3.4%';
            position: relative;
            top: -8px;
            right: -8px;
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  .dashboard-tiles {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -8px;
    margin-bottom: 1rem;

    .dashboard-tile {
      @include vuero-s-card();

      width: calc(33.3% - 16px);
      margin: 8px;

      span {
        display: block;
        font-family: $font;

        &:first-child {
          font-size: 0.9rem;
          color: $light-text;
          margin-bottom: 4px;
        }

        &:nth-child(2) {
          font-weight: 500;
          font-size: 1.2rem;
          color: $dark-text;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card();

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-side {
      padding: 30px;

      .people {
        .v-avatar {
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }
    }

    &.is-wallet {
      img {
        display: block;
        max-width: 200px;
        margin: 0 auto;
      }
    }

    .subheading-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .subheading {
        font-family: $font-alt;
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: $dark-text;
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .currency-description {
      padding: 10px 0 20px 0;
    }

    .button-wrap {
      display: flex;
      justify-content: space-between;

      .button {
        width: 49%;
      }
    }
  }
}

.is-dark {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        @include vuero-card--dark();
      }
    }

    .dashboard-card {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (max-width: 767px) {
  .banking-dashboard-v3 {
    .dashboard-header {
      flex-direction: column;

      .left {
        margin-bottom: 1.5rem;
      }
    }

    .dashboard-tiles {
      flex-wrap: wrap;

      .dashboard-tile {
        width: calc(100% - 16px) !important;
        min-width: calc(100% - 16px) !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        span {
          &:nth-child(2) {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        span {
          &:nth-child(2) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
