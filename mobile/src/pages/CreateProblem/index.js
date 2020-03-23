import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  TextAreaInput,
  SubmitButton,
} from './styles';

export default function CreateProblem() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { delivery_id } = route.params;

  async function handleSubmit({ description }, { reset }) {
    setLoading(true);
    try {
      await api.post(`/delivery/${delivery_id}/problems`, {
        description,
      });
      Alert.alert('Problema cadastrado com sucesso!');
      navigation.navigate('Entregas');
    } catch (err) {
      Alert.alert(err.response.data.error);
    }

    setLoading(false);
    reset();
  }

  return (
    <Container>
      <Background />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextAreaInput
            name="description"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            multiline
            style={{
              textAlignVertical: 'top',
            }}
          />
        </Form>

        <SubmitButton
          loading={loading}
          onPress={() => formRef.current.submitForm()}
        >
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
