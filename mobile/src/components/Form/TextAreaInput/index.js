import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { TInput } from './styles';

export default function TextAreaInput({ name, style, ...rest }) {
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
    <TInput
      style={style}
      ref={inputRef}
      multiline
      defaultValue={defaultValue}
      {...rest}
    />
  );
}

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.arrayOf(PropTypes.object),
};

TextAreaInput.defaultProps = {
  style: null,
};
