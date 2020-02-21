import React from 'react';

import { MdAdd } from 'react-icons/md';

import { Container, Content } from './styles';

import HeaderForm from '~/components/HeaderForm';
import { SearchInput } from '~/components/Form';
import { IconButton } from '~/components/Button';

export default function Delivery() {
	return (
		<Container>
			<Content>
				<HeaderForm
					onSubmit={data => console.log(data)}
					title="Gerenciando encomendas"
				>
					<SearchInput
						type="text"
						name="search"
						placeholder="Buscar por encomendas"
					/>
					<IconButton
						Icon={MdAdd}
						title="CADASTRAR"
						action={() => {}}
						type="submit"
					/>
				</HeaderForm>
			</Content>
		</Container>
	);
}
