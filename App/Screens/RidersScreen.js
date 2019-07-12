import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, Switch } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import { Sidebar } from '../Screens/Sidebar';
import styles from './style';
import { _ } from 'lodash';
import { ContentWithMenu, Wrapper, } from '../Components';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Orders } from '../Models/Orders';



export class RidersScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loaded: false,
            allRiders: [],
            currentRider : []
        }
        this.__getRiders();
    }

    __getRiders() {
        this.__activeLoader();

        Orders.riders().then(response => {
            console.log(response);
            if (response.couriers.length > 0) {
                this.setState({
                    allRiders: response.couriers
                },() => this.__updateRiderView(this.state.allRiders[0].id))
            }
            this.__deactiveLoader();
        }).catch(error => {
            this.__deactiveLoader();
        })
    }

    __updateRiderView(orderID) {

        Orders.riderDetail(orderID).then(response => {
            console.log(response);
            if (response.couriers) {
                this.setState({
                    currentRider: response.couriers[0]
                },() => { console.log(this.state.currentRider, 'dfd') })
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
                <ContentWithMenu go={this.__go.bind(this)}>
                    <View style={{ backgroundColor: '#f5f6f8', height: '100%' }}>
                        {/* header */}
                        <View style={[{ flexDirection: 'row', backgroundColor: '#ffffff' }, styles.borderShadowHeader,]}>
                            {/* sidebar */}
                            <View style={[{ flex: 3.5 }, styles.headerFlexView]}>
                                {/* header */}
                                <View style={[styles.headerFlexView.view, { borderRightWidth: 0 }]}>
                                    <Text style={styles.headerTitle}>{'Riders'}</Text>
                                </View>
                            </View >
                            {/* setting view area */}
                            <View style={[{ flex: 6.5 }, styles.headerFlexView]}>
                                {/* header */}
                                <View style={[styles.headerFlexView.view, { borderRightWidth: 0, alignSelf: 'flex-end' }]}>
                                    <TouchableOpacity>
                                        <Text style={styles.headerTitle}>{'Modify'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View >
                        </View>
                        {/* header */}
                        {/* <View > */}
                        <View style={{ flex: 1, flexDirection: 'row', borderLeftColor: '#8f979d', borderLeftWidth: 0.5 }}>
                            <View style={{ flex: 3.5, borderRightColor: '#f5f6f8', borderRightWidth: 3, paddingBottom: '5%' }}>
                                <ScrollView>
                                    <View style={{ padding: 10 }} >
                                        <Text style={{ color: '#a8adb1', fontSize: 20 }}>{'Recent Riders'}</Text>
                                    </View>
                                    <FlatList
                                        extraData={this.state}
                                        data={this.state.allRiders}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]} onPress={ () => this.__updateRiderView(item.id) }>
                                                {/* <TouchableOpacity> */}
                                                <View style={{ flex: 0.1 }}>
                                                    <Image source={ { uri : item.img } } style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode={'cover'} />
                                                </View>
                                                <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView, { flex: 0.9, marginLeft: '10%' }]}>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{item.name}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.orderSidebarView.customerNameText}>{item.email}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        }
                                    />

                                </ScrollView>
                            </View>
                            <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                                <ScrollView>
                                    {/* content */}
                                    <View style={{ borderBottomColor: '#f5f6f8', borderBottomWidth: 4 }}>
                                        <Image source={require('../../assets/img/order_dummy_bg.png')} style={{ width: '100%', height: 150 }} />
                                        <View style={{ position: 'absolute', bottom: 0, paddingHorizontal: 15, paddingBottom: 15 }}>
                                            <Text style={[{ fontSize: RFValue(35) }, styles.ridersDetailBanner]}>{this.state.currentRider.name}</Text>
                                            <Text style={[{ fontSize: RFValue(25) }, styles.ridersDetailBanner]}>{'August 2019'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#fff', marginVertical: 10, borderWidth: 0.5, borderColor: '#8f979d' }}>
                                        <View>
                                            <Text style={styles.orderSidebarView.customerNameText}>{'Customer'}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                                            <View style={{ flex: 0.6, alignItems: 'flex-start', flexDirection: 'row' }}>
                                                <View>
                                                    <Text style={[{ fontSize: RFValue(20) }, styles.ridersDetailBanner]}>{'Email'}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.4, alignItems: 'flex-end', flexDirection: 'row' }}>
                                                <Text style={[{ fontSize: RFValue(20), paddingHorizontal: '3%' }, styles.ridersDetailBanner]}>{this.state.currentRider.email}</Text>
                                                <Icon name={'mail'} color={'#0077ae'} size={25} />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#fff', marginVertical: 10, borderWidth: 0.5, borderColor: '#8f979d' }}>
                                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                                            <View style={{ flex: 0.9, alignItems: 'flex-start', flexDirection: 'row' }}>
                                                <View>
                                                    <Text style={[{ fontSize: RFValue(20) }, styles.ridersDetailBanner]}>{'Customer Information'}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.1, alignItems: 'flex-end', flexDirection: 'row' }}>
                                                <Icon name={'chevron-down'} color={'#0077ae'} size={25} />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 15 }}>
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ color: '#a8adb1', fontSize: 20 }}>{'Recent Orders'}</Text>
                                        </View>
                                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', paddingHorizontal: 5 }]}>
                                            {/* <TouchableOpacity> */}
                                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                                <View>
                                                    <View>
                                                        <Text style={styles.orderSidebarView.customerNameText}>{'oggi'}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#11132'}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                                <View>
                                                    <Text style={styles.orderSidebarView.customerNameText}>{'17:30'}</Text>
                                                </View>
                                                <View>
                                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 2, borderBottomColor: '#f5f6f8', paddingHorizontal: 5 }]}>
                                            {/* <TouchableOpacity> */}
                                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                                <View>
                                                    <View>
                                                        <Text style={styles.orderSidebarView.customerNameText}>{'oggi'}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#11132'}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                                <View>
                                                    <Text style={styles.orderSidebarView.customerNameText}>{'17:30'}</Text>
                                                </View>
                                                <View>
                                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$180.00'}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 15, marginVertical: 10 }}>
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ color: '#a8adb1', fontSize: 20 }}>{'Options Riders'}</Text>
                                        </View>
                                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 0, borderBottomColor: '#f5f6f8', paddingHorizontal: 5 }]}>
                                            {/* <TouchableOpacity> */}
                                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                                <View>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'Marketing'}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                                <Switch thumbTintColor="#fff" trackColor={{ true: '#0077ae', false: 'grey' }} value={true} style={{ fontSize: 20 }} />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, { borderBottomWidth: 0, borderBottomColor: '#f5f6f8', paddingHorizontal: 5 }]}>
                                            {/* <TouchableOpacity> */}
                                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.5, alignItems: 'flex-start', }]}>
                                                <View>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'Marketing'}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                                <Switch thumbTintColor="#fff" trackColor={{ true: '#0077ae', false: 'grey' }} value={true} style={{ fontSize: 20 }} />
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    {/* content */}
                                </ScrollView>
                            </View>
                        </View>
                        {/* </View> */}
                    </View>
                </ContentWithMenu>
            </Wrapper>

        )
    }
}
