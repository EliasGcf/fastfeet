import styled from 'styled-components/native';

import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.View`
  margin-top: 25px;
`;

export const ProgressContainer = styled.View`
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Ball = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;

  background: ${props => (props.marked ? colors.primary : '#fff')};

  border: 1px solid ${colors.primary};
`;

export const Line = styled.View`
  height: 1px;
  flex: 1;
  background: ${colors.primary};
`;

export const Descriptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`;

export const Description = styled(Text)`
  font-size: 10px;
  color: #999;

  text-align: center;
`;
