import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function HeaderList({ title, children }) {
	return (
		<Container>
			<h1>{title}</h1>

			{children && <Content>{children}</Content>}
		</Container>
	);
}

HeaderList.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element),
};

HeaderList.defaultProps = {
	children: null,
};
