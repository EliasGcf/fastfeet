import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/web';
import { Input } from '~/components/Form';
import { SimpleButton } from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

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
				<Input
					name="email"
					label="SEU E-MAIL"
					type="email"
					placeholder="exemplo@email.com"
				/>
				<Input
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
