<template>
	<section class="catalog">
		<h2>{{ title }}</h2>
		<mCatalogItem></mCatalogItem>
	</section>
</template>

<script>
import mCatalogItem from "./mCatalogItem.vue";

export default {
	name: "mCatalog",
	components: {
		mCatalogItem,
	},
	props: {},
	data() {
		return {
			title: "catalog",
		};
	},
	computed: {},
	methods: {},
	watch: {},
};
</script>

<style lang="scss">
.catalog {
	display: inline-block;
	background-color: #f2f;
}
</style>
