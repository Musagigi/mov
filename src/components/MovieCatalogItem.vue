<template>
	<li class="movies-item">
		<router-link
			class="movies-item__link"
			:to="`/movie/${movies.id}`"
		>
			<img
				:src="movies.poster"
				alt="poster to movie"
			/>
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

<style lang="scss" scoped>
	@import "@/assets/styles/main.scss";
	.item {
		background-color: #f11;
	}

	.movies-item {
		display: block;
		@include col(6, 12, 5px);
		// max-width: calc((100% / 6) - 10px);
		// margin: 5px;
	}
</style>
