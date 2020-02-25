import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: red;
`;

export const Profile = styled.View`
	flex-direction: row;
	justify-content: flex-start;

	background: #ddd;
`;

export const ActionContainer = styled.View`
	flex: 1;
	background: #999;
`;

export const TitleContainer = styled.View`
	flex: 3;
	background: #7159c1;
`;

export const Welcome = styled.Text`
	font-size: 16px;
	color: #666;
	margin: 12px 0 0 12px;
`;

export const Name = styled.Text.attrs({
	numberOfLines: 1,
	ellipsizeMode: 'tail',
})`
	font-size: 20px;
	font-weight: bold;
	color: #444;

	margin: 0 0 0 12px;
`;
