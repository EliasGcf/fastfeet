import styled from 'styled-components';

export const Container = styled.div`
	height: 57px;
	background: #fff;
	border-radius: 4px;

	padding-left: 25px;
	padding-right: 35px;

	display: grid;
	grid-template-columns: 0.5fr 1.5fr 1fr 1.5fr 1.5fr 1fr 1fr;

	small:last-child {
		text-align: right;
	}

	small {
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
