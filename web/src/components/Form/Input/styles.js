import styled from 'styled-components';

export const UnInput = styled.input`
	padding: 12px 15px;

	font-size: 16px;
	color: #444;

	&::placeholder {
		color: #999;
	}

	height: 45px;
	border: 1px solid #ddd;

	& + label {
		margin-top: 15px;
	}

	& + button {
		margin-top: 15px;
	}
`;

export const Error = styled.span``;

export const Label = styled.label`
	color: #444;
	font-weight: bold;

	text-align: left;
	margin-bottom: 9px;
`;
