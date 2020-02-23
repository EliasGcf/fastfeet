import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import DeliverymanItem from './DeliverymanItem';
import { Container, Content, Grid } from './styles';

export default function Deliverymen() {
	const [deliverymen, setDeliverymen] = useState([]);

	async function loadDeliverymen() {
		const response = await api.get('/deliverymen');

		setDeliverymen(response.data);
	}
	useEffect(() => {
		loadDeliverymen();
	}, []);

	async function handleSearchDeliveryman(e) {
		const response = await api.get('/deliverymen', {
			params: {
				q: e.target.value,
			},
		});

		setDeliverymen(response.data);
	}

	return (
		<Container>
			<Content>
				<HeaderList title="Gerenciando entregadores">
					<SearchInput
						onChange={handleSearchDeliveryman}
						type="text"
						placeholder="Buscar por entregadores"
					/>
					<IconButton
						Icon={MdAdd}
						title="CADASTRAR"
						action={() => history.push('/deliverymen/form')}
						type="button"
					/>
				</HeaderList>

				<Grid>
					<section>
						<strong>ID</strong>
						<strong>Foto</strong>
						<strong>Nome</strong>
						<strong>Email</strong>
						<strong>Ações</strong>
					</section>
					{deliverymen.map(deliveryman => (
						<DeliverymanItem
							key={deliveryman.id}
							data={deliveryman}
							updateDeliverymen={loadDeliverymen}
						/>
					))}
				</Grid>
			</Content>
		</Container>
	);
}
