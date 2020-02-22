import React from 'react';

import { SaveButton, BackButton } from '~/components/Button';
import HeaderForm from '~/components/HeaderForm';

import { Container, Content } from './styles';

export default function Form() {
	return (
		<Container>
			<Content>
				<HeaderForm title="Cadastro de encomendas">
					<BackButton />
					<SaveButton action={() => {}} />
				</HeaderForm>
			</Content>
		</Container>
	);
}
