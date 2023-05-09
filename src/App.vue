<template>
	<h1>Hello</h1>
	<vMainContainer></vMainContainer>
</template>

<script>
import vMainContainer from "./components/vMainContainer.vue";

export default {
	name: "App",
	components: {
		vMainContainer,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
