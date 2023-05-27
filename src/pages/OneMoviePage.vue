<template>
	<movie-main-page></movie-main-page>
	<h1>
		OneMovie: {{ $route.params.id }}
	</h1>
</template>

<script setup>
	import MovieMainPage from "@/components/MovieMainPage.vue";
</script>
