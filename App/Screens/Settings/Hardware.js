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

export class HardwareScreens extends BaseScreen {

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
                                <Text style={styles.headerTitle}>{'Hardware'}</Text>
                            </View>
                        </View >
                    </View>
                    {/* header */}
                    {/* <View > */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <SettingsMenu go={this.__go.bind(this)} logout={this.__logout.bind(this)} />
                        <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                            <ScrollView>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', }]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                        <View style={{ paddingRight: '3%', paddingVertical: 3 }}>
                                            <Icon name="airplay" color={'#0077ae'} size={RFValue(25)} />
                                        </View>
                                        <View >
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Collega un lettore di carte'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon size={RFValue(30)} name={'plus-circle'} color={'#0077ae'} />
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
