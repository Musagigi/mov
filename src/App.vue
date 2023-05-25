<template>
	<m-main-container></m-main-container>
	<router-view></router-view>
</template>

<script>
	import mMainContainer from "@/components/m-main-container.vue";

	export default {
		name: "App",
		components: {
			mMainContainer,
		},
	};
</script>

<style></style>
