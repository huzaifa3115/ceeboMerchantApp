import React from 'react';
import { View, Alert, Text, TouchableOpacity, TextInput, PermissionsAndroid, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Feather";
import { BaseScreen } from '../Screens/BaseScreen';
import styles from './style';
import { _ } from 'lodash';
import { CTouchable, Header, Wrapper, MenuIcon } from '../Components';
import AsyncStorage from '@react-native-community/async-storage';

export class SplashScreen extends BaseScreen {

    constructor(props) {
        super(props);

        
        // requestLocationPermission();
        // async function requestLocationPermission() {
        //     try {
        //         const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //             // console.log('You can use the camera');
        //         } else {
        //             //console.log('Camera permission denied');
        //         }
        //     } catch (err) {
        //         console.warn(err);
        //     }
        // }
  
        setTimeout(() => {
            
            AsyncStorage.getItem('user').then(response => {

                try {
                    let responseJson = JSON.parse(response);
                    if (responseJson) {
                        if (responseJson.id !== undefined && responseJson.id !== 0) {
                            global.userData = responseJson;
                            global.isUserLoggedIn = true;
                            this.__goAndReset('Home');
                        }
                        
                    } else {
                        this.__goAndReset('Login');
                    }
                } catch (e) {
                }

            });


        }, 1000);

    }

    

    render() {
        return (
            <Wrapper>
                <View style={styles.splashHeader} >
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{'Wellcome To Ceebo Merchant'}</Text>
                </View>
            </Wrapper>
        )
    }
}

// render () {
//     const spin = this.spinValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '360deg']
//     })
//     return (
//       <View style={styles.container}>
//         <Animated.Image
//           style={{
//             width: 227,
//             height: 200,
//             transform: [{rotate: spin}] }}
//             source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
//         />
//       </View>
//     )
//   }