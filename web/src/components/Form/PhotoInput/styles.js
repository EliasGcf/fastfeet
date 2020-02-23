import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 150px;

	display: flex;
	justify-content: center;
`;

export const Content = styled.label`
	width: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	> strong {
		font-size: 16px;
		color: #ddd;
	}

	border: 2px dashed #ddd;
	border-radius: 50%;

	> img {
		border-radius: 50%;
	}

	> input {
		display: none;
	}
`;
