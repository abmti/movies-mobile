import * as MoviesService from '../services/MoviesService';
import { TRENDINGS_SEARCHED, GENRES_SEARCHED, MOVIES_BY_GENRE_SEARCHED, MOVIE_SEARCHED, MOVIES_FILTERED } from './ActionTypes';

export const fetchTrendings = () => {
	return (dispatch) => {
		return MoviesService.fetchTrendings()
			.then((trendings) => dispatch({ type: TRENDINGS_SEARCHED, trendings }))
	}
}

export const fetchGenres = () => {
	return (dispatch) => {
		return MoviesService.fetchGenres()
			.then((genres) => dispatch({ type: GENRES_SEARCHED, genres }))
	}
}

export const fetchMoviesByGenre = (id) => {
	console.debug(`fetchMoviesByGenre ${id}`)
	return (dispatch) => {
		return MoviesService.fetchMoviesByGenre(id)
			.then((movies) => dispatch({ type: MOVIES_BY_GENRE_SEARCHED, movies, genreId: id }))
	}
}

export const fetchMovieById = (id) => {
	console.debug(`fetchMovieById ${id}`)
	return (dispatch) => {
		return MoviesService.fetchMovieById(id)
			.then((movie) => dispatch({ type: MOVIE_SEARCHED, movie }))
	}
}

export const fetchMoviesByQuery = (query) => {
	return (dispatch) => {
		return MoviesService.fetchMoviesByQuery(query)
			.then((movies) => dispatch({ type: MOVIES_FILTERED, movies }))
	}
}
