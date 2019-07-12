import React from 'react';
import {
	View,
	ScrollView,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	Image,
	Modal,
	Switch,
	Picker,
	Alert,
	Dimensions
} from 'react-native';
import { _ } from 'lodash';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Helper from '../Utils/Helper';
import styles from '../Screens/style';
import { StackActions, NavigationActions } from 'react-navigation';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');




export class Header extends React.Component {
	render() {
		let style = this.props.style;
		let props = this.props.props
		return (
			<View style={[{ backgroundColor: '#fff', flexDirection: 'row', height: 60 }, styles.borderShadowHeader]}>
				<View style={styles.header.left}>
					<View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
						<MenuIcon props={props} />
						<View style={{ paddingLeft: 10 }}>
							<Text style={styles.header.title}>{'Merchant'}</Text>
						</View>

					</View>
				</View>
				<View style={styles.header.center}></View>
				<View style={styles.header.right}>
					<View style={{ paddingHorizontal: 10 }}>
						<TouchableOpacity style={styles.header.btn}>
							<Text style={{ color: '#fff', fontSize: 16, fontFamily: 'OpenSans-Bold' }}>{'Receiving New Orders'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export class Loader extends React.Component {
	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}
}

export class Wrapper extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, zIndex: 99, }}>
				<ScrollView style={{ backgroundColor: '#fff', flex: 1 }} refreshControl={this.props.refreshControl}>
					{this.props.children}
				</ScrollView>
				{this.props.footer}
			</View>
		);
	}
}

export class ContentWithMenu extends React.Component {
	render() {
		return (
			<View style={{ flexDirection: 'row' }}>
				<SideBar go={this.props.go} />
				<View style={{ backgroundColor: '#f5f6f8', height: viewportHeight, width: '95%' }}>
					{this.props.children}
				</View>
			</View>
		)
	}
}

export class SettingsMenu extends React.Component {
	
	__logoutConfirm() {
        Alert.alert('Confirm', 'Are you sure you want to log out?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Logout', onPress: () => this.props.logout() },
        ]);
	}
	
	render() {
		return (
			<View style={{ flex: 3.5, borderRightColor: '#f5f6f8', borderRightWidth: 3, paddingBottom: '5%' }}>
				<ScrollView>
					<TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]} onPress={ () => this.props.go('Support') }>
						{/* <TouchableOpacity> */}
						<View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
							<View >
								<Icon size={RFValue(23)} name={'home'} color={'#0077ae'} />
							</View>
							<View style={{ paddingHorizontal: 10 }} >
								<Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Hardware'}</Text>
							</View>
						</View>
						<View style={{ flex: 0.3, alignItems: 'flex-end' }}>
							<Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]} onPress={ () => this.props.go('Hardware') }>
						{/* <TouchableOpacity> */}
						<View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
							<View >
								<FontAwesome size={RFValue(23)} name={'life-ring'} color={'#0077ae'} />
							</View>
							<View style={{ paddingHorizontal: 10 }} >
								<Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Support'}</Text>
							</View>
						</View>
						<View style={{ flex: 0.3, alignItems: 'flex-end' }}>
							<Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
						{/* <TouchableOpacity> */}
						<View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
							<View >
								<Icon size={RFValue(23)} name={'bell'} color={'#0077ae'} />
							</View>
							<View style={{ paddingHorizontal: 10 }} >
								<Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Regular', fontSize: 18 }]}>{'Open Ceebo web (this is a link to open website'}</Text>
							</View>
						</View>
						<View style={{ flex: 0.3, alignItems: 'flex-end' }}>
							<Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]} onPress={ () => this.__logoutConfirm() }>
						{/* <TouchableOpacity> */}
						<View style={[styles.drawerMenuItem.itemBtn.view, { flex: 0.7 }]}>
							<View >
								<Icon size={RFValue(23)} name={'log-out'} color={'red'} />
							</View>
							<View style={{ paddingHorizontal: 10 }} >
								<Text style={[styles.drawerMenuItem.itemBtn.menuLabel, { fontFamily: 'OpenSans-Bold', fontSize: 18, color: 'red' }]}>{'logout'}</Text>
							</View>
						</View>
						<View style={{ flex: 0.3, alignItems: 'flex-end' }}>
							<Icon size={RFValue(30)} name={'chevron-right'} color={'#c9c9c9'} />
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		)
	}
}

