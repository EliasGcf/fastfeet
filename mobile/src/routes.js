import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardPage from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Entregas" component={DashboardPage} />
			<Tab.Screen name="Perfil" component={DashboardPage} />
		</Tab.Navigator>
	);
}

export default function Routes({ signed }) {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#7D40E7' },
					headerTintColor: '#fff',
				}}
			>
				{signed ? (
					<Stack.Screen
						name="Entrar"
						options={{ headerShown: false }}
						component={SignIn}
					/>
				) : (
					<Stack.Screen
						name="Dashboard"
						options={{ headerShown: false }}
						component={Dashboard}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
