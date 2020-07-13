import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'
//import app from '../reducers/app'
import movies from '../reducers/movies'
// import connection from '../reducers/connection'


const middlewares = [thunk]

const store = createStore(
    combineReducers({
        //appReducer: app,
        movies: movies,
    }),
    applyMiddleware(...middlewares)
)

export default store
