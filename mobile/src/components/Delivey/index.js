import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Progress from '~/components/DeliveryProgress';
import colors from '~/styles/colors';

import {
	Container,
	TitleContainer,
	Title,
	Details,
	Detail,
	TitleDetail,
	TextDetail,
	TextLink,
} from './styles';

export default function Delivey({ data }) {
	return (
		<Container>
			<TitleContainer>
				<Icon name="local-shipping" color={colors.primary} size={20} />
				<Title>Encomenda 0{data.id}</Title>
			</TitleContainer>

			<Progress status={data.status} />

			<Details>
				<Detail>
					<TitleDetail>Data</TitleDetail>
					<TextDetail>15/01/2020</TextDetail>
				</Detail>
				<Detail>
					<TitleDetail>Cidade</TitleDetail>
					<TextDetail>15/01/2020</TextDetail>
				</Detail>
				<Detail>
					<TextLink>Ver detalhes</TextLink>
				</Detail>
			</Details>
		</Container>
	);
}
