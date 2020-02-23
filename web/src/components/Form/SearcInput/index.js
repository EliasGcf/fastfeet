import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput({ ...rest }) {
	return (
		<Container>
			<MdSearch color="#999" size={16} />
			<input type="text" {...rest} />
		</Container>
	);
}
