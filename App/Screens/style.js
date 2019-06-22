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
            fontSize : 18,
            fontFamily : 'OpenSans-Bold'
        }
    },

    loginMainContent : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 20,
        fields : {
            width : 500,
            marginVertical : 10,
            textFieldView : {
                borderBottomWidth: 0.3,
                borderBottomColor: '#8f979d',
                textField : {
                    color : '#8f979d',
                    fontSize : 18
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
            fontSize: 18,
            //textAlign: 'center',
            color: '#fff',
            fontFamily : 'OpenSans-Bold'
        },
        btn : {
            backgroundColor : '#4c575f',
            paddingVertical : 5,
            paddingHorizontal : 10,
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 3
        }
    },

    imageView : {
        justifyContent : 'center', 
        alignItems :'center',
        marginVertical : 20,

    },
    
    sidebar : {
        flex : 0.2, 
        height : viewportHeight,
        orderItemView : {
            paddingHorizontal : 10,
            paddingVertical : 25,
            //marginBottom : 1,
            borderBottomColor : '#969ca1',
            borderBottomWidth : 0.3,
            flexDirection : 'row',
            backgroundColor : '#ffffff',
            text : {
                color : '#000',
                fontSize : 18,
                fontFamily : 'OpenSans-Bold'
            },
            mintText : {
                color : '#969ca1',
                fontSize : 18,
                fontFamily : 'OpenSans-Regular'
            }
        },
        itemView : {
            paddingHorizontal : 10,
            paddingVertical : 20,
            backgroundColor : '#f6f7f7',
            text : {
                color : '#000',
                fontSize : 16,
                fontFamily : 'OpenSans-Bold'
            }
        }
    },

    orderViewTable : {
        marginVertical : 10
    },

    orderMainContent : {
        flex : 0.8,
        padding :  10,
        borderRadius : 5,
        itemsPreview : {
            flexDirection : 'row',
            label : {
                fontSize : 15, 
                color : '#a0a6aa',
                fontFamily : 'OpenSans-Bold' 
            },
            value : {
                fontSize : 18, color : '#000'
            },
            totalValueFonts : {
                fontFamily : 'OpenSans-Bold', fontSize : 22
            }
        },
        itemsView : {
            flex : 0.3, 
            paddingHorizontal : 30,
            paddingVertical : 20,
            label : {
                fontSize : 20, color : '#a0a6aa',fontFamily : 'OpenSans-Regular' 
            },
            value : {
                fontSize : 22, color : '#dfe1e2',fontFamily : 'OpenSans-Regular' 
            },
            itemNameView : {
                paddingVertical : 3
            }
        },
        header : {
            backgroundColor : '#1d2c36',
            flexDirection  : 'row',
            paddingVertical : 15,
            paddingHorizontal : 20,
        }
    },

    drawerImgBgView : {
        position : 'absolute', 
        bottom : 0, 
        paddingHorizontal : 10, 
        paddingVertical : 10
    },

    drawerMenuItem : {
        backgroundColor : '#f7f7f7',
        itemBtn : {
            flexDirection : 'row', 
            backgroundColor : '#ffffff', 
            paddingHorizontal : 20,
            paddingVertical : 20, 
            borderBottomColor : '#f7f7f7', 
            borderBottomWidth : 3,
            view : {
                flex : 0.7, 
                flexDirection  :'row'
            },
            menuLabel : {
                color : '#010101', 
                fontSize : 16, 
                fontFamily : 'OpenSans-Bold'
            }
        }
    },

    borderShadowHeader : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }


}; 