import React from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import {Validator} from '../Utils/Validator';
import styles from './style';
import {Guest} from '../Models/Guest';
import { _ } from 'lodash';
import { Wrapper } from '../Components';

import AsyncStorage from '@react-native-community/async-storage';


export class LoginScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginValidated: false,
            usernameError: true,
            passwordError: true,
            isShowPassword: true,
        }
    }

    __validateLogin() {
    	
    	let errorCount = 0;
    	let errors = {};

    	if(!Validator.isEmail(_.trim(this.state.email))) {
    		errorCount++;
            errors.usernameError = true;
            
    	} else {
            errors.usernameError = false;
            
    	}

    	if(Validator.isEmpty(this.state.password)) {
    		errorCount++;
    		errors.passwordError = true;
    	} else {
    		errors.passwordError = false;
    	}

    	errors.loginValidated = true;

    	this.setState(errors);

    	return errorCount == 0 ? true : false; 

    }

    __login(){
        let that = this;
        if(this.__validateLogin()){
            that.__activeLoader();
            Guest.login(this.state.email,this.state.password).then(response => {
                console.log(response);
                
                that.__deactiveLoader();
                if(response.success){
                   
                    global.userData = response.merchant_data;
                    global.isUserLoggedIn = true;

                    AsyncStorage.setItem('user', JSON.stringify(global.userData));
                    AsyncStorage.setItem('isUserLoggedIn', '1');
                    AsyncStorage.setItem('token',  global.userData.token);

                    // global.drawerComponent.setState({
                    //     hideNavigation : false,
                    //     isUserLoggedIn: true,
                    //     userID : response.rider_data.id,
                    //     userName : response.rider_data.first_name + " " + response.rider_data.last_name ,
                    // });

                    that.__goAndReset('Home');

                } else{
                    Alert.alert('Error', 'Email or password is invalid!'); 
                }
               
            }).catch(error => {
                console.log(error);
                that.__deactiveLoader();
                Alert.alert('Error', 'Please Try Again!');
            })
        }
    }



    render() {
        const PageLoader = (props) => this.__loader();
        return (
            <Wrapper footer={this.state.loaded == false ? <PageLoader /> : null}>
                <View style={ [styles.loginScreenHeader,styles.borderShadowHeader] }>
                    <View>
                        <Text style={ styles.loginScreenHeader.textHeading }>{'MERCHANT POS'}</Text>
                    </View>
                </View>
                <View style={ styles.loginMainContent }>
                    <View style={ styles.loginMainContent.fields }>
                        <View style={ [ styles.loginMainContent.fields.textFieldView ] }>
                            <TextInput style={ [ styles.loginMainContent.fields.textFieldView.textField, ] } value={this.state.email} ref={ input => { this.inputs['email'] = input; }} returnKeyType={"next"} onChangeText={ (text) => this.setState({ email : text }) } underlineColorAndroid={ 'transparent' }  placeholder={ 'Email Address' } placeholderTextColor={'#8f979d'}></TextInput>
                            {this.__showValidationIcon(this.state.usernameError, this.state.loginValidated)}
                        </View>
                    </View> 
                    <View style={ styles.loginMainContent.fields }>
                        <View style={ [ styles.loginMainContent.fields.textFieldView ] }>
                            <TextInput style={ [ styles.loginMainContent.fields.textFieldView.textField, ] } secureTextEntry={true} value={this.state.password} ref={ input => { this.inputs['password'] = input; }} returnKeyType={"next"} onChangeText={ (text) => this.setState({ password : text }) } underlineColorAndroid={ 'transparent' }  placeholder={ 'Password' } placeholderTextColor={'#8f979d'}></TextInput>
                            {this.__showValidationIcon(this.state.passwordError, this.state.loginValidated)}
                        </View>
                    </View> 
                    <View style={ styles.loginMainContent.fields }>
                        <TouchableOpacity onPress={ () => this.__login() } style={ styles.primaryBtn } ><Text style={ styles.primaryBtn.primaryBtnText }>{'SIGN IN'}</Text></TouchableOpacity>
                    </View>
                    <View style={ { alignItems : 'center', justifyContent : 'center' } }>
                        <TouchableOpacity onPress={ () => this.__go('ForgetPassword') } ><Text style={ [styles.primaryBtn.primaryBtnText,{ color : '#000', fontFamily: 'OpenSans-Regular' }] }>{'forget password?'}</Text></TouchableOpacity>
                    </View> 
                </View>
            </Wrapper>
        )
    }
}
