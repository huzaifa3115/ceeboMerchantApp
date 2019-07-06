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


export class FoodItemScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loaded: true,
            foodItems: [],
        }
    }


    __footer() {
        return (
            <View style={styles.footerBtnsView}>
                <TouchableOpacity style={[styles.footerBtnsView.btn]}>
                    <Text style={{ color: '#B4B5B9', fontSize: 18, fontFamily: 'OpenSans-Bold' }}>{'Nevermind'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerBtnsView.btn, { backgroundColor: '#F89200', }]}>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'OpenSans-Bold' }}>{'Orders'}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        const PageLoader = (props) => this.__loader();
        const PageFooter = (props) => this.__footer();
        return (
            <Wrapper footer={this.state.loaded == false ? <PageLoader /> : null}>
                <View style={[{ flexDirection: 'row', backgroundColor: '#ffffff', justifyContent : 'center', alignItems : 'center', paddingVertical : 10 }, styles.borderShadowHeader,]}>
                    <View style={[styles.headerFlexView,{ borderRightWidth : 0 }]}>
                        <Text style={styles.headerTitle}>{'Food Items'}</Text>
                    </View >
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={styles.foodItemView}>
                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView,]}>
                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                <View style={{ paddingHorizontal: 10 }} >
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'Chips'}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'$ 9.36'}</Text>
                                <View style={{ paddingLeft: 10 }}>
                                    <Icon size={RFValue(20)} name={'chevron-right'} color={'#c9c9c9'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foodItemView}>
                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView,]}>
                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                <View style={{ paddingHorizontal: 10 }} >
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'Chips'}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'$ 9.36'}</Text>
                                <View style={{ paddingLeft: 10 }}>
                                    <Icon size={RFValue(20)} name={'chevron-right'} color={'#c9c9c9'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foodItemView}>
                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView,]}>
                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                <View style={{ paddingHorizontal: 10 }} >
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'Chips'}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'$ 9.36'}</Text>
                                <View style={{ paddingLeft: 10 }}>
                                    <Icon size={RFValue(20)} name={'chevron-right'} color={'#c9c9c9'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foodItemView}>
                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView,]}>
                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                <View style={{ paddingHorizontal: 10 }} >
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'Chips'}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'$ 9.36'}</Text>
                                <View style={{ paddingLeft: 10 }}>
                                    <Icon size={RFValue(20)} name={'chevron-right'} color={'#c9c9c9'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.foodItemView}>
                        <TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView,]}>
                            <View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.8 }]}>
                                <View style={{ paddingHorizontal: 10 }} >
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'Chips'}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row' }}>
                                <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 20 }]}>{'$ 9.36'}</Text>
                                <View style={{ paddingLeft: 10 }}>
                                    <Icon size={RFValue(20)} name={'chevron-right'} color={'#c9c9c9'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Wrapper>
        )
    }
}
