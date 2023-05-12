import { defineStore } from 'pinia'
// import axios from 'axios';


export const useMovieStore = defineStore({
	id: 'movieStore',
	state: () => {
		return {
			count: 0,
			movies: [],
			isTrue: true,
		}

	}
})