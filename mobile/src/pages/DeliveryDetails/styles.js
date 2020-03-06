import styled from 'styled-components/native';

import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.View`
	background: #fff;
	flex: 1;
`;

// style={{ backgroundColor: '#333', height: 200, marginTop: -120 }}

export const Background = styled.View`
	background: ${colors.primary};
	height: 155px;
`;
export const Content = styled.View`
	margin-top: -60px;
	height: 200px;
`;

export const Card = styled.View`
	background: #fff;
	margin: 0 20px;
	margin-bottom: 10px;
	padding: 15px 30px 0 15px;

	border-radius: 4px;
	border: 1px solid #eee;
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

export const Title = styled(Text)`
	font-size: 14px;
	font-weight: bold;
	color: ${colors.primary};
	margin-left: 10px;
`;

export const Label = styled(Text)`
	font-size: 14px;
	font-weight: bold;
	color: #999;
	margin-bottom: 5px;
`;

export const Value = styled(Text)`
	font-size: 14px;
	color: #666;
	margin-bottom: 15px;
`;

export const Status = styled(Value)`
	text-transform: capitalize;
`;
