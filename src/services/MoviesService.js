import { host, handleErrors } from './Api'

export const apiKey = 'd491c13d0f83cf3eb7d60cf61339b370'
export const language = 'pt-BR'

export function fetchTrendings() {
	console.debug('fetchTrending..')
	const url = `${host}/trending/movie/day?api_key=${apiKey}&language=${language}`
	console.debug({ url })
	return fetch(url)
		.then(handleErrors)
		.then((res) => res.json())
}

export function fetchGenres() {
	const url = `${host}/genre/movie/list?api_key=${apiKey}&language=${language}`
	console.debug({ url })
	return fetch(url)
		.then(handleErrors)	
		.then((res) => res.json())
}

export function fetchMoviesByGenre(genreId) {
	const url = `${host}/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
	return fetch(url)
		.then(handleErrors)	
		.then((res) => res.json())
}

export function fetchMovieById(id) {
	const url = `${host}/movie/${id}?api_key=${apiKey}&language=${language}`
	console.debug({ url })
	return fetch(url)
		.then(handleErrors)	
		.then((res) => res.json())
}

export function fetchMoviesByQuery(query) {
	const url = `${host}/search/movie?api_key=${apiKey}&language=${language}&include_adult=false&&page=1&query=${query}`
	console.debug({ url })
	return fetch(url)
		.then(handleErrors)	
		.then((res) => res.json())
}