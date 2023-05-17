<template>
	<section class="catalog">
		<h1 class="title">Фильмы</h1>
		<ul class="movies">
			<CatalogItem class="movies__item">
				{{ images }}
			</CatalogItem>
		</ul>
	</section>
</template>

<script setup>
// import { useMovieStore } from "@/stores/movieStore";
import { CatalogItem } from "./m-catalog-item.vue";
import { useImageStore } from "@/stores/imageStore";

function getAllImagess() {
	const imagesStore = useImageStore();
	imagesStore.getImage();
	return imagesStore.images;
}

const images = getAllImagess();
console.log(images);
// function getMoviesInCatalog() {
// 	const movieStore = useMovieStore();
// 	movieStore.getMovies();
// 	return movieStore.movies;
// }
// const movies = getMoviesInCatalog();
// console.log(movies);
</script>

<style lang="scss">
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
.movies__item {
	display: block;
	max-width: calc((100% / 6) - 10px);
	margin: 5px;
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
