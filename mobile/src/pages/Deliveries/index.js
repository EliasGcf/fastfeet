import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import NamePhoto from '~/components/NamePhoto';
import { signOut } from '~/store/modules/auth/actions';
import colors from '~/styles/colors';

import {
	Container,
	Profile,
	Welcome,
	Name,
	ActionContainer,
	TitleContainer,
} from './styles';

export default function Deliveries() {
	const dispatch = useDispatch();
	const profile = useSelector(state => state.user.profile);

	function handleLogout() {
		dispatch(signOut());
	}

	return (
		<Container>
			<Profile>
				<ActionContainer>
					<NamePhoto name={profile.name} />
				</ActionContainer>

				<TitleContainer>
					<Welcome>Bem vindo de volta,</Welcome>
					<Name>{profile.name}</Name>
				</TitleContainer>

				<ActionContainer>
					<Icon
						onPress={handleLogout}
						name="exit-to-app"
						color={colors.danger}
						size={25}
					/>
				</ActionContainer>
			</Profile>
		</Container>
	);
}
