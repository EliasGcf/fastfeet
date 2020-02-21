import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import {
	MdMoreHoriz,
	MdRemoveRedEye,
	MdEdit,
	MdDeleteForever,
} from 'react-icons/md';
import { colors } from '~/styles/colors';

import api from '~/services/api';

import { PopUpButton, Container } from './styles';

export default function MorePopUp({ id, updateDeliveries }) {
	async function handleDelete() {
		const confirm = window.confirm('Você tem certeza que deseja deletar isso?');

		if (!confirm) {
			toast.error('Encomenda não apagada!');
			return;
		}

		try {
			await api.delete(`/deliveries/${id}`);
			updateDeliveries();
			toast.success('Encomenda apagada com sucesso!');
		} catch (err) {
			toast.error('Essa encomenda não pode ser deletada!');
		}
	}

	return (
		<Popup
			trigger={
				<PopUpButton type="button">
					<MdMoreHoriz color="#C6C6C6" size={25} />
				</PopUpButton>
			}
			position="bottom center"
			contentStyle={{
				width: '150px',
				borderRadius: '4px',
			}}
		>
			<Container>
				<div>
					<button type="button">
						<MdRemoveRedEye color="#8E5BE8" size={15} />
						<span>Visualizar</span>
					</button>
				</div>
				<div>
					<button type="button">
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
			</Container>
		</Popup>
	);
}

MorePopUp.propTypes = {
	id: PropTypes.number.isRequired,
	updateDeliveries: PropTypes.func.isRequired,
};
