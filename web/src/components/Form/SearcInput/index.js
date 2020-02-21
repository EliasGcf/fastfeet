import React from 'react';

import { MdSearch } from 'react-icons/md';
import Input from '../UnInput';

import { Container } from './styles';

export default function SearchInput({ ...rest }) {
	return (
		<Container>
			<MdSearch color="#999" size={16} />
			<Input type="text" name="search" {...rest} />
		</Container>
	);
}
