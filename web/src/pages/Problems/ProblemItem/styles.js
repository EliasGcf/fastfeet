import styled from 'styled-components';

export const Container = styled.div`
	height: 57px;
	background: #fff;
	border-radius: 4px;

	padding-left: 25px;
	padding-right: 13px;

	display: grid;
	grid-template-columns: 1fr 2fr 0.5fr;

	img {
		height: 35px;
		width: 35px;
		align-self: center;
		border-radius: 50%;
	}

	> small:last-child {
		text-align: right;
	}

	> small {
		font-size: 16px;
		color: #666;
		text-align: left;

		margin: auto 0;
	}

	> section {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;

export const MoreConainer = styled.div`
	padding: 10px;

	> div {
		display: flex;
		align-items: center;

		button {
			background: none;
			border: none;

			display: flex;
		}

		svg {
			margin-right: 8px;
		}

		span {
			font-size: 14px;
			color: #999;
		}
	}

	> div:first-child {
		padding-bottom: 9px;
		border-bottom: 1px solid #eee;
	}

	div:nth-last-child(1) {
		padding-top: 9px;
	}
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;

	strong {
		color: #444;
		font-size: 14px;
		margin-bottom: 5px;
	}

	p {
		font-size: 16px;
		color: #666;
		line-height: 26px;
	}
`;
