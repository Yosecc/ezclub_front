<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  type:{
    type: String,
    default: 'create'
  }
})

const titles = computed(()=>{
  if(props.type == 'create'){
    return {
      title: 'Add a new product',
      subtitle: 'Add information for a new product'
    }
  }
  return {
    title: 'Edit product',
    subtitle: 'Edit information for a product'
  }
})

const inputs = ref([
  {
    typeInput: 'text',
    name: 'product_name',
    placeholder: 'Product Name',
    model: '',
    class: 'is-12'
  },
  {
    typeInput: 'number',
    name: 'QuantityinStock',
    placeholder: 'Quantity in Stock',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'number',
    name: 'RetailPrice$',
    placeholder: 'Retail Price $',
    model: '',
    class: 'is-4'
  },
   {
    typeInput: 'number',
    name: 'ProductCost$',
    placeholder: 'Product Cost $',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'apply_taxes',
    placeholder: 'Apply Taxes',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'can_discount_by_apply',
    placeholder: 'Can Discount by Apply',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'AcceptablePayment Types',
    placeholder: 'Acceptable Payment Types',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'locationstosale',
    placeholder: 'Locations to Sale',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'text',
    name: 'barcode',
    placeholder: 'Barcode',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'category',
    placeholder: 'Category',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'size',
    placeholder: 'Zize',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'color',
    placeholder: 'Color',
    model: '',
    values:[''],
    class: 'is-4'
  },
 
  {
    typeInput: 'textarea',
    name: 'internals_notes',
    placeholder: 'Internals Notes',
    model: '',
    class: 'is-12'
  },
])

const input_image = ref([{
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Member Picture',
        model: '',
      }])
</script>

<template>
<VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
       {{titles.title}}
      </h1>
      <p>{{titles.subtitle}}</p>
      </div>
    </template>
    <template #header-right>
      <VButton @click="router.back()" class="mr-3"> Go Back </VButton>

      <VButton color="primary"> Save Changes </VButton>
    </template>
    <template #content>
      
      <div class="column  mx-auto">
        <div class="p-6">
          <h1 class="title is-5 mb-0">Product Picture</h1>

          <div class="d-flex justify-content-center">
            <div class="text-center">
              <VAvatar picture="https://picsum.photos/150/151" class="mb-4" size="xl"/>
              <inputsLayaut
                :inputs-step="input_image"
              />
            </div>
          </div>
        </div>
        <inputsLayaut
          :inputs-step="inputs"
        />
      </div>
    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';


</style>
