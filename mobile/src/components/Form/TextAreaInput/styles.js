import styled from 'styled-components/native';

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-family: 'Roboto-Regular';

  border: 1px solid #eee;
  background: #fff;
  border-radius: 4px;

  height: 45px;
  padding-left: 20px;
  padding-right: 20px;
`;
