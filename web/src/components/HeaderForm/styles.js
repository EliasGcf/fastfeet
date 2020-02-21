import styled from 'styled-components';

import { Form as unForm } from '@unform/web';

export const Form = styled(unForm)`
	h1 {
		font-size: 24px;
		font-weight: bold;
		color: #444;

		margin-bottom: 35px;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 25px;
`;
