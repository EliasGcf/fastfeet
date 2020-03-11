import styled from 'styled-components/native';

import Text from '../Text';

const colors = [
  {
    color: '#A28FD0',
    background: '#F4EFFC',
  },
  {
    color: '#CB946C',
    background: '#FCF4EE',
  },
  {
    color: '#83CEC9',
    background: '#EBFBFA',
  },
  {
    color: '#CC7584',
    background: '#FFEEF1',
  },
  {
    color: '#A8D080',
    background: '#F4F9EF',
  },
  {
    color: '#CCCC8B',
    background: '#FCFCEF',
  },
];

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  background: ${props => colors[props.number].background};

  height: 68px;
  width: 68px;
  border-radius: 34px;

  align-self: center;
`;

export const TextPhoto = styled(Text)`
  font-size: 31px;
  color: ${props => colors[props.number].color};
`;
