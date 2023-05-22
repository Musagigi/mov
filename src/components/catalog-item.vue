<template>
	<li class="item movies__item">
		<h2>
			{{ props }}
		</h2>
	</li>
</template>

<script setup>
	const props = defineProps({
		imagee: {
			type: Object,
			required: true,
		},
	});

	// const { image } = toRefs(props);
	console.log(props);
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
