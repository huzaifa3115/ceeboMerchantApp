import React from 'react';
import {
	View,
	Image,
	Text,
	Dimensions,
	Alert
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { StackActions, NavigationActions } from 'react-navigation';
import {Loader,CTouchable} from '../Components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';



export class BaseScreen extends React.Component {

	constructor(props) {
		super(props);
		this.inputs = {};
		this.state = {}
    }
    
    __back() {
		this.props.navigation.goBack();
	}

	__go(to, params = {}) {
		const pushAction = StackActions.push({
			routeName: to,
			params: params 
		  });
		  this.props.navigation.dispatch(pushAction);
    }

    __goAndReset(routeName, params = {}) {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: routeName, params })],
		  });
		this.props.navigation.dispatch(resetAction);
	}
    
    focusNextField(key) {
		this.inputs[key].focus();
    }
    
    __showValidationIcon(hasError, validated = false) {
		
		if(!validated) {
			return null;
		}

		if(hasError == true) {
			return (
				<View style={styles.validationIcon}>
					<FontAwesome name="times-circle" size={22} color="#f20000" />
				</View>
			);
		}

		return (
			// <View style={styles.validationIcon}>
			// 	<FontAwesome name="check-circle" size={22} color="#4caf50" />
            // </View>
            <View></View>
		);
    }
    
    __loader(){
		return(
			<View style={ styles.loaderOverlay }>
				<Loader />
			</View>
		)
    }
    
    __activeLoader(){
        this.setState({
            loaded:false
        })
    }

    __deactiveLoader(){
        this.setState({
            loaded:true
        })  
    }
    
    __logout() {
		AsyncStorage.clear();
		global.isUserLoggedIn = false;
		global.userData = {};
		Alert.alert('sss');
		
		this.__goAndReset('login');
	}


	
}