import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: #fff;
`;

export const Profile = styled.View`
	margin-top: 20.5px;
	flex-direction: row;
	justify-content: flex-start;
`;

export const ActionContainer = styled.View`
	flex: 1;

	justify-content: center;
	align-items: center;
`;

export const TitleContainer = styled.View`
	flex: 3;
`;

export const Welcome = styled(Text)`
	font-size: 16px;
	color: #666;
	margin: 12px 0 0 12px;
`;

export const Name = styled(Text).attrs({
	numberOfLines: 1,
	ellipsizeMode: 'tail',
})`
	font-size: 20px;
	font-weight: bold;
	color: #444;

	margin: 0 0 0 12px;
`;
