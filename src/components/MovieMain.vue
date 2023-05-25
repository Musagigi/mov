<template>
	<main class="main">
		<movie-catalog></movie-catalog>
	</main>
</template>

<script>
	import MovieCatalog from "./MovieCatalog.vue";

	export default {
		name: "MovieMain",
		components: {
			MovieCatalog,
		},
		props: {},
		data() {
			return {
				title: "main",
			};
		},
		computed: {},
		methods: {},
		watch: {},
		mounted() {},
	};
</script>

<style></style>
