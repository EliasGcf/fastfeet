import styled from 'styled-components/native';

import Button from '~/components/Button';
import { TextAreaInput as CTextAreaInput } from '~/components/Form';
import colors from '~/styles/colors';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  background: ${colors.primary};
  height: 155px;
`;
export const Content = styled.View`
  margin-top: -60px;

  padding: 0 20px;
`;

export const TextAreaInput = styled(CTextAreaInput)`
  height: 70%;
  font-size: 16px;

  border: 1px solid #0000001a;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  background: ${colors.primary};
  margin-top: 20px;
`;
