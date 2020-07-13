import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { TRENDINGS_SEARCHED, GENRES_SEARCHED } from '../../src/actions/ActionTypes';
import * as actions from '../../src/actions/movies';
import mockTrending from '../__mocks__/mockTrending';
import mockGenres from '../__mocks__/mockGenres.json';
import { apiKey, language } from '../../src/services/MoviesService'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


describe('Movies Actions', () => {
		
		afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('Test fetchTrendings', () => {

        fetchMock.once(`end:/trending/movie/day?api_key=${apiKey}&language=${language}`, { body: mockTrending })

        const expectedActions = [{ type: TRENDINGS_SEARCHED, trendings: mockTrending }]
        const store = mockStore()

        return store.dispatch(actions.fetchTrendings()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
		})
		
		it('Test fetchGenres', () => {

			fetchMock.once(`end:/genre/movie/list?api_key=${apiKey}&language=${language}`, { body: mockGenres })

			const expectedActions = [{ type: GENRES_SEARCHED, genres: mockGenres }]
			const store = mockStore()

			return store.dispatch(actions.fetchGenres()).then(() => {
					expect(store.getActions()).toEqual(expectedActions)
			})
	})

})