import React, { useRef, useEffect } from 'react';
import { ViewPropTypes } from 'react-native';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

export default function Input({ name, style, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container style={style}>
      <TInput ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

Input.defaultProps = {
  style: null,
};
