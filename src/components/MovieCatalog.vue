<template>
	<section class="catalog">
		<h1 class="title">Фильмы</h1>
		<ul class="movies">
			<movie-catalog-item
				v-for="movie in moviesCatalog"
				:key="movie.id"
				:movies="movie"
			>
			</movie-catalog-item>
		</ul>
	</section>
</template>

<script setup>
	import MovieCatalogItem from "./MovieCatalogItem.vue";
	import { useMovieStore } from "@/stores/movieStore";

	function getAllImagess() {
		const movieStore = useMovieStore();
		return movieStore.movies;
	}

	const moviesCatalog = getAllImagess();
</script>

<style>
	.title {
		text-align: center;
		padding: 10px 15px;
	}

	.movies {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
		margin: 0 -5px;
	}

	.movies__link {
		display: block;
	}

	.movies__name {
		color: #000;
		text-align: left;
		font-size: 14px;
	}
</style>
