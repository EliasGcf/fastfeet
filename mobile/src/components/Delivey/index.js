import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Progress from '~/components/DeliveryProgress';
import colors from '~/styles/colors';

import {
  Container,
  TitleContainer,
  Title,
  Details,
  Detail,
  TitleDetail,
  TextDetail,
  TextLink,
} from './styles';

export default function Delivey({ data }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" color={colors.primary} size={20} />
        <Title>Encomenda 0{data.id}</Title>
      </TitleContainer>

      <Progress status={data.status} />

      <Details>
        <Detail>
          <TitleDetail>Data</TitleDetail>
          <TextDetail>{data.start_date_formated}</TextDetail>
        </Detail>
        <Detail>
          <TitleDetail>Cidade</TitleDetail>
          <TextDetail>{data.recipient.city}</TextDetail>
        </Detail>
        <Detail>
          <TextLink
            onPress={() => navigation.navigate('Detalhes', { delivery: data })}
          >
            Ver detalhes
          </TextLink>
        </Detail>
      </Details>
    </Container>
  );
}

Delivey.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    start_date_formated: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
