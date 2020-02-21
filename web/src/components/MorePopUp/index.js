import React from 'react';
import Popup from 'reactjs-popup';

import {
	MdMoreHoriz,
	MdRemoveRedEye,
	MdEdit,
	MdDeleteForever,
} from 'react-icons/md';

import { PopUpButton, Container } from './styles';

export default function MorePopUp() {
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
						<MdEdit color="#4D85EE" size={15} />
						<span>Editar</span>
					</button>
				</div>
				<div>
					<button type="button">
						<MdDeleteForever color="#DE3B3B" size={15} />
						<span>Excluir</span>
					</button>
				</div>
			</Container>
		</Popup>
	);
}
