<template>
	<li class="item movies__item">
		<h2 v-bind="props">
			{{ props.title }}
		</h2>
	</li>
</template>

<script setup>
	const props = defineProps({
		test: Object,
	});
	console.log(props.test);
</script>

<style>
	.item {
		background-color: #f11;
	}

	.movies__item {
		display: block;
		max-width: calc((100% / 6) - 10px);
		margin: 5px;
	}
</style>
