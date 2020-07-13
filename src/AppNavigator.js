import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import DetailsScreen from './screens/Details';

const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen 
				name="Home" 
				component={HomeScreen}
				options={{
					tabBarLabel: 'Início',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='md-home' size={size} style={{ color: color }} />
					),
				}} />
			<Tab.Screen 
				name="Search" 
				component={SearchScreen}
				options={{
					tabBarLabel: 'Busca',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='md-search' size={size} style={{ color: color }} />
					),
				}} />
		</Tab.Navigator>
	)
}

const RootStack = createStackNavigator();
function RootStackScreen() {
	return (
		<RootStack.Navigator mode="modal">
			
			<RootStack.Screen
				name="Main"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>

			<RootStack.Screen
				name="Details"
				component={DetailsScreen}
				options={{ headerBackTitle: ' ', headerShown: false }}
			/>

		</RootStack.Navigator>
	);
}

export default RootStackScreen;
