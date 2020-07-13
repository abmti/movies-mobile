import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import RootStackScreen from './AppNavigator';
import store from './store/reduxStore';
import { Provider } from 'react-redux';
import StatusConnection from './components/StatusConnection';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
				<NavigationContainer>
					<RootStackScreen />
				</NavigationContainer>
				<StatusConnection />
			</Provider>
    </>
  );
};

export default App;
