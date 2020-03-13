import React, { useRef } from 'react';
import { Alert } from 'react-native';

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
  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      Alert.alert(data.uri);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <CameraWrapper>
          <Camera ref={cameraRef} type="back" captureAudio={false} />
        </CameraWrapper>
        <Button onPress={takePicture} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}
