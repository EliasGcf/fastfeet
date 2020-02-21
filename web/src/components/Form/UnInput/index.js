import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

export default function UnInput({ name, ...rest }) {
	const inputRef = useRef(null);
	const { fieldName, defaultValue = '', registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<>
			<input ref={inputRef} defaultValue={defaultValue} {...rest} />
		</>
	);
}

UnInput.propTypes = {
	name: PropTypes.string.isRequired,
};
