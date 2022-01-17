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
	<div class="content">
		<div class="circle" :class="active ? 'active':''"></div>
		<V-progress class="progressbar" :value="progressBarNumber" size="smaller" />
		<div class="content-text">
			<p>STEP {{ step }} </p>
			<p><b>{{ text }}</b></p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '../../../scss/abstracts/_variables.scss';
	.progressbar{
		transform: rotate(90deg);
	    position: absolute;
	    width: 5rem;
	    left: -70%;
	    top: 4rem;
	}
	.circle{
		position: absolute;
	    width: 20px;
	    height: 20px;
	    background: #232326;
	    border-radius: 100%;
	    // border: 3px solid #2f3237;
	    left: 15%;
	    &.active{
			background: $primary;
		}
	}

	.content{
		display: block;
    	position: relative;
    	width: 30px;
    	height: calc(5rem + 10px);
	}
	.content-text{
		position: absolute;
		left: 120%;
    	width: 10rem;
    	p{
    		margin-bottom: 0px;
    	}
	}
	// position-relative progressCheck
	// rotate90 bar-progress
	// content-text
</style>