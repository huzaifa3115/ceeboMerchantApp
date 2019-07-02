import Base from './Base';
import config from '../../config';

export class Orders extends Base {

	static orders() {
		let token = Orders.getAuthToken();
		return Orders.request(config.siteUrl + 'orders', 'GET', {}, {'Authorization': 'Bearer ' + token});
	}

}