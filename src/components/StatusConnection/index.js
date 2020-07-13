
import NetInfo from "@react-native-community/netinfo";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeConnectionStatus } from '../../actions/app';
import { CardConnection, CardConnectionText } from './styled';

function StatusConnection(props) {

	const dispatch = useDispatch()
	const [connection, setConnection] = useState(true)

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			setConnection(!state.isConnected)
			dispatch(changeConnectionStatus(!state.isConnected))
		});
		return () => {
			unsubscribe()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CardConnection style={{ display: !connection ? 'flex' : 'none' }}>
			<CardConnectionText>Sem conexão com a internet</CardConnectionText>
		</CardConnection>
	)
}

export default StatusConnection