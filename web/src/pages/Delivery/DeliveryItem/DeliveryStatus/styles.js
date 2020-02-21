import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	justify-content: flex-start;
	align-items: center;
`;

export const Content = styled.div`
	height: 25px;
	background: ${props => props.background};

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0 6px;

	border-radius: 12px;

	svg {
		margin-right: 6px;
	}

	strong {
		font-size: 14px;
		color: ${props => props.color};
	}
`;
