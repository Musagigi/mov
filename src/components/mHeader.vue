<template>
	<header class="header">
		<h2>{{ title }}</h2>
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

<style>
.header {
	background-color: #fa2;
}
</style>
