import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 100%;

  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-family: 'Roboto-Regular';
  height: 45px;
  margin-left: 20px;
`;
