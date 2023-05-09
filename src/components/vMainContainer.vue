<template>
	<vHeader></vHeader>
	<main class="main">
		<h2>{{ title }}</h2>
		<vCatalog></vCatalog>
	</main>
</template>

<script>
import vHeader from "./vHeader.vue";
import vCatalog from "./vCatalog.vue";

export default {
	name: "vMainContainer",
	components: {
		vHeader,
		vCatalog,
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
	mounted() {
		console.log("test");
	},
};
</script>

<style>
.main {
	background-color: #ff1;
}
</style>
