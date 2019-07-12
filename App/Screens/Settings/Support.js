import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, Switch } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../../Screens/BaseScreen';
import { Sidebar } from '../../Screens/Sidebar';
import styles from '../style';
import { _ } from 'lodash';
import { CTouchable, SettingsMenu, Wrapper, ContentWithMenu } from '../../Components';
import { ScrollView } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export class SupportScreens extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {

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
                                <Text style={styles.headerTitle}>{'Community'}</Text>
                            </View>
                        </View >
                    </View>
                    {/* header */}
                    {/* <View > */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <SettingsMenu go={this.__go.bind(this)} logout={this.__logout.bind(this)} />
                        <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                            <ScrollView >
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View style={{ paddingRight: '3%', paddingVertical: 3 }}>
                                            <FontAwesome name="plug" color={'#0077ae'} size={RFValue(25)} />
                                        </View>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Risoluzione dei problemi'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'help.shopify.com/manual/sell-in-person'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View style={{ paddingRight: '3%', paddingVertical: 3 }}>
                                            <Icon name="phone-outgoing" color={'#0077ae'} size={RFValue(25)} />
                                        </View>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Telephone'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'93234302'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View style={{ paddingRight: '3%', paddingVertical: 3 }}>
                                            <Icon name="mail" color={'#0077ae'} size={RFValue(25)} />
                                        </View>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Email'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'john@mail.com'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View style={{ paddingRight: '3%', paddingVertical: 3 }}>
                                            <FontAwesome name="bug" color={'#0077ae'} size={RFValue(25)} />
                                        </View>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Invia un report'}</Text>
                                            <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Auitaci a migliorare'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Chi Siamo'}</Text>
                                </View>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'ID registratore di cassa'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                        <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'2'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Versione app'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                        <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'aggiornata(5.31.0)'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Versione iOS'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                        <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'12.3.2'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'iPad6,4'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                        <Text style={{ color: '#a8adb1', fontSize: 18 }}>{'Dispositive iOS'}</Text>
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
