<template>
	<section class="catalog">
		<h1 class="title">Фильмы</h1>
		{{ movieStore.movies }}
		<!-- <ul class="movies">
			<li class="movies__item" v-for="movie in movies">
				<a class="movies__link" href="">
					<img
						class="movies__img"
						:src="movie.poster"
						alt="постер фильма"
					/>
					<h2 class="movies__name">{{ movie.title }}</h2>
				</a>
			</li>
		</ul> -->
	</section>
</template>

<script setup>
import { useMovieStore } from "../stores/movieStore";
const movieStore = useMovieStore();
movieStore.getMovies();
</script>
<!-- <script>
import mCatalogItem from "./mCatalogItem.vue";

export default {
	name: "mCatalog",
	components: {
		mCatalogItem,
	},
	props: {},
	data() {
		return {
			title: "catalog",
		};
	},
	computed: {},
	methods: {},
	watch: {},
};
</script> -->

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
	text-align: left;
	font-size: 14px;
}
</style>
