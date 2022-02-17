<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save', 'back'],
  },
  step: {
    type: Number,
    default: 1,
  },
})

const waivers = ref([
  {
    name: 'Waiver_010221.pdf',
    url: '',
  },
])

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new staff',
      subtitle: 'Add Waiver',
    }
  }
  return {
    title: 'Edit staff waiver',
    subtitle: 'Edit Waiver',
  }
})

const onSign = (sign) => {
  console.log(sign)
}
</script>

<template>
  <formLayaut :buttons="props.buttons" :step="props.step" :titles="titles">
    <signComponent @onSign="onSign" />
    <!-- <div class="columns is-multiline">
      <div class="columns is-multiline column is-10">
        <div class="column is-3 mb-4"
          v-for="(item, key) in waivers"
            :key="`family-${key}`"
        >
          <div class="border-1 document_box p-4 d-flex justify-content-center radius-small">
              <a href="234" class="text-center">
                <img 
                  style="width: 70px;"
                  src="/public/images/pdf_icon.png"
                  alt="">
                <p>{{ item.name }}</p>
              </a>
          </div>
        </div>
      </div>
      <div class="firmas text-right column is-2">
        <VButton class="mb-3 " color="success"> Sing </VButton>
        <VButton color="info"> Print </VButton>
      </div>
    </div> -->
  </formLayaut>
</template>

<style lang="scss" scope></style>
