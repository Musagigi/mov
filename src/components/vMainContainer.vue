<template>
	<div class="main">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	name: "vMainContainer",
	components: {},
	props: {},
	data() {
		return {
			title: "Hello2",
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
