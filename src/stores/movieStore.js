import { defineStore } from 'pinia'


export const useMovieStore = defineStore('movieStore', {
	state: () => {
		return {
			count: 0,
			movies: [],
			isTrue: true,
		}

	}
})

console.log(useMovieStore);