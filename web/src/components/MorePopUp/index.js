import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import { MdMoreHoriz } from 'react-icons/md';

import { PopUpButton, Container } from './styles';

export default function MorePopUp({ children }) {
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
			<Container>{children}</Container>
		</Popup>
	);
}

MorePopUp.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
