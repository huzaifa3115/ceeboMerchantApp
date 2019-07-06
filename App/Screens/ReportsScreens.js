import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image, Dimensions, Switch, FlatList } from 'react-native';
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
import { Orders } from '../Models/Orders';



export class ReportsScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            reports: [],
        }

        this.__getReports();
    }

    __getReports() {
        this.__activeLoader();

        Orders.reports().then(response => {
            console.log(response);
            if (response.data.length > 0) {
                this.setState({
                    reports: response.data
                })
            }
            this.__deactiveLoader();
        }).catch(error => {
            this.__deactiveLoader();
        })
    }


    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={[{ flexDirection: 'row', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }, styles.borderShadowHeader,]}>
                    <View style={[styles.headerFlexView, { borderRightWidth: 0 }]}>
                        <Text style={styles.headerTitle}>{'Reports'}</Text>
                    </View >
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
                    <FlatList
                        extraData={this.state}
                        data={this.state.reports}
                        renderItem={({ item }) =>
                            <View style={styles.reportTableView}>
                                <View style={styles.reportTableView.view}>
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{item.date}</Text>
                                </View>
                                <View style={styles.reportTableView.viewLeft}>
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableTh]}>{item.total_orders}</Text>
                                </View>
                                <View style={styles.reportTableView.viewLeft}>
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{'Vitali'}</Text>
                                </View>
                                <View style={styles.reportTableView.view}>
                                    <Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.reportsTableText]}>{item.total_earns}</Text>
                                </View>
                            </View>
                        }
                    />

                    {/* content */}
                </ScrollView>
            </View>
        )
    }
}
