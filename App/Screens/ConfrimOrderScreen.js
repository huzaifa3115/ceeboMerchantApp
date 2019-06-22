import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image,Dimensions } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import { Sidebar } from '../Screens/Sidebar';
import * as Icon from '../Utils/Icons/index';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, } from '../Components';
import { ScrollView } from 'react-native-gesture-handler';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



export class ConfrimOrderScreen extends BaseScreen {

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
            <View style={ { backgroundColor : '#edefef', flex : 1 } }>
                {/* <View style={ styles.loginScreenHeader }>
                    <View>
                        <Text style={ styles.loginScreenHeader.textHeading }>{'RIDERS POS'}</Text>
                        <Icon.Home/>
                    </View>
                </View> */}
                <Header props={ this.props } />
                <View style={ { flexDirection  : 'row' } }>
                    <Sidebar />
                    <View style={ styles.orderMainContent }>
                        <View style={ styles.orderMainContent.header }>
                            <View style={ styles.orderMainContent.itemsView }>
                                <View>
                                    <Text style={ styles.orderMainContent.itemsView.label }>{'Items'}</Text>
                                </View>
                                <View>
                                    <Text style={ styles.orderMainContent.itemsView.value }>{'4 Items'}</Text>
                                </View>
                            </View>
                            <View style={ styles.orderMainContent.itemsView }>
                                <View>
                                    <Text style={ styles.orderMainContent.itemsView.label }>{'Predicted Adjust'}</Text>
                                </View>
                                <View style={ { flexDirection : 'row', marginTop : 5 } }>
                                    <View>
                                        <Text style={ styles.orderMainContent.itemsView.value }>{'27 min'}</Text>
                                    </View>
                                    <View style={ { paddingLeft : 20 } }>
                                        <TouchableOpacity style={ [styles.header.btn,{ paddingHorizontal : 20 }] }><Text style={ { fontSize : 18, color : '#dfe1e2' } }>{'Adjust'}</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={ styles.orderMainContent.itemsView }>
                                <View>
                                    <Text style={ styles.orderMainContent.itemsView.label }>{'Customer'}</Text>
                                </View>
                                <View>
                                    <Text style={ styles.orderMainContent.itemsView.value }>{'Vitali'}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={ {  backgroundColor : '#fff' } }>
                            <View style={ styles.orderMainContent.itemsPreview }>
                                <View style={ { flex : 0.1, alignItems : 'flex-start' } }></View>
                                <View style={ { flex : 0.9 } }>
                                   <View style={ { borderLeftWidth : 3, borderLeftColor : '#eceeee',borderBottomWidth : 3, borderBottomColor : '#eceeee', paddingHorizontal : 20 } }>
                                        {/* table */}
                                        <View style={ styles.orderViewTable }>
                                            <View>
                                                <Text style={ styles.orderMainContent.itemsPreview.label }>{'Add Ons'}</Text> 
                                            </View>
                                            <View style={ { flexDirection : 'row' } }>
                                                <View style={ { flex : 0.7, alignItems : "flex-start" } }>
                                                    <View style={ { marginTop : 10 } }>
                                                        <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                            <Text style={ styles.orderMainContent.itemsPreview.value }>{'Cheese'}</Text> 
                                                        </View>
                                                        <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                            <Text style={ styles.orderMainContent.itemsPreview.value }>{'Guamacole'}</Text> 
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={ { flex : 0.3  } }>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                    </View>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={ styles.orderViewTable }>
                                            <View>
                                                <Text style={ styles.orderMainContent.itemsPreview.label }>{'Add Ons'}</Text> 
                                            </View>
                                            <View style={ { flexDirection : 'row' } }>
                                                <View style={ { flex : 0.7, alignItems : "flex-start" } }>
                                                    <View style={ { marginTop : 10 } }>
                                                        <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                            <Text style={ styles.orderMainContent.itemsPreview.value }>{'Cheese'}</Text> 
                                                        </View>
                                                        <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                            <Text style={ styles.orderMainContent.itemsPreview.value }>{'Guamacole'}</Text> 
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={ { flex : 0.3  } }>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                    </View>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={ styles.orderViewTable }>
                                            <View>
                                                <Text style={ styles.orderMainContent.itemsPreview.label }>{'Add Ons'}</Text> 
                                            </View>
                                            <View style={ { flexDirection : 'row' } }>
                                                <View style={ { flex : 0.7, alignItems : "flex-start" } }>
                                                    <View style={ { marginTop : 10 } }>
                                                        <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                            <Text style={ styles.orderMainContent.itemsPreview.value }>{'Cheese'}</Text> 
                                                        </View>
                                                        <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                            <Text style={ styles.orderMainContent.itemsPreview.value }>{'Guamacole'}</Text> 
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={ { flex : 0.3  } }>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                    </View>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        {/* table */}
                                   </View>
                                    <View style={ { paddingHorizontal : 20,paddingBottom : 5 } }>
                                        <View style={ { flexDirection : 'row' } }>
                                            <View style={ { flex : 0.7, alignItems : "flex-start" } }>
                                                <View style={ { marginTop : 10 } }>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'SubTotal'}</Text> 
                                                    </View>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'Tax'}</Text> 
                                                    </View>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ styles.orderMainContent.itemsPreview.value }>{'Fees'}</Text> 
                                                    </View>
                                                    <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                        <Text style={ [ styles.orderMainContent.itemsPreview.value, styles.orderMainContent.itemsPreview.totalValueFonts ] }>{'Total: Paid in Full'}</Text> 
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={ { flex : 0.3  } }>
                                                <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                    <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                </View>
                                                <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                    <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                </View>
                                                <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                    <Text style={ styles.orderMainContent.itemsPreview.value }>{'$0.99'}</Text> 
                                                </View>
                                                <View style={ styles.orderMainContent.itemsView.itemNameView }>
                                                    <Text style={ [styles.orderMainContent.itemsPreview.value, styles.orderMainContent.itemsPreview.totalValueFonts] }>{'$0.99'}</Text> 
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                        <View style={ { backgroundColor : '#edefef', borderTopColor : '#edefef', borderTopWidth : 5 } }>
                            <View style={ { backgroundColor : '#fff', } }>
                                <View style={ { flexDirection : 'row' } }>
                                    <View style={ { flex : 0.3, padding : 10 } }>
                                        <TouchableOpacity style={ { backgroundColor : '#edeeef', padding : 20, justifyContent : 'center', alignItems : 'center' } }>
                                            <Text style={ { color : '#778086', fontFamily : 'OpenSans-Bold', fontSize : 18 } }>{'Issue'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ { flex : 0.7, padding : 10 } }>
                                        <TouchableOpacity style={ { backgroundColor : '#00ae53', padding : 20, justifyContent : 'center', alignItems : 'center' } }>
                                            <Text style={ { color : '#fff', fontFamily : 'OpenSans-Bold', fontSize : 18 } }>{'Confirm Order - 27 min'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    
                </View>
            </View>
        )
    }
}
