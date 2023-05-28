<template>
	<li class="item movies__item">
		<router-link
			:to="`/movie/${movies.id}`"
		>
			<img :src="movies.url" alt="" />
		</router-link>
		<h2>
			{{ movies.title }}
		</h2>
	</li>
</template>

<script setup>
	const props = defineProps({
		movies: {
			type: Object,
			required: true,
		},
	});

	console.log(props.movies);
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
