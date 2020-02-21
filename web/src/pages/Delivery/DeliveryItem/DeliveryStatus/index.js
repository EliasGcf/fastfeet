import React from 'react';
import PropTypes from 'prop-types';

import { MdFiberManualRecord } from 'react-icons/md';

import { Container, Content } from './styles';

export default function DeliveryStatus({ text, color, background }) {
	return (
		<Container>
			<Content color={color} background={background}>
				<MdFiberManualRecord size={15} color={color} />
				<strong>{text}</strong>
			</Content>
		</Container>
	);
}

DeliveryStatus.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
};
