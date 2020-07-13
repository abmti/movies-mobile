import { TRENDINGS_SEARCHED, GENRES_SEARCHED, MOVIES_BY_GENRE_SEARCHED, MOVIE_SEARCHED, MOVIES_FILTERED } from '../actions/ActionTypes'

const INITIAL_STATE = {
	trendings: undefined,
	genres: undefined,
	movie: undefined,
	filteredMovies: undefined
}

export default (state = INITIAL_STATE, action) => {
	//console.debug({ action })
	switch (action.type) {
		case TRENDINGS_SEARCHED: {
			return { ...state, trendings: action.trendings }
		}
		case GENRES_SEARCHED: {
			return { ...state, genres: action.genres.genres }
		}
		case MOVIES_BY_GENRE_SEARCHED: {
			const list = state.genres.map((item) => {
				if(item.id === action.genreId) {
					item.movies = action.movies
				}
				return item
			})
			return { ...state, genres: list }
		}
		case MOVIE_SEARCHED: {
			return { ...state, movie: action.movie }
		}
		case MOVIES_FILTERED: {
			return { ...state, filteredMovies: action.movies }
		}
		default:
			return state
	}
}