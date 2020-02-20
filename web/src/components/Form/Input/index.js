import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { UnInput, Error, Label } from './styles';

export default function Input({ name, label, ...rest }) {
	const inputRef = useRef(null);
	const { fieldName, defaultValue = '', registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<>
			{label && <Label htmlFor={fieldName}>{label}</Label>}
			<UnInput ref={inputRef} defaultValue={defaultValue} {...rest} />
			{error && <Error>{error}</Error>}
		</>
	);
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
};

Input.defaultProps = {
	label: '',
};
