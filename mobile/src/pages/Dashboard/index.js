import React from 'react';
import { SafeAreaView, Text } from 'react-native';

// import { Container } from './styles';

export default function Dashboard() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: 'center',
			}}
		>
			<Text
				style={{
					fontFamily: 'Roboto-Regular',
					fontSize: 30,
				}}
			>
				Elias
			</Text>
		</SafeAreaView>
	);
}
