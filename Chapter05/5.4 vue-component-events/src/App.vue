<template>
  <fancy-button @buttonClicked="eventListener($event)" button-text="Click me!"></fancy-button>
</template>

<script>
import FancyButton from './components/FancyButton.vue';

export default {
	components: {
		'fancy-button': FancyButton
	},
	methods: {
		eventListener(message) {
			console.log(`The button was clicked from the child component with this message: ${message}`);
		}
	}
};
</script>

<style>

</style>
