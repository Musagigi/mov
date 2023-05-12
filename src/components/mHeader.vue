<template>
	<header class="header">
		<h2>{{ title }}</h2>
		{{ movieStore.isTrue }}
	</header>
</template>

<script>
export default {
	name: "mHeader",
	components: {},
	props: {},
	data() {
		return {
			title: "header",
		};
	},
	computed: {},
	methods: {},
	watch: {},
};
</script>

<script setup>
import { useMovieStore } from "../stores/movieStore";
const movieStore = useMovieStore();
</script>

<style>
.header {
	background-color: #fa2;
}
</style>
