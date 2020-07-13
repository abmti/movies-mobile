import { CHANGE_CONNECTION_STATUS } from '../actions/ActionTypes'

const INITIAL_STATE = {
	connected: true
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_CONNECTION_STATUS:
			return { ...state, connected: action.connected }
		
		default:
			return state
	}
}
