import React from 'react';

// import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function NamePhoto({ name }) {
	const nameSplit = name.split(' ');

	const number = Math.floor(Math.random() * (5 + 1));

	return (
		<Container number={number}>
			<Text number={number}>
				{nameSplit?.[0]?.[0]}
				{nameSplit?.[1]?.[0]}
			</Text>
		</Container>
	);
}

// NamePhoto.propTypes = {
// 	name: PropTypes.string.isRequired,
// };
