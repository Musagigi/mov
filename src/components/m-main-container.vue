<template>
	<m-header></m-header>
	<main class="main">
		<m-catalog></m-catalog>
	</main>
</template>

<script>
import mHeader from "./m-header.vue";
import mCatalog from "./m-catalog.vue";

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
	mounted() {},
};
</script>

<style>
.main {
	background-color: #ff1;
}
</style>
