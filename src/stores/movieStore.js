import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
// import axios from 'axios';

const movieApi = 'http://127.0.0.1:8000/api/movies/'

export const useMovieStore = defineStore('movieStore', () => {

	const movies = ref([])
	const moviesLocalStorage = localStorage.getItem('movies')

	async function getMovies() {
		return await fetch(movieApi)
			.then(response => response.json())
			.then(data => {
				return movies.value = data
			})
	}
	getMovies()

	watch(
		() => movies,
		state => {
			localStorage.setItem('movies', JSON.stringify(state))
		},
		{ deep: true }
	)

	// console.log(moviesLocalStorage);
	if (moviesLocalStorage) {
		movies.value = JSON.parse(moviesLocalStorage)._value
	}

	return { movies }
})