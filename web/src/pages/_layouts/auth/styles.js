import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Wrapper = styled.div`
	height: 100%;
	background: ${colors.primary};

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 360px;
	text-align: center;

	background: #fff;
	border-radius: 4px;

	padding: 60px 30px;

	img {
		width: 100%;
		height: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		input {
			margin-bottom: 15px;
		}

		label {
			margin: 0;
		}
	}
`;
