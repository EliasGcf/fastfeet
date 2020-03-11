import React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useRoute } from '@react-navigation/native';

import api from '~/services/api';
import colors from '~/styles/colors';

import {
  Container,
  Background,
  Content,
  Card,
  TitleContainer,
  Title,
  Label,
  Value,
  Status,
  Menu,
  Option,
  OptionTitle,
} from './styles';

export default function DeliveryDetails() {
  const auth = useSelector(state => state.auth);
  const route = useRoute();
  const { delivery } = route.params;

  async function handleDeliveryWithdraw() {
    async function delievryWithdraw() {
      api.put(`/deliveryman/${auth.id}/delivery/${delivery.id}`, {
        start_date: new Date(),
      });
    }

    Alert.alert(
      'Confirmação de retirada',
      'Confirma que deseja realizar a retirada desta encomenda?',
      [
        {
          text: 'Cancelar',
          style: 'destructive',
        },
        {
          text: 'Confirmar',
          onPress: delievryWithdraw,
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <Content>
        <Card>
          <TitleContainer>
            <Icon name="local-shipping" color={colors.primary} size={20} />
            <Title>Informações da entrega</Title>
          </TitleContainer>
          <Label>DESTINATÁRIO</Label>
          <Value>{delivery.recipient.name}</Value>
          <Label>ENDEREÇO DE ENTREGA</Label>
          <Value>
            {delivery.recipient.street}, {delivery.recipient.number},{' '}
            {delivery.recipient.city} - {delivery.recipient.state},{' '}
            {delivery.recipient.zip_code}
          </Value>
          <Label>PRODUTO</Label>
          <Value>{delivery.product}</Value>
        </Card>

        <Card>
          <TitleContainer>
            <Icon name="event" color={colors.primary} size={20} />
            <Title>Situação da entrega</Title>
          </TitleContainer>
          <Label>STATUS</Label>
          <Status>{delivery.status}</Status>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Label>DATA DE RETIRADA</Label>
              <Value>{delivery.start_date_formated}</Value>
            </View>
            <View>
              <Label>DATA DE ENTREGA</Label>
              <Value>{delivery.end_date_formated}</Value>
            </View>
          </View>
        </Card>

        <Menu>
          <Option>
            <Icon name="highlight-off" color={colors.danger} size={20} />
            <OptionTitle>Informar Problema</OptionTitle>
          </Option>
          <Option>
            <Icon name="info-outline" color="#E7BA40" size={20} />
            <OptionTitle>Visualizar Problemas</OptionTitle>
          </Option>
          {delivery.status === 'PENDENTE' ? (
            <Option onPress={handleDeliveryWithdraw}>
              <Icon name="local-shipping" color={colors.primary} size={20} />
              <OptionTitle>Realizar Retirada</OptionTitle>
            </Option>
          ) : (
            <Option>
              <Icon name="check-circle" color={colors.primary} size={20} />
              <OptionTitle>Confirmar Entrega</OptionTitle>
            </Option>
          )}
        </Menu>
      </Content>
    </Container>
  );
}
