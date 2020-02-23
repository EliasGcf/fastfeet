import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { SaveButton, BackButton } from '~/components/Button';
import { SimpleInput, PhotoInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import api from '~/services/api';

import { Container, Content, UnForm } from './styles';

export default function DeliverymanForm({ match }) {
	const { id } = match.params;
	const formRef = useRef(null);

	useEffect(() => {
		async function loadInitialData(deliverymanId) {
			if (id) {
				const response = await api.get(`/deliverymen/${deliverymanId}`);

				formRef.current.setData(response.data);
				formRef.current.setFieldValue('avatar', response?.data?.avatar?.url);
			}
		}
		loadInitialData(id);
	}, [id]);

	async function handleSubmit(data, { reset }) {
		formRef.current.setErrors({});
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('O nome é obrigatório'),
				email: Yup.string().required('O email é obrigatório'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			const dataFile = new FormData();

			dataFile.append('file', data.avatar);

			const responseFile = data.avatar
				? await api.post('files', dataFile)
				: null;

			if (id) {
				await api.put(`/deliverymen/${id}`, {
					name: data.name,
					email: data.email,
					avatar_id: responseFile?.data?.id,
				});
				toast.success('Entregador editado com sucesso!');
			} else {
				await api.post('/deliverymen', {
					name: data.name,
					email: data.email,
					avatar_id: responseFile?.data?.id,
				});
				toast.success('Entregador criado com sucesso!');
			}

			reset();
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errorMessages = {};

				err.inner.forEach(error => {
					errorMessages[error.path] = error.message;
				});

				formRef.current.setErrors(errorMessages);
			}
		}
	}

	return (
		<Container>
			<Content>
				<HeaderForm title="Cadastro de entregadores">
					<BackButton />
					<SaveButton action={() => formRef.current.submitForm()} />
				</HeaderForm>

				<UnForm ref={formRef} onSubmit={handleSubmit}>
					<PhotoInput name="avatar" />
					<SimpleInput
						label="Nome"
						name="name"
						type="text"
						placeholder="Nome do entregador"
					/>
					<SimpleInput
						label="Email"
						name="email"
						type="email"
						placeholder="exemplo@fastfeet.com"
						onKeyPress={e =>
							e.key === 'Enter' ? formRef.current.submitForm() : null
						}
					/>
				</UnForm>
			</Content>
		</Container>
	);
}

DeliverymanForm.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}).isRequired,
	}).isRequired,
};
