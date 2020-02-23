import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { parseISO, format } from 'date-fns';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import DeliveryItem from './DeliveryItem';
import { Container, Content, Grid, Button } from './styles';

export default function Delivery() {
	const [deliveries, setDeliveries] = useState([]);
	const [page, setPage] = useState(1);

	function formatDates(data) {
		return data.map(delivery => ({
			...delivery,
			start_dateFormated: delivery.start_date
				? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
				: null,
			end_dateFormated: delivery.end_date
				? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
				: null,
		}));
	}

	async function handleSearchDelivery(e) {
		setPage(1);
		const response = await api.get('/deliveries', {
			params: {
				q: e.target.value,
				page,
			},
		});

		const data = formatDates(response.data);

		setDeliveries(data);
	}

	async function loadDeliveries() {
		const response = await api.get('/deliveries', {
			params: {
				page,
			},
		});

		const data = formatDates(response.data);

		setDeliveries(data);
	}

	useEffect(() => {
		loadDeliveries();
	}, [page]); //eslint-disable-line

	return (
		<Container>
			<Content>
				<HeaderList title="Gerenciando encomendas">
					<SearchInput
						onChange={handleSearchDelivery}
						type="text"
						placeholder="Buscar por encomendas"
					/>
					<IconButton
						Icon={MdAdd}
						title="CADASTRAR"
						action={() => history.push('/deliveries/form')}
						type="button"
					/>
				</HeaderList>

				<Grid>
					<section>
						<strong>ID</strong>
						<strong>Destinatário</strong>
						<strong>Produto</strong>
						<strong>Cidade</strong>
						<strong>Estado</strong>
						<strong>Status</strong>
						<strong>Ações</strong>
					</section>
					{deliveries.map(delivery => (
						<DeliveryItem
							updateDeliveries={loadDeliveries}
							key={delivery.id}
							data={delivery}
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
						disabled={deliveries.length < 5}
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
