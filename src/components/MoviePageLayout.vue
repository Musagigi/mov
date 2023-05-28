<template>
	<movie-header></movie-header>
	<slot></slot>
</template>

<script setup>
	import MovieHeader from "./MovieHeader.vue";
</script>

<style lang="scss">
	@import "@/assets/css/main.scss";
</style>
