<template>
	<section class="catalog">
		<h2>{{ title }}</h2>
		<vCatalogItem></vCatalogItem>
	</section>
</template>

<script>
import vCatalogItem from "./vCatalogItem.vue";

export default {
	name: "vCatalog",
	components: {
		vCatalogItem,
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

<style>
.catalog {
	display: inline-block;
	background-color: #f2f;
}
</style>
