import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '~/pages/SingIn';
import Delivery from '~/pages/Delivery';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={SingIn} />

			<Route path="/deliveries" component={Delivery} isPrivate />
		</Switch>
	);
}
