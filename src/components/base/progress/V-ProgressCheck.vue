<script setup lang="ts">
	import { defineProps } from 'vue'
	import { computed } from 'vue'

	const progressBarNumber = computed( () => {
		if(props.active){
			return 100
		}else{
			return 0
		}
	})

	const props = defineProps({
		active:{
			type: Boolean,
			default: false,
			required: true
		},
    step:{
    	type: Number,
    	default: 0,
    	required: true
    },
    text:{
    	type: String,
    	default: '',
    },
	})
</script>
<template>
	<div class="position-relative progressCheck">
		<div class="circle" :class="active ? 'active':''"></div>
		<V-progress class="rotate90 bar-progress" :value="progressBarNumber" size="smaller" />
		<div class="content-text">
			<p>STEP {{ step }} </p>
			<p><b>{{ text }}</b></p>
		</div>
	</div>
</template>