import React, { useRef, useState } from 'react';
import { Platform } from 'react-native';

import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  CameraWrapper,
  Camera,
  Button,
} from './styles';

export default function DeliveryConfirmPhoto() {
  // eslint-disable-next-line prefer-const
  let cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      type: 'image/jpg',
      uri: pictureUri,
      name: 'assignature.jpg',
    });

    await api.post('files', dataFile);
  }

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
      await handleSubmit();
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <CameraWrapper>
          <Camera ref={cameraRef} type="back" captureAudio={false} />
        </CameraWrapper>
        <Button onPress={handletakePicture} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}
