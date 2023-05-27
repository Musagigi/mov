import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import MoviesPage from '@/pages/MoviesPage.vue'
import OneMoviePage from '@/pages/OneMoviePage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
			sensitive: true
		},
		{
			path: '/about',
			name: 'about',
			component: AboutPage,
			sensitive: true
		},
		{
			path: '/movies',
			name: 'movies',
			component: MoviesPage,
			sensitive: true
		},
		{
			path: '/movie/:id',
			name: 'OneMoviePage',
			component: OneMoviePage,
			sensitive: true
		}
	],
})

export default router