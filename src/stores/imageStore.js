import { defineStore } from 'pinia'
import { ref } from 'vue'

const imageApi = 'https://jsonplaceholder.typicode.com/photos'

export const useImageStore = defineStore('imageStore', () => {

	const images = ref([])

	async function getImage() {
		return await fetch(imageApi)
			.then(response => response.json())
			.then(data => {
				for (let i = 0; i != 50; i++) {
					images.value.push(data[i])
				}
				return images.value
			})
	}
	return { images, getImage }
})