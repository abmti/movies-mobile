import { CHANGE_CONNECTION_STATUS } from "./ActionTypes";

export const changeConnectionStatus = (connected) => {
	return { type: CHANGE_CONNECTION_STATUS, connected }
}
