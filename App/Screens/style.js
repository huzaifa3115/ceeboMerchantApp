import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const fullWidth = '100%';
module.exports = {
   
    loginScreenHeader : {
        justifyContent : 'center', 
        alignItems : 'center', 
        backgroundColor : '#1d2c36', 
        padding : 15,
        borderBottomWidth : 0.5,
        borderBottomColor :  '#8f979d',
        textHeading : {
            fontSize : 18,
            color : '#fff',
            fontWeight : 'bold'
        }
    },

    primaryBtn : {
        backgroundColor : '#0077ae', 
        justifyContent : 'center', 
        alignItems : 'center',
        borderRadius : 5,
        padding : 10,
        marginVertical : 20,
        primaryBtnText : {
            color : '#fff',
            fontSize : 15
        }
    },

    loginMainContent : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 20,
        fields : {
            width : 300,
            marginVertical : 1,
            textFieldView : {
                borderBottomWidth: 0.3,
                borderBottomColor: '#8f979d',
                textField : {
                    color : '#8f979d',
                   
                }
            }
        }
    },
    header: {
        left: {
            flex: 0.3,
            alignItems: 'flex-start',
            height: 50,
            justifyContent: 'center'
        },
        center: {
            flex: 0.4,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        right: {
            flex: 0.3,
            alignItems: 'flex-end',
            height: 50,
            justifyContent: 'center',
        },
        title: {
            fontSize: 17,
            textAlign: 'center',
            color: '#fff'
        }
    },

};