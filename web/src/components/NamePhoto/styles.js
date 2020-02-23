import styled from 'styled-components';

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

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	color: ${props => colors[props.number].color};
	background: ${props => colors[props.number].background};

	height: 35px;
	width: 35px;
	border-radius: 50%;

	align-self: center;

	span {
		font-size: 16px;
	}
`;
