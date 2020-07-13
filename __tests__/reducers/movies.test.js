import reducer from '../../src/reducers/movies'
import { TRENDINGS_SEARCHED, GENRES_SEARCHED } from '../../src/actions/ActionTypes'
import mockTrending from '../__mocks__/mockTrending';
import mockGenres from '../__mocks__/mockGenres.json';

const INITIAL_STATE = {
	trendings: undefined,
	genres: undefined,
	movie: undefined,
	filteredMovies: undefined
}


describe('Movies reducer', () => {

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
	})

	it('should handle TRENDINGS_SEARCHED', () => {
		const expectedState = { ...INITIAL_STATE, trendings: mockTrending }
		expect(
			reducer(INITIAL_STATE, {
				type: TRENDINGS_SEARCHED,
				trendings: mockTrending
			})
		).toEqual(expectedState)
	})

	it('should handle GENRES_SEARCHED', () => {
		const expectedState = { ...INITIAL_STATE, genres: mockGenres.genres }
		expect(
				reducer(INITIAL_STATE, {
						type: GENRES_SEARCHED,
						genres: mockGenres
				})
		).toEqual(expectedState)
	})

})
