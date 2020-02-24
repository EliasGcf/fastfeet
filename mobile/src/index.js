import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import App from './App';

export default function Index() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
}
