import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function HeaderPage({ title, children }) {
	return (
		<Container>
			<h1>{title}</h1>

			<Content>{children}</Content>
		</Container>
	);
}

HeaderPage.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
