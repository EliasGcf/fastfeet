import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
	background: #fff;
	padding: 0 30px;

	border-bottom: 1px solid #ddd;
	margin-bottom: 35px;
`;

export const Content = styled.div`
	height: 64px;
	/* margin: 0 auto; */

	display: flex;
	align-items: center;
	justify-content: space-between;

	nav {
		display: flex;
		align-items: center;

		img {
			width: 135px;
			height: 26px;
			margin-right: 30px;
		}
	}

	aside {
		display: flex;
		align-items: center;
	}
`;

export const Navigation = styled.div`
	padding-left: 30px;
	height: 32px;
	border-left: 1px solid #ddd;

	display: flex;
	align-items: center;

	a {
		margin-right: 20px;
		font-size: 15px;
		font-weight: bold;
		color: #999;
		transition: color 0.2s;

		&:hover {
			color: ${colors.primary};
		}

		&.active {
			color: #444;
		}
	}
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	strong {
		font-weight: bold;
		color: #666;
		margin-bottom: 5px;
	}

	button {
		border: 0;
		background: none;
		color: ${colors.danger};
		transition: color 0.2s;

		&:hover {
			color: ${colors.primary};
		}
	}
`;
