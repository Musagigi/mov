import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
// import axios from 'axios';

const movieApi = 'http://127.0.0.1:8000/api/movies/'

export const useMovieStore = defineStore('movieStore', () => {

	const movies = ref([])

	async function getMovies() {
		const response = await fetch(movieApi)
		const data = await response.json()
		// console.log(data);
		return movies.value = data
	}

	watch(() => movies, state => {
		localStorage.setItem('movies', JSON.stringify(state))
	}, { deep: true })

	// console.log(movies);

	const moviesLocalStorage = localStorage.getItem('movies')
	// console.log(moviesLocalStorage);

	if (moviesLocalStorage) {
		// console.log(JSON.parse(moviesLocalStorage));
		movies.value = JSON.parse(moviesLocalStorage)._value
	}

	return { movies, getMovies }
})