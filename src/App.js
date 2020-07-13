import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import RootStackScreen from './AppNavigator';
import store from './store/reduxStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
				<NavigationContainer>
					<RootStackScreen />
				</NavigationContainer>
			</Provider>
    </>
  );
};

export default App;
