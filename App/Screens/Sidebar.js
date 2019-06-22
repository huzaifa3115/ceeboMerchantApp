import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image,Dimensions } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import * as Icon from '../Utils/Icons/index';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



export class Sidebar extends BaseScreen {

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
            <View style={ styles.sidebar }>
                <View style={ { flex : 0.6 } }>
                    <ScrollView>
                        <View style={ styles.sidebar.itemView }>
                            <TouchableOpacity>
                                <Text style={ styles.sidebar.itemView.text }>{'New'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ { backgroundColor  : '#fff', height : viewportHeight } }>
                            <TouchableOpacity style={ styles.sidebar.orderItemView }>
                                <View style={ { flex : 0.5, alignItems : 'flex-start' } }>
                                    <Text style={ styles.sidebar.itemView.text }>{'#0001'}</Text>
                                </View>
                                <View style={ { flex : 0.5, alignItems : 'flex-end' } }>
                                    <Text style={ styles.sidebar.orderItemView.mintText }>{'26 min'}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.sidebar.orderItemView }>
                                <View style={ { flex : 0.5, alignItems : 'flex-start' } }>
                                    <Text style={ styles.sidebar.itemView.text }>{'#0001'}</Text>
                                </View>
                                <View style={ { flex : 0.5, alignItems : 'flex-end' } }>
                                    <Text style={ styles.sidebar.orderItemView.mintText }>{'26 min'}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </ScrollView>
                </View>
                <View style={ [styles.sidebar.orderItemView,{ backgroundColor : '#f6f7f7' }] }>
                    <Text style={ styles.sidebar.itemView.text }>{'Deliveries'}</Text>
                </View>
                <View style={ { flex : 0.4 } }>
                    <View style={ { backgroundColor : '#ffffff',height : viewportHeight } }>
                        <View style={ { paddingHorizontal : 20, paddingVertical : 20, borderBottomColor : '#dbdddf', borderBottomWidth : 0.9 } }>
                            <Text style={ { color : '#dbdddf', fontSize : 15 } }>{'No orders being pickup soon'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
