import Base from './Base';
import config from '../../config';

export class Orders extends Base {

	static orders() {
		let token = Orders.getAuthToken();
		return Orders.request(config.siteUrl + 'orders', 'GET', {}, { 'Authorization': 'Bearer ' + token });
	}

	static orderDetail(id) {
		let token = Orders.getAuthToken();
		return Orders.request(config.siteUrl + 'order?id='+ id +'', 'GET', {}, { 'Authorization': 'Bearer ' + token });
	}

	static riders() {
		let token = Orders.getAuthToken();
		return Orders.request(config.siteUrl + 'couriers', 'GET', {}, { 'Authorization': 'Bearer ' + token });
	}

	static reports() {
		let token = Orders.getAuthToken();
		return Orders.request(config.siteUrl + 'reports?start_date=01-05-2019', 'GET', {}, { 'Authorization': 'Bearer ' + token });
	}

}