import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { SearchInput } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import RecipientItem from './RecipientItem';
import { Container, Content, Grid } from './styles';

export default function Recipients() {
	const [recipients, setRecipients] = useState([]);

	async function loadRecipients() {
		const response = await api.get('/recipients');

		setRecipients(response.data);
	}

	useEffect(() => {
		loadRecipients();
	}, []);

	return (
		<Container>
			<Content>
				<HeaderList title="Gerenciando destinatários">
					<SearchInput
						onChange={() => {}}
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
			</Content>
		</Container>
	);
}
