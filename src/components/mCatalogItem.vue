<template>
	<div class="item">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	name: "mCatalogItem",
	components: {},
	props: {},
	data() {
		return {
			title: "item",
		};
	},
	computed: {},
	methods: {},
	watch: {},
};
</script>

<style lang="scss">
.item {
	background-color: #f11;
}
</style>
