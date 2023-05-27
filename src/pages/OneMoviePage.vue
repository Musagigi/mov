<template>
	<movie-page-layout></movie-page-layout>
	<h1>
		OneMovie: {{ $route.params.id }}
	</h1>
</template>

<script setup>
	import MoviePageLayout from "@/components/MoviePageLayout.vue";
</script>
