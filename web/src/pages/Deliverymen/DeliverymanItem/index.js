import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import More from '~/components/MorePopUp';
import NamePhoto from '~/components/NamePhoto';
import api from '~/services/api';
import history from '~/services/history';
import { colors } from '~/styles/colors';

import { Container, MoreConainer } from './styles';

export default function DeliverymanItem({ data, updateDeliverymen }) {
	async function handleDelete() {
		const confirm = window.confirm('Você tem certeza que deseja deletar isso?');

		if (!confirm) {
			toast.error('Encomenda não apagada!');
			return;
		}

		try {
			await api.delete(`/deliverymen/${data.id}`);
			updateDeliverymen();
			toast.success('Entregador apagado com sucesso!');
		} catch (err) {
			toast.error('Esse entregador ainda possui encomendas para entregar!');
		}
	}

	return (
		<Container>
			<small>#{data.id}</small>
			{data.avatar ? (
				<img src={data?.avatar?.url} alt="AvatarUrl" />
			) : (
				<NamePhoto name={data.name} />
			)}
			<small>{data.name}</small>
			<small>{data.email}</small>
			<More>
				<MoreConainer>
					<div>
						<button
							onClick={() => history.push(`/deliverymen/form/${data.id}`)}
							type="button"
						>
							<MdEdit color={colors.info} size={15} />
							<span>Editar</span>
						</button>
					</div>
					<div>
						<button onClick={handleDelete} type="button">
							<MdDeleteForever color={colors.danger} size={15} />
							<span>Excluir</span>
						</button>
					</div>
				</MoreConainer>
			</More>
		</Container>
	);
}

DeliverymanItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		email: PropTypes.string,
		avatar: PropTypes.shape({
			url: PropTypes.string,
		}),
	}).isRequired,
	updateDeliverymen: PropTypes.func.isRequired,
};
