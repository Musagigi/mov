<template>
	<router-view></router-view>
	<movie-page></movie-page>
</template>

<script>
	import MoviePage from "@/components/MoviePage.vue";

	export default {
		name: "App",
		components: {
			MoviePage,
		},
	};
</script>

<style></style>
