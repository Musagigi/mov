import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MoviePage from '@/components/MoviePage.vue'
import MovieMovies from '@/components/MovieMovies.vue'
import MovieAbout from '@/components/MovieAbout.vue'
import MovieCatalogItem from '@/components/MovieCatalogItem.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: MoviePage,
			sensitive: true
		},
		{
			path: '/movies',
			name: 'movies',
			component: MovieMovies,
			sensitive: true
		},
		{
			path: '/about',
			name: 'about',
			component: MovieAbout,
			sensitive: true
		},
		{
			path: '/movies/movie',
			name: 'movieCatalogItem',
			component: MovieCatalogItem,
			sensitive: true
		},
	],
})

export default router