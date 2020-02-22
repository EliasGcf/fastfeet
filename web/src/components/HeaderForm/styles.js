import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 25px;

	h1 {
		font-size: 24px;
		font-weight: bold;
		color: #444;
	}

	> div {
		display: flex;

		button {
			margin-left: 16px;
		}
	}
`;
