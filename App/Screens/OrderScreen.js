import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import { Sidebar } from '../Screens/Sidebar';
import styles from './style';
import { _ } from 'lodash';
import { Wrapper, SideBar, OrderListingCart,ContentWithMenu } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Orders } from '../Models/Orders';


export class OrderScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loaded: false,
            allOrders: [],
            currentOrders: {
                items : []
            },
        }
        this.__getOrders();
        this.__updateOrderView = this.__updateOrderView.bind(this);
    }

    __getOrders() {
        this.__activeLoader();

        Orders.orders().then(response => {
            console.log(response);
            if (response.orders.length > 0) {
                this.setState({
                    allOrders: response.orders
                }, () => {
                    this.__updateOrderView(this.state.allOrders[0].id);
                })
            }
            this.__deactiveLoader();
        }).catch(error => {
            this.__deactiveLoader();
        })
    }

    __updateOrderView(orderID) {

        Orders.orderDetail(orderID).then(response => {
            console.log(response);
            if (response) {
                this.setState({
                    currentOrders: response
                },() => { console.log(this.state.currentOrders, 'dfd') })
            }
            this.__deactiveLoader();
        }).catch(error => {
            this.__deactiveLoader();
        })
    }



    render() {
        const PageLoader = (props) => this.__loader();
        return (
            <Wrapper footer={this.state.loaded == false ? <PageLoader /> : null}>
                <ContentWithMenu  go={this.__go.bind(this)}>
                    {/* header */}
                    <View style={[{ flexDirection: 'row', backgroundColor: '#ffffff' }, styles.borderShadowHeader,]}>
                        {/* sidebar */}
                        <View style={[{ flex: 3.5 }, styles.headerFlexView]}>
                            {/* header */}
                            <View style={[styles.headerFlexView.view]}>
                                <Text style={styles.headerTitle}>{'Orders Page'}</Text>
                            </View>
                        </View >
                        {/* setting view area */}
                        <View style={[{ flex: 6.5 }, styles.headerFlexView]}>
                            {/* header */}
                            <View style={[styles.headerFlexView.view, { borderRightWidth: 0 }]}>
                                <Text style={styles.headerTitle}>{'#' + this.state.currentOrders.id}</Text>
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
                                <FlatList
                                    extraData={this.state}
                                    data={this.state.allOrders}
                                    renderItem={({ item }) =>
                                        <OrderListingCart data={item} updateView={this.__updateOrderView.bind(this)} />
                                    }
                                />
                            </ScrollView>
                        </View>
                        <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                            <ScrollView>
                                {/* content */}
                                <View style={{ borderBottomColor: '#f5f6f8', borderBottomWidth: 4 }}>
                                    <Image source={require('../../assets/img/order_dummy_bg.png')} style={{ width: '100%', height: 200 }} />
                                    <View style={{ position: 'absolute', bottom: 0, paddingHorizontal: 15, paddingBottom: 15 }}>
                                        <Text style={{ fontSize: RFValue(18), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{'Today at 3:34pm'}</Text>
                                        <Text style={{ fontSize: RFValue(60), color: '#152330', fontFamily: 'OpenSans-Bold' }}>{'$' + this.state.currentOrders.total_price}</Text>
                                        <Text style={{ fontSize: RFValue(18), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{'Sold by Charles Guy'}</Text>
                                        <Text style={{ fontSize: RFValue(18), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{this.state.currentOrders.street_address_}</Text>
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
                                                <Text style={{ fontSize: RFValue(20), color: '#152330', fontFamily: 'OpenSans-Regular' }}>{this.state.currentOrders.customer_name}</Text>
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
                                    {
                                        this.state.currentOrders.items.length > 0 ?
                                            this.state.currentOrders.items.map(function (item, i) {
                                                return (
                                                    <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8' }]}>
                                                        {/* <TouchableOpacity> */}
                                                        <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                                            <View>
                                                                <Image source={require('../../assets/img/product_dummy.png')} style={{ width: 50, height: 50, }} resizeMode={'cover'} />
                                                            </View>
                                                            <View style={{ paddingLeft: 20 }}>
                                                                <View>
                                                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{item.name}</Text>
                                                                </View>
                                                                <View>
                                                                    <Text style={styles.orderSidebarView.customerNameText}>{'Large / Black'}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                                            <View>
                                                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$' + item.total_price}</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={styles.orderSidebarView.customerNameText}>{'($' + item.total_price + 'x' + item.qty + ')'}</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            }) : null
                                    }
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
                </ContentWithMenu>
            </Wrapper>
        )
    }
}
