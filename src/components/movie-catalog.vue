<template>
	<section class="catalog">
		<h1 class="title">Фильмы</h1>
		<ul class="movies">
			<CatalogItem
				v-for="image in test"
				:key="image.id"
				:imagee="iamge"
			>
				<!-- <h2>{{ image.title }}</h2> -->
			</CatalogItem>
		</ul>
	</section>
</template>

<script setup>
	import CatalogItem from "./catalog-item.vue";
	import { useImageStore } from "@/stores/imageStore";

	const test = [
		{
			id: 1,
			title: "test",
		},
		{
			id: 2,
			title: "test2",
		},
	];

	// function getAllImagess() {
	// 	const imagesStore = useImageStore();
	// 	imagesStore.getImage();
	// 	return imagesStore.images;
	// }

	// const images = getAllImagess();
	// console.log(images);
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
