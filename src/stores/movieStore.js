import { defineStore } from 'pinia'
// import axios from 'axios';

const movieApi = 'http://127.0.0.1:8000/api/movies/'

export const useMovieStore = defineStore('movieStore', {

	state: () => ({
		movies: [],
	}),

	actions: {
		async getMovies() {
			const response = await fetch(movieApi)
			const data = await response.json()
			// console.log(data);
			return this.movies = data
		}
	}
})