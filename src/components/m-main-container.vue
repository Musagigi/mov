<template>
	<mHeader></mHeader>
	<main class="main">
		<MovieCatalog></MovieCatalog>
	</main>
</template>

<script>
	import mHeader from "./m-header.vue";
	import MovieCatalog from "./movie-catalog.vue";

	export default {
		name: "mMainContainer",
		components: {
			mHeader,
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
