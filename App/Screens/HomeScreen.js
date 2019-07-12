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


export class HomeScreen extends BaseScreen {

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
                </ContentWithMenu>
            </Wrapper>
        )
    }
}
