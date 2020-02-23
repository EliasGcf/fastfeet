import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/web';

import logo from '~/assets/logo.svg';
import { SimpleButton } from '~/components/Button';
import { SimpleInput } from '~/components/Form';
import { signInRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

export default function SingIn() {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	function handleSubmit({ email, password }) {
		dispatch(signInRequest(email, password));
	}

	return (
		<>
			<img src={logo} alt="FastFeet" />

			<Form onSubmit={handleSubmit}>
				<SimpleInput
					name="email"
					label="SEU E-MAIL"
					type="email"
					placeholder="exemplo@email.com"
				/>
				<SimpleInput
					name="password"
					label="SUA SENHA"
					type="password"
					placeholder="*************"
				/>

				<SimpleButton type="submit">
					{loading ? 'Carregando...' : 'Acessar'}
				</SimpleButton>
			</Form>
		</>
	);
}
