/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,ListItem,Alert,Dimensions,Image} from 'react-native';

// importing screens
import { LoginScreen } from './App/Screens/LoginScreen';
import { TrainingScreen } from './App/Screens/TrainingScreen';

import styles from './App/Screens/style';

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
});

module.exports = {
    App: createAppContainer(MainNavigator)
};
