import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderForm({ title, children }) {
	return (
		<Container>
			<h1>{title}</h1>
			<div>{children}</div>
		</Container>
	);
}

HeaderForm.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
