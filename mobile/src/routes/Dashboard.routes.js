import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardPage from '~/pages/Dashboard';
import Deliveries from '~/pages/Deliveries';
import colors from '~/styles/colors';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
	return (
		<>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<Tab.Navigator tabBarOptions={{ activeTintColor: colors.primary }}>
				<Tab.Screen
					name="Entregas"
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="reorder" size={size} color={color} />
						),
					}}
					component={Deliveries}
				/>
				<Tab.Screen
					name="Meu Perfil"
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="account-circle" size={size} color={color} />
						),
					}}
					component={DashboardPage}
				/>
			</Tab.Navigator>
		</>
	);
}
