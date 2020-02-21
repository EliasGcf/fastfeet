import styled from 'styled-components';

export const UnInput = styled.input`
	padding: 12px 15px;

	font-size: 16px;
	color: #444;
	border-radius: 4px;

	&::placeholder {
		color: #999;
	}

	height: 45px;
	border: 1px solid #ddd;
`;

export const Error = styled.span``;

export const Label = styled.label`
	color: #444;
	font-weight: bold;

	text-align: left;
	margin-bottom: 9px;
`;
