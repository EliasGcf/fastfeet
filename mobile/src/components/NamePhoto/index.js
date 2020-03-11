import React from 'react';

import PropTypes from 'prop-types';

import { Container, TextPhoto } from './styles';

export default function NamePhoto({ name, ...rest }) {
  const nameSplit = name?.split(' ');

  const number = Math.floor(Math.random() * (5 + 1));

  return (
    <Container number={number} {...rest}>
      <TextPhoto number={number}>
        {nameSplit?.[0]?.[0]}
        {nameSplit?.[1]?.[0]}
      </TextPhoto>
    </Container>
  );
}

NamePhoto.propTypes = {
  name: PropTypes.string.isRequired,
};
