import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import DeliverymanItem from './DeliverymanItem';
import { Container, Content, Grid, Button } from './styles';

export default function Deliverymen() {
	const [deliverymen, setDeliverymen] = useState([]);
	const [page, setPage] = useState(1);

	async function loadDeliverymen() {
		const response = await api.get('/deliverymen', {
			params: {
				page,
			},
		});

		setDeliverymen(response.data);
	}

	useEffect(() => {
		loadDeliverymen();
	}, [page]); //eslint-disable-line

	async function handleSearchDeliveryman(e) {
		setPage(1);

		const response = await api.get('/deliverymen', {
			params: {
				q: e.target.value,
				page,
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
				<section>
					<Button
						disabled={page === 1}
						onClick={() => setPage(page - 1)}
						type="button"
					>
						voltar
					</Button>
					<Button
						disabled={deliverymen.length < 5}
						type="button"
						onClick={() => setPage(page + 1)}
					>
						proximo
					</Button>
				</section>
			</Content>
		</Container>
	);
}
