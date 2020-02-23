import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;

	padding: 0 120px;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1200px;
`;

export const Grid = styled.div`
	> section {
		display: grid;

		padding-left: 25px;
		padding-right: 13px;

		grid-template-columns: 1.2fr 1.1fr 2fr 2fr 1fr;

		strong:last-child {
			text-align: right;
		}

		strong {
			font-size: 16px;
			color: #444;
		}

		margin-bottom: 15px;
	}

	> div + div {
		margin-top: 20px;
	}
`;
