<template>
	<section class="catalog">
		<h1 class="title">Фильмы</h1>
		<ul class="movies">
			<CatalogItem
				v-for="movie in moviesCatalog"
				:key="movie.id"
				:movies="movie"
			>
			</CatalogItem>
		</ul>
	</section>
</template>

<script setup>
	import CatalogItem from "./catalog-item.vue";
	import { useImageStore } from "@/stores/imageStore";

	function getAllImagess() {
		const imagesStore = useImageStore();
		return imagesStore.images;
	}

	const moviesCatalog = getAllImagess();
	// console.log(moviesCatalog);
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

	.movies__link {
		display: block;
	}

	.movies__name {
		color: #000;
		text-align: left;
		font-size: 14px;
	}
</style>
