import React, { useRef } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/mobile';

import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Input, SubmitButton } from './styles';

export default function SignIn() {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);
	const formRef = useRef(null);

	function handleSubmit({ id }, { reset }) {
		dispatch(signInRequest(id));
		reset();
	}

	return (
		<Container>
			<Image source={logo} />
			<Form ref={formRef} onSubmit={handleSubmit}>
				<Input
					name="id"
					keyboardType="number-pad"
					placeholder="Informe seu ID no cadastro"
					autoCorrect={false}
					returnKeyType="send"
					autoCapitalize="none"
				/>
				<SubmitButton
					loading={loading}
					onPress={() => formRef.current.submitForm()}
				>
					Entrar no sistema
				</SubmitButton>
			</Form>
		</Container>
	);
}
