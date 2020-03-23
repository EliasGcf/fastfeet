import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CreateProblem from '~/pages/CreateProblem';
import Deliveries from '~/pages/Deliveries';
import DeliveryConfirmPhoto from '~/pages/DeliveryConfirmPhoto';
import DeliveryDetails from '~/pages/DeliveryDetails';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Entregas"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entregas"
        component={Deliveries}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={DeliveryDetails}
      />
      <Stack.Screen
        name="ConfirmPhoto"
        options={{
          title: 'Confirmar entrega',
        }}
        component={DeliveryConfirmPhoto}
      />
      <Stack.Screen
        name="CraeteProblem"
        options={{
          title: 'Informar problema',
        }}
        component={CreateProblem}
      />
    </Stack.Navigator>
  );
}
