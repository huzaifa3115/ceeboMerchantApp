import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, Switch } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import { Sidebar } from '../Screens/Sidebar';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



export class ReportsScreen extends BaseScreen {

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
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={ [{ backgroundColor : '#ffffff', padding : 20, }, styles.borderShadowHeader] }>
                    <View style={ { flexDirection : 'row' } }>
                        <View style={ { flex : 0.3 } }>
                            <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name={'menu'} size={27} color={'#0077ae'} />
                            </TouchableOpacity>
                        </View>
                        <View style={ { flex : 0.4, alignItems : 'center' } }>
                            <Text style={ [styles.headerTitle, { fontSize : 22 }] }>{'Reports'}</Text>
                        </View>
                        {/* <View style={ { flex : 0.3, alignItems : 'flex-end', } }>
                            <View style={ { flexDirection : 'row' } }>
                                <TouchableOpacity>
                                    <Icon name={'plus'} size={27} color={'#0077ae'} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name={'search'} size={27} color={'#0077ae'} />
                                </TouchableOpacity>
                            </View>

                        </View> */}
                    </View>
                </View>
                <ScrollView>
                    {/* content */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#f5f6f8' }}>
                        <View style={{ paddingVertical: 20 }}>
                            <Text style={{ color: '#a8adb1', fontSize: 18, fontFamily: 'OpenSans-Bold', textAlign: 'center' }}>{"Today's Revenue"}</Text>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 50, color: '#152330' }]}>{'$168.34'}</Text>
                        </View>
                    </View>
                    <View style={styles.reportTableView}>
                        <View style={styles.reportTableView.view}>
                            <Text style={styles.reportTableView.headingText}>{"Avg Order"}</Text>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportTableView.headingTextValue]}>{'$42.86'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewCenter}>
                            <Text style={styles.reportTableView.headingText}>{"Orders"}</Text>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportTableView.headingTextValue]}>{'4'}</Text>
                        </View>
                        <View style={styles.reportTableView.view}>
                            <Text style={styles.reportTableView.headingText}>{"Items"}</Text>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportTableView.headingTextValue]}>{'15'}</Text>
                        </View>
                    </View>
                    <View style={styles.reportTableView}>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'Time'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'Order'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'Customer'}</Text>
                        </View>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'Total'}</Text>
                        </View>
                    </View>
                    <View style={styles.reportTableView}>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'04:56 PM'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'#1111'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'Vitali'}</Text>
                        </View>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'$83.76'}</Text>
                        </View>
                    </View>
                    <View style={styles.reportTableView}>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'04:56 PM'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'#1111'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'Vitali'}</Text>
                        </View>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'$83.76'}</Text>
                        </View>
                    </View>
                    <View style={styles.reportTableView}>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'04:56 PM'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'#1111'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'Vitali'}</Text>
                        </View>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'$83.76'}</Text>
                        </View>
                    </View>
                    <View style={styles.reportTableView}>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'04:56 PM'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{'#1111'}</Text>
                        </View>
                        <View style={styles.reportTableView.viewLeft}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'Vitali'}</Text>
                        </View>
                        <View style={styles.reportTableView.view}>
                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'$83.76'}</Text>
                        </View>
                    </View>
                    {/* content */}
                </ScrollView>
            </View>
        )
    }
}
