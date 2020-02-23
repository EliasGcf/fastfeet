import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { PopUpButton } from './styles';

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
			{children}
		</Popup>
	);
}

MorePopUp.propTypes = {
	children: PropTypes.element.isRequired,
};
