import React from 'react';
import PropTypes from 'prop-types';

import More from '~/components/MorePopUp';

import { statusColors } from '~/styles/colors';

import { Container } from './styles';

import Status from './DeliveryStatus';

export default function DeliveryItem({ data }) {
	return (
		<Container>
			<small>#{data.id}</small>
			<small>{data.recipient.name}</small>
			<small>{data.product}</small>
			<small>{data.recipient.city}</small>
			<small>{data.recipient.state}</small>
			<Status
				text={data.status}
				color={statusColors[data.status].color}
				background={statusColors[data.status].background}
			/>
			<More />
		</Container>
	);
}

DeliveryItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		product: PropTypes.string,
		recipient: PropTypes.shape({
			name: PropTypes.string,
			city: PropTypes.string,
			state: PropTypes.string,
		}),
		status: PropTypes.string,
	}).isRequired,
};
