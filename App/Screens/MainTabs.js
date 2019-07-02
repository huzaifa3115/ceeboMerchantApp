import React from 'react';
import {
	View,
	AsyncStorage,
	Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator, createAppContainer, TabNavigator, TabBarBottom } from 'react-navigation';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';


import { LoginScreen } from './LoginScreen';
import { TrainingScreen } from './TrainingScreen';
import { OrderScreen } from './OrderScreen';
import { SettingScreens } from './SettingScreens';

export default createBottomTabNavigator(
	{
		Home: TrainingScreen,
		Settings: SettingScreens,
		Orders: OrderScreen,
		Login: LoginScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				let label;
				switch (routeName) {
					case 'Settings':
						iconName = 'settings';
						label = 'Settings';
						break;
					case 'Home':
						iconName = 'home';
						label = 'Home';
						break;
					case 'Orders':
						iconName = 'calendar';
						label = 'Training';
						break;
					case 'Login':
						iconName = 'user';
						label = 'Login';
						break;

				}

				return (
					<View style={{ flexDirection: 'row' }}>
						<Icon name={iconName} size={30} color={tintColor} />
						<Text style={ { color : '#767f85', fontSize : 18, paddingHorizontal : 5, paddingVertical : 5, fontFamily : 'OpenSans-Regular' } }>{label}</Text>
					</View>
				)
			},
		}),
		tabBarOptions: {
			activeTintColor: 'blue',
			inactiveTintColor: '#acacac',
			showLabel: false,
		},
		// tabBarComponent: TabBarBottom,
		// tabBarPosition: 'bottom',
		// animationEnabled: true,
		// swipeEnabled: true
	}
);