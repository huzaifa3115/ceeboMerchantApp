import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import { Sidebar } from '../Screens/Sidebar';
import styles from './style';
import { _ } from 'lodash';
import { Wrapper, SideBar, OrderListingCart } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
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
                })
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
                <View style={{ flexDirection: 'row' }}>
                    <SideBar logout={this.__logout.bind(this)} />
                    <View style={{ backgroundColor: '#f5f6f8', height: viewportHeight, width: '95%' }}>
                        {/* header */}
                        <View style={[{ flexDirection: 'row', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }, styles.borderShadowHeader,]}>
                            <View style={[styles.headerFlexView, { borderRightWidth: 0 }]}>
                                <Text style={styles.headerTitle}>{'Riders'}</Text>
                            </View >
                        </View>
                        {/* header */}
                        {/* <View > */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 3.5, borderRightColor: '#f5f6f8', borderRightWidth: 3, paddingBottom: '5%' }}>
                                <ScrollView>
                                    <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                        <View>
                                            <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'All Riders'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <FlatList
                                        extraData={this.state}
                                        data={this.state.allRiders}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
                                                {/* <TouchableOpacity> */}
                                                <View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
                                                    <View>
                                                        <Text style={styles.orderSidebarView.customerNameText}>{item.name}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{item.email}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                                    <View>
                                                        <Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{item.total_orders}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        }
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ flex: 6.5, paddingBottom: '5%' }}>
                            </View>
                        </View>
                        {/* </View> */}
                    </View>
                </View>
            </Wrapper>
        )
    }
}
