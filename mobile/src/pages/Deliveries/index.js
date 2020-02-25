import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import NamePhoto from '~/components/NamePhoto';

import {
	Container,
	Profile,
	Welcome,
	Name,
	ActionContainer,
	TitleContainer,
} from './styles';

export default function Deliveries() {
	return (
		<Container>
			<Profile>
				<ActionContainer>
					<NamePhoto name="Elias Gabriel" />
				</ActionContainer>

				<TitleContainer>
					<Welcome>Bem vindo de volta,</Welcome>
					<Name>Elias Gabriel da Cruz Figueredo</Name>
				</TitleContainer>
				<ActionContainer />
			</Profile>
		</Container>
	);
}
