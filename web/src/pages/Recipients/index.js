import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import RecipientItem from './RecipientItem';
import { Container, Content, Grid, Button } from './styles';

export default function Recipients() {
	const [page, setPage] = useState(1);
	const [recipients, setRecipients] = useState([]);

	async function loadRecipients() {
		const response = await api.get('/recipients', {
			params: {
				page,
			},
		});

		setRecipients(response.data);
	}

	useEffect(() => {
		loadRecipients();
	}, [page]); // eslint-disable-line

	async function handleSearchRecipient(e) {
		setPage(1);

		const response = await api.get('/recipients', {
			params: {
				q: e.target.value,
				page,
			},
		});

		setRecipients(response.data);
	}

	return (
		<Container>
			<Content>
				<HeaderList title="Gerenciando destinatários">
					<SearchInput
						onChange={handleSearchRecipient}
						type="text"
						placeholder="Buscar por destinatários"
					/>
					<IconButton
						Icon={MdAdd}
						title="CADASTRAR"
						action={() => history.push('/recipients/form')}
						type="button"
					/>
				</HeaderList>
				<Grid>
					<section>
						<strong>ID</strong>
						<strong>Nome</strong>
						<strong>Endereço</strong>
						<strong>Ações</strong>
					</section>
					{recipients.map(delivery => (
						<RecipientItem
							updateRecipients={loadRecipients}
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
						disabled={recipients.length < 5}
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
