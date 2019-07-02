import Base from './Base';
import config from '../../config';

export class Guest extends Base {

	static login(email, password) {
		
		let params = {
			email: email, 
			password: password,
		};
		return Guest.request(config.siteUrl + 'login', 'POST', params);
	}

	static forgetPassword(email){
		let params = {
			email : email
		};
		
		return Guest.request(config.siteUrl + 'forgot_password', 'POST', params );	
	}

}