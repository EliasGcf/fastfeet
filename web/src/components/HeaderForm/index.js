import React from 'react';
import PropTypes from 'prop-types';

import { Form, Content } from './styles';

export default function HeaderForm({ title, onSubmit, children }) {
	return (
		<Form onSubmit={onSubmit}>
			<h1>{title}</h1>

			<Content>{children}</Content>
		</Form>
	);
}

HeaderForm.propTypes = {
	title: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