export class SideBar extends React.Component {

	render() {
		return (
			<View style={{ backgroundColor: '#000', width: '5%', justifyContent: 'center', alignItems: 'center' }}>
				<View style={{ flex: 1, zIndex: 99, paddingVertical: 10 }}>
					<ScrollView style={{ flex: 1 }}>
						<TouchableOpacity style={styles.navBarItems} onPress={() => this.props.go('Home')}>
							<Icon size={RFValue(20)} name={'home'} color={'#fff'} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.navBarItems} onPress={() => this.props.go('Order')}>
							<Icon size={RFValue(20)} name={'inbox'} color={'#fff'}  />
						</TouchableOpacity>
						<TouchableOpacity style={styles.navBarItems} onPress={() => this.props.go('Report')}>
							<Icon size={RFValue(20)} name={'grid'} color={'#fff'}  />
						</TouchableOpacity>
						<TouchableOpacity style={styles.navBarItems} onPress={() => this.props.go('Riders')}>
							<Icon size={RFValue(20)} name={'truck'} color={'#fff'} />
						</TouchableOpacity>
					</ScrollView>
					<View style={{ paddingBottom: '5%' }}>
						<TouchableOpacity style={styles.navBarItems} onPress={() => this.props.logout}>
							<Icon size={RFValue(20)} name={'settings'} color={'#fff'} onPress={() => this.props.go('Settings')} />
						</TouchableOpacity>
					</View>
					{/* <TouchableOpacity style={ styles.navBarItems }>
                            <Icon name="home" color="#fff" size={ 30 } />
                        </TouchableOpacity> */}
				</View>
			</View>
		)
	}
}

export class OrderListingCart extends React.Component {
	render() {
		let item = this.props.data;
		return (
			<TouchableOpacity onPress={() => this.props.updateView(item.id)} style={[styles.drawerMenuItem.itemBtn, styles.orderSidebarView]}>
				{/* <TouchableOpacity> */}
				<View style={[styles.drawerMenuItem.itemBtn.view, styles.orderSidebarView.btnView]}>
					<View>
						<Text style={styles.orderSidebarView.customerNameText}>{item.customer_name}</Text>
					</View>
					<View>
						<Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'#' + item.id}</Text>
					</View>
				</View>
				<View style={{ flex: 0.5, alignItems: 'flex-end' }}>
					<View>
						<Text style={styles.orderSidebarView.customerNameText}>{'3:52pm'}</Text>
					</View>
					<View>
						<Text style={[styles.drawerMenuItem.itemBtn.menuLabel, styles.orderSidebarView.orderId]}>{'$' + item.total}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

export class MenuIcon extends React.Component {
	render() {
		let props = this.props.props;
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.openDrawer()}  >
				<Icon color={'#0077ae'} name="menu" size={25} />
			</TouchableOpacity>
		);
	}
}

export class CTouchable extends React.Component {

	get iosTouchable() {
		return (
			<TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
				{this.props.children}
			</TouchableOpacity>
		);
	}

	get androidTouchable() {
		return (
			<TouchableNativeFeedback onPress={this.props.onPress}>
				<View style={this.props.style}>{this.props.children}</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		return (
			<View>
				{Platform.OS === 'ios' || Platform.Version <= 21 ? this.iosTouchable : this.androidTouchable}
			</View>
		);
	}

}

export class clearView extends React.Component {

	render() {
		let space = this.props.space;
		return (
			<View style={{ padding: space }} />
		)
	}
}

let inlineStyles = {
	header: {
		backgroundColor: '#ffffff',
		height: 200,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		// shadowOpacity: 0.18,
		// shadowRadius: 1.00,
		// elevation: 1,
		flexDirection: 'row',
		flex: 1,
		paddingLeft: 5,
		paddingRight: 5,
		borderBottomWidth: 0,
		borderBottomColor: '#d9d9d9'
	},
	FloatingButtonStyle: {
		backgroundColor: '#23BC7D',
		padding: 10,
		borderRadius: 50,
		color: '#fff'
	},
	TouchableOpacityStyle: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 10,
		bottom: 30,
	},
};