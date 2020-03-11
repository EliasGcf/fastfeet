import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

import DashboardRoutes from './Dashboard.routes';

const Stack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={DashboardRoutes}
      />
    </Stack.Navigator>
  );
}
