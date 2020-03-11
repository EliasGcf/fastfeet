import React from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import { Container, TextButton } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </Container>
  );
}

Button.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
