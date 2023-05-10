<template>
	<mHeader></mHeader>
	<main class="main">
		<h2>{{ title }}</h2>
		<mCatalog></mCatalog>
	</main>
</template>

<script>
import mHeader from "./mHeader.vue";
import mCatalog from "./mCatalog.vue";

export default {
	name: "mMainContainer",
	components: {
		mHeader,
		mCatalog,
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
