import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const fullWidth = '100%';
module.exports = {

    loginScreenHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8f979d',
        textHeading: {
            color: '#23272a', fontSize: 25, fontFamily: 'OpenSans-Regular'
        }
    },

    primaryBtn: {
        backgroundColor: '#0077ae',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginVertical: 20,
        primaryBtnText: {
            color: '#fff',
            fontSize: RFValue(18),
            fontFamily: 'OpenSans-Bold'
        }
    },

    loginMainContent: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: '20%',
        fields: {
            width: '50%',
            marginVertical: 10,
            textFieldView: {
                flexDirection: 'row',
                borderBottomWidth: 0.3,
                borderBottomColor: '#8f979d',
                textField: {
                    color: '#8f979d',
                    fontSize: 18,
                    width: '90%'
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
            color: '#23272a', fontSize: 25, fontFamily: 'OpenSans-Regular'
        },
        btn: {
            backgroundColor: '#4c575f',
            paddingVertical: 5,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3
        }
    },

    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,

    },

    sidebar: {
        flex: 0.2,
        height: viewportHeight,
        orderItemView: {
            paddingHorizontal: 10,
            paddingVertical: 25,
            //marginBottom : 1,
            borderBottomColor: '#969ca1',
            borderBottomWidth: 0.3,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            text: {
                color: '#000',
                fontSize: 18,
                fontFamily: 'OpenSans-Bold'
            },
            mintText: {
                color: '#969ca1',
                fontSize: 18,
                fontFamily: 'OpenSans-Regular'
            }
        },
        itemView: {
            paddingHorizontal: 10,
            paddingVertical: 20,
            backgroundColor: '#f6f7f7',
            text: {
                color: '#000',
                fontSize: 16,
                fontFamily: 'OpenSans-Bold'
            }
        }
    },

    orderViewTable: {
        marginVertical: 10
    },

    orderMainContent: {
        flex: 0.8,
        padding: 10,
        borderRadius: 5,
        itemsPreview: {
            flexDirection: 'row',
            label: {
                fontSize: 15,
                color: '#a0a6aa',
                fontFamily: 'OpenSans-Bold'
            },
            value: {
                fontSize: 18, color: '#000'
            },
            totalValueFonts: {
                fontFamily: 'OpenSans-Bold', fontSize: 22
            }
        },
        itemsView: {
            flex: 0.3,
            paddingHorizontal: 30,
            paddingVertical: 20,
            label: {
                fontSize: 20, color: '#a0a6aa', fontFamily: 'OpenSans-Regular'
            },
            value: {
                fontSize: 22, color: '#dfe1e2', fontFamily: 'OpenSans-Regular'
            },
            itemNameView: {
                paddingVertical: 3
            }
        },
        header: {
            backgroundColor: '#1d2c36',
            flexDirection: 'row',
            paddingVertical: 15,
            paddingHorizontal: 20,
        }
    },

    drawerImgBgView: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    drawerMenuItem: {
        backgroundColor: '#f7f7f7',
        itemBtn: {
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderBottomColor: '#f7f7f7',
            borderBottomWidth: 3,
            view: {
                flex: 0.7,
                flexDirection: 'row'
            },
            menuLabel: {
                color: '#010101',
                fontSize: 16,
                fontFamily: 'OpenSans-Bold'
            }
        }
    },

    borderShadowHeader: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    headerTitle: {
        color: '#23272a',
        fontSize: RFValue(20),
        fontFamily: 'OpenSans-Regular'
    },
    orderSidebarView: {
        borderBottomWidth: 2,
        borderBottomColor: '#f5f6f8',
        btnView: {
            flex: 0.5,
            alignItems: 'flex-start',
            flexDirection: 'column'
        },
        customerNameText: {
            color: '#a8adb1',
            fontSize: RFValue(18)
        },
        orderId: {
            fontFamily: 'OpenSans-Regular',
            fontSize: RFValue(20),
            color: '#152330'
        }
    },
    reportTableView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#f5f6f8',
        flexDirection: 'row',
        view: {
            padding: 20,
            flex: 0.3
        },
        viewCenter: {
            padding: 20,
            flex: 0.3
        },
        viewLeft: {
            padding: 20,
            flex: 0.2
        },
        headingText: {
            color: '#a8adb1',
            fontSize: 12,
            fontFamily: 'OpenSans-Bold',
            textAlign: 'center'
        },
        headingTextValue: {
            fontFamily: 'OpenSans-Bold',
            fontSize: 30,
            color: '#152330',
            textAlign: 'center'
        },
    },
    reportsTableTh: {
        fontFamily: 'OpenSans-Regular',
        fontSize: RFValue(22),
        color: '#152330',
        textAlign: 'center'
    },
    reportsTableText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: RFValue(22),
        color: '#a8adb1',
        textAlign: 'center'
    },

    navBarItems: {
        // padding : 20,
        paddingVertical: 20
    },
    splashHeader: {
        backgroundColor: '#23BC7D',
        height: viewportHeight,
        alignItems: 'center',
        justifyContent: 'center',
        width: viewportWidth,
    },
    loaderOverlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        // opacity: 0.5,
        backgroundColor: 'black',
        width: viewportWidth,
        height: '100%'
    },

    headerFlexView: {
        borderRightColor: '#f5f6f8',
        borderRightWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        view: {
            backgroundColor: '#ffffff',
            padding: '3%',
            borderRightColor: '#f5f6f8',
            borderRightWidth: 2,
        }
    },

    foodItemView: {
        width: '50%', 
        borderColor: '#f5f6f8', 
        borderWidth: 2, 
        borderBottomWidth: 2, 
        marginVertical: 10,
        subItemText: {
            fontFamily: 'OpenSans-Bold', 
            fontSize: 16, 
            color: '#B4B5B9'
        }
    },

    footerBtnsView : {
        flexDirection : 'row',
        marginHorizontal : '2%',
        marginVertical : '2%',
        btn : {
            flex : 0.5, 
            backgroundColor : '#EDEEF0', 
            paddingHorizontal : 10, 
            paddingVertical : 15, 
            justifyContent : 'center', 
            alignItems : 'center',
            marginHorizontal : 5
        }
    }

}; 