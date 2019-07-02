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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



export class HomeScreen extends BaseScreen {

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
            <View style={ { flexDirection : 'row' } }>
                <View style={ { backgroundColor : '#000', width : '5%', justifyContent : 'center', alignItems : 'center' } }>
                    <View style={{ flex: 1, zIndex: 99,paddingVertical : 10 }}>
                        <ScrollView style={ {  flex : 1 } }>
                            <TouchableOpacity style={ styles.navBarItems }>
                               <Icon size={RFValue(20)} name={'home'} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.navBarItems }>
                               <Icon size={RFValue(20)} name={'settings'} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.navBarItems }>
                               <Icon size={RFValue(20)} name={'pie-chart'} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.navBarItems }>
                               <Icon size={RFValue(20)} name={'package'} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.navBarItems }>
                               <Icon size={RFValue(20)} name={'calendar'} color={'#fff'} />
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={{ paddingBottom : '5%' }}>
                            <TouchableOpacity style={ styles.navBarItems }>
                                <Icon size={RFValue(20)} name={'user'} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity style={ styles.navBarItems }>
                            <Icon name="home" color="#fff" size={ 30 } />
                        </TouchableOpacity> */}
                    </View>
                </View>
                <View style={{ backgroundColor: '#f5f6f8', height: viewportHeight,  width : '95%' }}>
                    {/* header */}
                    <View style={{ flexDirection: 'row', borderBottomColor: '#f5f6f8', borderBottomWidth: 4 }}>
                        {/* sidebar */}
                        <View style={{ flex: 3.5, borderRightColor: '#f5f6f8', borderRightWidth: 3, }}>
                            {/* header */}
                            <View style={[{ backgroundColor: '#ffffff', padding: '3%', }, styles.borderShadowHeader]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 0.3 }}>
                                        {/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                            <Icon name={'menu'} size={RFValue(30)} color={'#0077ae'} />
                                        </TouchableOpacity> */}
                                    </View>
                                    <View style={{ flex: 0.4, alignItems: 'center' }}>
                                        <Text style={styles.headerTitle}>{'Home Page'}</Text>
                                    </View>
                                    <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                                        {/* <TouchableOpacity>
                                        <Icon name={'search'} size={27} color={'#0077ae'} />
                                    </TouchableOpacity> */}
                                    </View>
                                </View>
                            </View>
                        </View >
                        {/* setting view area */}
                        <View style={{ flex: 6.5, borderRightColor: '#f5f6f8', borderRightWidth: 3, }}>
                            {/* header */}
                            <View style={[{ backgroundColor: '#ffffff', padding: '3%', borderRightColor: '#f5f6f8', borderRightWidth: 2 }, styles.borderShadowHeader]}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.headerTitle}>{'#0001'}</Text>
                                </View>
                            </View>
                        </View >
                    </View>
                    {/* header */}
                    {/* <View > */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 3.5, borderRightColor: '#f5f6f8', borderRightWidth: 3, paddingBottom: '5%' }}>
                            <ScrollView>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    <View>
                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'New Orders'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'Vitali Jalbu'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#4557'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'Vitali Jalbu'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#4557'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'Vitali Jalbu'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#4557'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'Vitali Jalbu'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#4557'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                    {/* <TouchableOpacity> */}
                                    <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'Vitali Jalbu'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#4557'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$55.00'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                            <ScrollView>
                                {/* content */}
                                <View style={{ borderBottomColor: '#f5f6f8', borderBottomWidth: 4 }}>
                                    <Image source={require('../../assets/img/order_dummy_bg.png')} style={{ width: '100%', height: 200 }} />
                                    <View style={{ position: 'absolute', bottom: 0, paddingHorizontal: 15, paddingBottom: 15 }}>
                                        <Text style={{ fontSize: RFValue(18), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{'Today at 3:34pm'}</Text>
                                        <Text style={{ fontSize: RFValue(60), color: '#152330', fontFamily: 'OpenSans-Bold' }}>{'$100.44'}</Text>
                                        <Text style={{ fontSize: RFValue(18), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{'Sold by Charles Guy'}</Text>
                                        <Text style={{ fontSize: RFValue(18), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{'Italy'}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ backgroundColor: '#a8adb1', borderRadius: 50, width: 10, height: 10, marginTop: 8, }} />
                                            <Text style={{ color: '#a8adb1', fontSize: RFValue(18), paddingHorizontal: 5 }}>{'Paid'}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#fff' }}>
                                    <View>
                                        <Text style={styles.orderSidebarView.customerNameText}>{'Customer'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                                        <View style={{ flex: 0.8, alignItems: 'flex-start', flexDirection: 'row' }}>
                                            <Image source={require('../../assets/img/customer_dummy.png')} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode={'cover'} />
                                            <View style={{ paddingLeft: 20 }}>
                                                <Text style={{ fontSize: RFValue(20), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{'Vitalie Jalbu'}</Text>
                                                <Text style={{ color: '#a8adb1', fontSize: RFValue(22) }}>{'vitalie@mail.com'}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                                            <Icon name={'info'} color={'#0077ae'} size={25} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ padding: 10 }} />
                                <View style={{ backgroundColor: '#fff', paddingHorizontal: 15 }}>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: '#a8adb1', fontSize: 20 }}>{'Products'}</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8' }]}>
                                        {/* <TouchableOpacity> */}
                                        <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                            <View>
                                                <Image source={require('../../assets/img/product_dummy.png')} style={{ width: 50, height: 50, }} resizeMode={'cover'} />
                                            </View>
                                            <View style={{ paddingLeft: 20 }}>
                                                <View>
                                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'Emily Wall Clock'}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.orderSidebarView.customerNameText}>{'Large / Black'}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                            <View>
                                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.orderSidebarView.customerNameText}>{'($180.00 x 2)'}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8' }]}>
                                        {/* <TouchableOpacity> */}
                                        <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                            <View>
                                                <Image source={require('../../assets/img/product_dummy.png')} style={{ width: 50, height: 50, }} resizeMode={'cover'} />
                                            </View>
                                            <View style={{ paddingLeft: 20 }}>
                                                <View>
                                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'Emily Wall Clock'}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.orderSidebarView.customerNameText}>{'Large / Black'}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                            <View>
                                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.orderSidebarView.customerNameText}>{'($180.00 x 2)'}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8' }]}>
                                        {/* <TouchableOpacity> */}
                                        <View style={{ flex: 0.3 }}>
                                            <TouchableOpacity style={[styles.primaryBtn, { marginVertical: 0, width: '100%', backgroundColor: '#edeeef' }]}>
                                                <Text style={[styles.primaryBtn.primaryBtnText, { color: '#979da2' }]}>{'Issue with orders'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.7, paddingHorizontal: 5 }}>
                                            <TouchableOpacity style={[styles.primaryBtn, { marginVertical: 0, width: '100%', backgroundColor: '#00ae53' }]}>
                                                <Text style={styles.primaryBtn.primaryBtnText}>{'Confirm order'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                                {/* content */}
                            </ScrollView>
                        </View>
                    </View>
                    {/* </View> */}
                </View>
            </View>
        )
    }
}
