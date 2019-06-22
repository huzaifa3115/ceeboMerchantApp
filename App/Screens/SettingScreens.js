import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image,Dimensions,Switch } from 'react-native';
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



export class SettingScreens extends BaseScreen {

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
            <View style={ { backgroundColor : '#f5f6f8', height : viewportHeight  } }>
                <View style={ { flexDirection : 'row', borderBottomColor : '#f5f6f8', borderBottomWidth : 4 } }>
                    {/* sidebar */}
                    <View style={ { flex :  3.5, borderRightColor : '#f5f6f8', borderRightWidth : 3, height : viewportHeight } }>
                        {/* header */}
                        <View style={ [{ backgroundColor : '#ffffff', padding : 20, },styles.borderShadowHeader] }>
                            <View style={ { flexDirection : 'row' } }>
                                <View style={ { flex : 0.5 } }>
                                    <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()}>
                                        <Icon name={'menu'} size={27} color={'blue'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={ { flex : 0.5 } }>
                                    <Text style={ { color : '#23272a', fontSize : 25, fontFamily : 'OpenSans-Regular' } }>{'Store'}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={ { padding : 10 } } />
                        <View>
                            <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                            {/* <TouchableOpacity> */}
                                <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                    <View >
                                        <Icon size={ 23 } name={ 'home' } color={ 'blue' }  />
                                    </View>
                                    <View style={ { paddingHorizontal : 10 } } >
                                        <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Hardware'}</Text>
                                    </View>
                                </View>
                                <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                    <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' }  />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                            {/* <TouchableOpacity> */}
                                <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                    <View >
                                        <Icon size={ 23 } name={ 'clock' } color={ 'blue' }  />
                                    </View>
                                    <View style={ { paddingHorizontal : 10 } } >
                                        <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Hours'}</Text>
                                    </View>
                                </View>
                                <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                    <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' }  />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                            {/* <TouchableOpacity> */}
                                <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                    <View >
                                        <Icon size={ 23 } name={ 'settings' } color={ 'blue' }  />
                                    </View>
                                    <View style={ { paddingHorizontal : 10 } } >
                                        <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Settings'}</Text>
                                    </View>
                                </View>
                                <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                    <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' }  />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                            {/* <TouchableOpacity> */}
                                <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                    <View >
                                        <Icon size={ 23 } name={ 'home' } color={ 'blue' }  />
                                    </View>
                                    <View style={ { paddingHorizontal : 10 } } >
                                        <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Courriers'}</Text>
                                    </View>
                                </View>
                                <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                    <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' }  />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                            {/* <TouchableOpacity> */}
                                <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                    <View >
                                        <FontAwesome size={ 23 } name={ 'life-ring' } color={ 'blue' }  />
                                    </View>
                                    <View style={ { paddingHorizontal : 10 } } >
                                        <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Support'}</Text>
                                    </View>
                                </View>
                                <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                    <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' }  />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                            {/* <TouchableOpacity> */}
                                <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                    <View >
                                        <Icon size={ 23 } name={ 'bell' } color={ 'blue' }  />
                                    </View>
                                    <View style={ { paddingHorizontal : 10 } } >
                                        <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Open Ceebo web (this is a link to open website'}</Text>
                                    </View>
                                </View>
                                <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                    <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' }  />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View >
                    {/* setting view area */}
                    <View style={ { flex :  6.5 } }>
                        <View style={ [{ backgroundColor : '#ffffff', padding : 20, borderRightColor : '#f5f6f8', borderRightWidth : 2 },styles.borderShadowHeader] }>
                            <View style={ { justifyContent : 'center', alignItems : 'center' } }>
                                <Text style={ { color : '#23272a', fontSize : 25, fontFamily : 'OpenSans-Regular' } }>{'Settings'}</Text>
                            </View>
                        </View>
                        <View style={ { padding : 10 } } />
                        {/* content */}
                        <View style={ { flex : 1 } }>
                            <ScrollView>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Marked orders as fullfilled'}</Text>
                                        </View>
                                    </View>
                                    <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                        <Switch  thumbTintColor="#fff" trackColor={ { true: 'blue', false: 'grey' } } value={true} style={ { fontSize : 20 } } />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Use audio jack for card reader'}</Text>
                                        </View>
                                    </View>
                                    <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                        <Switch  thumbTintColor="#fff" trackColor={ { true: 'blue', false: 'grey' } } value={true} style={ { fontSize : 20 } } />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Auto-lock Screen'}</Text>
                                        </View>
                                    </View>
                                    <View style={ { flex : 0.1, alignItems : 'flex-end', flexDirection : 'row'  } }>
                                        <Text style={ { color : '#c9c9c9', fontSize : 17 } }>{'Never'}</Text>
                                        <Icon size={ 23 } name={ 'chevron-right' } color={ '#c9c9c9' } />
                                    </View>
                                </TouchableOpacity>
                                <View style={ { padding : 10 } }>
                                    <Text style={ { color : '#a8adb1', fontSize : 16 } }>{'Receipt settings'}</Text>
                                </View>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8',} ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Customize receipts'}</Text>
                                            <Text style={ { color : '#a8adb1', fontSize : 18 } }>{'Edit the content in your printed receipt'}</Text>
                                        </View>
                                    </View>
                                    <View style={ { flex : 0.1, alignItems : 'flex-end', flexDirection : 'row', justifyContent : 'center', alignItems : 'center'  } }>
                                        <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' } />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8',} ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18 }] }>{'Always Print receipts'}</Text>
                                            <Text style={ { color : '#a8adb1', fontSize : 18 } }>{'Activate automatic receipt printing on POS orders'}</Text>
                                        </View>
                                    </View>
                                    <View style={ { flex : 0.1, alignItems : 'flex-end', flexDirection : 'row', justifyContent : 'center', alignItems : 'center'  } }>
                                        <Icon size={ 25 } name={ 'chevron-right' } color={ '#c9c9c9' } />
                                    </View>
                                </TouchableOpacity>
                                <View style={ { padding : 10 } }>
                                    <Text style={ { color : '#a8adb1', fontSize : 16 } }>{'Tax Calculations - Complete all steps for accuracy'}</Text>
                                </View>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8',} ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18, color : 'blue' }] }>{'Set Taxable Location'}</Text>
                                            <Text style={ { color : '#a8adb1', fontSize : 18 } }>{'Set your current location to get the most accurate tax rates'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.drawerMenuItem.itemBtn ,{ borderBottomWidth : 2 ,borderBottomColor :  '#f5f6f8' } ] }>
                                {/* <TouchableOpacity> */}
                                    <View style={ [styles.drawerMenuItem.itemBtn.view,{ flex : 0.9 }] }>
                                        <View >
                                            <Text style={ [styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily : 'OpenSans-Regular', fontSize : 18, color : 'blue'  }] }>{'Set taxable shipping zone'}</Text>
                                            <Text style={ { color : '#a8adb1', fontSize : 18 } }>{'Before Delivery and shipping zone to get the most accurate tax rates for in stores deliveries'}</Text>
                                        </View>
                                    </View>
                                    <View style={ { flex : 0.1, alignItems : 'flex-end'  } }>
                                        <Switch  thumbTintColor="#fff" trackColor={ { true: 'blue', false: 'grey' } } value={true} style={ { fontSize : 20 } } />
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        {/* content */}
                        
                    </View>
                </View>
            </View>
        )
    }
}
