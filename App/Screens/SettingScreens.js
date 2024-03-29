import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, Switch } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import { Sidebar } from '../Screens/Sidebar';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, SettingsMenu, Wrapper, ContentWithMenu } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export class SettingScreens extends BaseScreen {

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
            <Wrapper footer={this.state.loaded == false ? <PageLoader /> : null}>
                <ContentWithMenu go={this.__go.bind(this)}>
                    <View style={[{ flexDirection: 'row', backgroundColor: '#ffffff' }, styles.borderShadowHeader,]}>
                        {/* sidebar */}
                        <View style={[{ flex: 3.5 }, styles.headerFlexView]}>
                            {/* header */}
                            <View style={[styles.headerFlexView.view]}>
                                <Text style={styles.headerTitle}>{'Store'}</Text>
                            </View>
                        </View >
                        {/* setting view area */}
                        <View style={[{ flex: 6.5 }, styles.headerFlexView]}>
                            {/* header */}
                            <View style={[styles.headerFlexView.view, { borderRightWidth: 0 }]}>
                                <Text style={styles.headerTitle}>{'Settings'}</Text>
                            </View>
                        </View >
                    </View>
                    {/* header */}
                    {/* <View > */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <SettingsMenu go={this.__go.bind(this)} logout={this.__logout.bind(this)}/>
                        <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                            <ScrollView>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Marked orders as fullfilled'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                                        <Switch thumbTintColor="#fff" trackColor={{ true: '#0077ae', false: 'grey' }} value={true} style={{ fontSize: 20 }} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Use audio jack for card reader'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                                        <Switch thumbTintColor="#fff" trackColor={{ true: '#0077ae', false: 'grey' }} value={true} style={{ fontSize: 20 }} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Auto-lock Screen'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                        <Text style={{ color: '#c9c9c9', fontSize: 17 }}>{'Never'}</Text>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Receipt settings'}</Text>
                                </View>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Customize receipts'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Edit the content in your printed receipt'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Always Print receipts'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Activate automatic receipt printing on POS orders'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ color: '#a8adb1', fontSize: 16 }}>{'Tax Calculations - Complete all steps for accuracy'}</Text>
                                </View>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18, color: '#0077ae' }]}>{'Set Taxable Location'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Set your current location to get the most accurate tax rates'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18, color: '#0077ae' }]}>{'Set taxable shipping zone'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Before Delivery and shipping zone to get the most accurate tax rates for in stores deliveries'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                                        <Switch thumbTintColor="#fff" trackColor={{ true: '#0077ae', false: 'grey' }} value={true} style={{ fontSize: 20 }} />
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                    {/* </View> */}
                </ContentWithMenu>
            </Wrapper>
        )
    }
}
