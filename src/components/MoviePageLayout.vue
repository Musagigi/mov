<template>
	<div class="container">
		<movie-header></movie-header>
		<main>
			<slot> </slot>
		</main>
	</div>
</template>

<script setup>
	import MovieHeader from "./MovieHeader.vue";
</script>

<style lang="scss">
	@import "@/assets/css/main.scss";
</style>
