import styled from 'styled-components/native';

import Button from '~/components/Button';
import { Input as UnInput } from '~/components/Form';

export const Container = styled.View`
  background: #7d40e7;
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 25px;
`;

export const Input = styled(UnInput)`
  margin-top: 37.5px;
`;

export const SubmitButton = styled(Button)`
  background: #82bf18;
  width: 100%;
  margin-top: 15.5px;
`;
