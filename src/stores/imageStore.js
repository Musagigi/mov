import { defineStore } from 'pinia'
import { ref } from 'vue'

const imageApi = 'https://jsonplaceholder.typicode.com/photos'

export const useImageStore = defineStore('imageStore', () => {

	// async function getMovies() {
	// const response = await fetch(movieApi)
	// const data = await response.json()
	// console.log(data);
	// return movies.value = data
	// }

	const images = ref([])

	async function getImage() {
		return await fetch(imageApi)
			.then(response => response.json())
			.then(data => {
				for (let i = 0; i != 50; i++) {
					images.value.push(data[i])
				}
			})
	}

	getImage()

	return { images }
}) 