/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ListItem, Alert, Dimensions, Image } from 'react-native';

// importing screens
import { LoginScreen } from './App/Screens/LoginScreen';
import { TrainingScreen } from './App/Screens/TrainingScreen';
import { ConfrimOrderScreen } from './App/Screens/ConfrimOrderScreen';
import { SettingScreens } from './App/Screens/SettingScreens';

import styles from './App/Screens/style';

import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { clearView } from './App/Components'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


// importing screens

// import Icon from "react-native-vector-icons/Feather";

import {
	DrawerItems,
	StackNavigator,
	createDrawerNavigator,
	createStackNavigator,
	createAppContainer
} from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';

import { TouchableOpacity } from 'react-native-gesture-handler';
import MainTabs from './App/Screens/MainTabs';


global.userData = {};
global.currentLat = false;
global.currentLng = false;
global.isUserLoggedIn = false;
global.isDrawer = false;

const MainNavigator = createStackNavigator({
	Main: {
		screen: TrainingScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	Settings: {
		screen: SettingScreens,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}
	},
	Order: {
		screen: ConfrimOrderScreen,
		headerMode: 'float',
		navigationOptions: {
			header: null
		}	
	}
});

class CustomDrawer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isUserLoggedIn: false,
			hideNavigation: false,
			isUserLoggedIn: false,
			userID: '',
			userName: '',
			profileImageUrl: '',
		}
		global.drawerComponent = this;
	}

	__goAndReset(routeName, params = {}) {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: routeName, params })],
		  });
		this.props.navigation.dispatch(resetAction);
	}
    
    __logoutConfirm() {
        Alert.alert('Confirm', 'Are you sure you want to log out?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Logout', onPress: () => this.__logout() },
        ]);
    }
    
	__go(to, params = {}) {
		const pushAction = StackActions.push({
			routeName: to,
			params: params 
		  });
		  this.props.navigation.dispatch(pushAction);
	}
	__renderMenus() {
		return (
			<View>
				<View>
					<Image source={require('./assets/img/drawer-bg.jpg')} style={ { width : '100%', height : 200  } } />
					<View style={ styles.drawerImgBgView }>
						<Text style={ { color : '#fff', fontSize : 22, fontFamily : 'OpenSans-Bold' } }>{'Mexican Grill'}</Text>
						<Text style={ { color : '#fff', fontSize : 18, fontFamily : 'OpenSans-Regular' } }>{'425 Market St.'}</Text>
					</View>
				</View>
				<View style={ styles.drawerMenuItem }>
					<TouchableOpacity style={ styles.drawerMenuItem.itemBtn } onPress={ () => this.__go('Order') }>
						{/* <TouchableOpacity> */}
						<View style={ styles.drawerMenuItem.itemBtn.view }>
							<View >
								<Icon size={ 25 } name={ 'calendar' } color={ '#010101' }  />
							</View>
							<View style={ { paddingHorizontal : 10 } } >
								<Text style={ styles.drawerMenuItem.itemBtn.menuLabel }>{'Open Orders'}</Text>
							</View>
						</View>
						<View style={ { flex : 0.3 } }>
							<View style={ { backgroundColor : '#8c8c8c', borderRadius : 20, width : 50, justifyContent : 'center', alignItems : 'center', paddingVertical : 5 } }>
								<Text style={ { color : '#fff', fontSize : 15, fontFamily : 'OpenSans-Regular' } }>{'10'}</Text>
							</View>
						</View>
						{/* </TouchableOpacity> */}
					</TouchableOpacity>
					<TouchableOpacity style={ styles.drawerMenuItem.itemBtn }>
						{/* <TouchableOpacity> */}
						<View style={ styles.drawerMenuItem.itemBtn.view }>
							<View >
								<FontAwesome size={ 25 } name={ 'check-circle' } color={ '#010101' }  />
							</View>
							<View style={ { paddingHorizontal : 10 } } >
								<Text style={ styles.drawerMenuItem.itemBtn.menuLabel }>{'Completed Orders'}</Text>
							</View>
						</View>
					</TouchableOpacity>
					<View style={ { padding : 10 } } />
					<TouchableOpacity style={ styles.drawerMenuItem.itemBtn }>
						{/* <TouchableOpacity> */}
						<View style={ styles.drawerMenuItem.itemBtn.view }>
							<View >
								<FontAwesome size={ 25 } name={ 'th-large' } color={ '#010101' }  />
							</View>
							<View style={ { paddingHorizontal : 10 } } >
								<Text style={ styles.drawerMenuItem.itemBtn.menuLabel }>{'Menu'}</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={ styles.drawerMenuItem.itemBtn } onPress={ () => this.__go('Settings') }>
						{/* <TouchableOpacity> */}
						<View style={ styles.drawerMenuItem.itemBtn.view }>
							<View >
								<FontAwesome size={ 25 } name={ 'tasks' } color={ '#010101' }  />
							</View>
							<View style={ { paddingHorizontal : 10 } } >
								<Text style={ styles.drawerMenuItem.itemBtn.menuLabel }>{'Store Management'}</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={ styles.drawerMenuItem.itemBtn }>
						{/* <TouchableOpacity> */}
						<View style={ styles.drawerMenuItem.itemBtn.view }>
							<View >
								<FontAwesome size={ 25 } name={ 'print' } color={ '#010101' }  />
							</View>
							<View style={ { paddingHorizontal : 10 } } >
								<Text style={ styles.drawerMenuItem.itemBtn.menuLabel }>{'Printer & Receipts'}</Text>
							</View>
						</View>
					</TouchableOpacity>
					<View style={ { padding : 10 } } />
					<TouchableOpacity style={ styles.drawerMenuItem.itemBtn }>
						{/* <TouchableOpacity> */}
						<View style={ styles.drawerMenuItem.itemBtn.view }>
							<View >
								<FontAwesome size={ 25 } name={ 'life-ring' } color={ '#010101' }  />
							</View>
							<View style={ { paddingHorizontal : 10 } } >
								<Text style={ styles.drawerMenuItem.itemBtn.menuLabel }>{'Help Support'}</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={ [ styles.drawerMenuItem.itemBtn, { flexDirection : 'column', justifyContent : 'center', alignItems :'center', backgroundColor : '#c9c9c9' } ] }>
						{/* <TouchableOpacity> */}
						<Text style={ [ styles.drawerMenuItem.itemBtn.menuLabel, { color : '#f42d64', fontSize : 18 } ] }>{'Logout'}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	render() {

		if (!this.state.hideNavigation) {
			return this.__renderMenus()
		} else {
			return <View />
		}

	}


}

const App = createDrawerNavigator({
	Main: {
		screen: MainNavigator,
	},

}, {
		contentComponent: CustomDrawer,

	})


module.exports = {
	App: createAppContainer(App)
};
