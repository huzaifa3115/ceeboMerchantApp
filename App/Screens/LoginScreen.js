import React from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';


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


    render() {
        return (
            <View style={ { backgroundColor : '#f5f6f6', flex : 1 } }>
                <View style={ styles.loginScreenHeader }>
                    <View>
                        <Text style={ styles.loginScreenHeader.textHeading }>{'RIDERS POS'}</Text>
                    </View>
                </View>
                <View style={ styles.loginMainContent }>
                    <View style={ styles.loginMainContent.fields }>
                        <View style={ [ styles.loginMainContent.fields.textFieldView ] }>
                            <TextInput style={ [ styles.loginMainContent.fields.textFieldView.textField, ] } value={this.state.email} ref={ input => { this.inputs['email'] = input; }} returnKeyType={"next"} onChangeText={ (text) => this.setState({ email : text }) } underlineColorAndroid={ 'transparent' }  placeholder={ 'Email Address' } placeholderTextColor={'#8f979d'}></TextInput>
                        </View>
                    </View> 
                    <View style={ styles.loginMainContent.fields }>
                        <View style={ [ styles.loginMainContent.fields.textFieldView ] }>
                            <TextInput style={ [ styles.loginMainContent.fields.textFieldView.textField, ] } secureTextEntry={true} value={this.state.password} ref={ input => { this.inputs['password'] = input; }} returnKeyType={"next"} onChangeText={ (text) => this.setState({ password : text }) } underlineColorAndroid={ 'transparent' }  placeholder={ 'Password' } placeholderTextColor={'#8f979d'}></TextInput>
                        </View>
                    </View> 
                    <View style={ styles.loginMainContent.fields }>
                        <TouchableOpacity style={ styles.primaryBtn } ><Text style={ styles.primaryBtn.primaryBtnText }>{'SIGN IN'}</Text></TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}
