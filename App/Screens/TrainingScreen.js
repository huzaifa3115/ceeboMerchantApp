import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import * as Icon from '../Utils/Icons/index';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, } from '../Components';



export class TrainingScreen extends BaseScreen {

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
                {/* <View style={ styles.loginScreenHeader }>
                    <View>
                        <Text style={ styles.loginScreenHeader.textHeading }>{'RIDERS POS'}</Text>
                        <Icon.Home/>
                    </View>
                </View> */}
                <Header props={ this.props } />
                <View style={ styles.loginMainContent }>
                    <View style={ [ styles.loginMainContent.fields, { borderBottomWidth : 0.5, borderBottomColor : '#767f85' } ] }>
                        <View style={ styles.imageView }>
                            {/* <Image source={require('./../../assets/img/wellcome_logo.png')} /> */}
                            <Text style={ { fontSize : 30, fontFamily : 'OpenSans-Bold' } }>{'Welcome to Ceebo merchant'}</Text>
                        </View>
                        <View style={ styles.imageView }>
                            <Text style={ { color : '#767f85', fontSize : 20, fontFamily : 'OpenSans-Bold' } }>{'Waiting for your next order....'}</Text>
                        </View>
                    </View>
                    <View style={ styles.loginMainContent.fields }>
                        <TouchableOpacity style={ [ styles.primaryBtn, { backgroundColor : '#fff' } ] } ><Text style={ [ styles.primaryBtn.primaryBtnText, { color : '#0077ae' } ] }>{'Send Training Order'}</Text></TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}
