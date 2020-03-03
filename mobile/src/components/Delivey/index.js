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
					<TextDetail>{data.start_date_formated}</TextDetail>
				</Detail>
				<Detail>
					<TitleDetail>Cidade</TitleDetail>
					<TextDetail>{data.recipient.city}</TextDetail>
				</Detail>
				<Detail>
					<TextLink>Ver detalhes</TextLink>
				</Detail>
			</Details>
		</Container>
	);
}
