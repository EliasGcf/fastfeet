import React from 'react';
import { Switch } from 'react-router-dom';

import Delivery from '~/pages/Delivery';
import DeliveryForm from '~/pages/Delivery/Form';
import Deliverymen from '~/pages/Deliverymen';
import SingIn from '~/pages/SingIn';

import Route from './Route';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={SingIn} />

			<Route path="/deliveries" exact component={Delivery} isPrivate />
			<Route path="/deliveries/form" exact component={DeliveryForm} isPrivate />
			<Route
				path="/deliveries/form/:id"
				exact
				component={DeliveryForm}
				isPrivate
			/>

			<Route path="/deliverymen" component={Deliverymen} isPrivate />
		</Switch>
	);
}
