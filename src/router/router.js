import { useRouter, useRoute, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MovieCatalog from '@/components/movie-catalog.vue'
// import CatalogItem from '@/components'

export default {
	setup() {

		const history = createWebHistory()

		const routes = [
			{ path: '/', component: App, sensitive: true },
			{ path: '/movie', component: MovieCatalog, sensitive: true },
		]

		const router = useRouter()
		const route = useRoute()


	}
}