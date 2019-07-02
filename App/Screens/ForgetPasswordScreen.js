import React from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import {Guest} from '../Models/Guest';
import { _ } from 'lodash';
import {Validator} from '../Utils/Validator';


export class ForgetPasswordScreen extends BaseScreen {

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

    	errors.loginValidated = true;

    	this.setState(errors);

    	return errorCount == 0 ? true : false; 

    }

    __forgetPassword(){
        let that = this;
        if(this.__validateLogin()){
            that.__activeLoader();
            Guest.forgetPassword(this.state.email).then(response => {
                console.log(response);
                
                that.__deactiveLoader();
                if(response.success){
                   Alert.alert('Success', response.success);
                } else{
                    Alert.alert('Error', response.errorr);
                }
               
            }).catch(error => {
                console.log(error);
                that.__deactiveLoader();
                Alert.alert('Error', 'Please Try Again!');
            })
        }
    }



    render() {
        return (
            <View style={ { backgroundColor : '#f5f6f6', flex : 1 } }>
                <View style={ [styles.loginScreenHeader,styles.borderShadowHeader] }>
                    <View>
                        <Text style={ styles.loginScreenHeader.textHeading }>{'FORGET PASSWORD'}</Text>
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
                        <TouchableOpacity onPress={ () => this.__forgetPassword() } style={ styles.primaryBtn }  ><Text style={ styles.primaryBtn.primaryBtnText }>{'SUBMIT'}</Text></TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}
