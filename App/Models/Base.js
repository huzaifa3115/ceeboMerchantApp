/**
 * Class for base model.
 *
 * @class  Base (name)
 */


class Base {

	static request(url, type, params, headers) {
		return new Promise(
			function (resolve, reject) {
				let requestParams = {};

				requestParams.method = type || 'GET';
				requestParams.headers = headers || {};
				if (requestParams.method !== 'GET') {
					requestParams.body = JSON.stringify(params) || '{}';
				}
				requestParams.headers['Cache-Control'] = 'no-cache';
				requestParams.headers["Content-Type"] = "application/json";
				console.log(url);
				console.log(requestParams);
				console.log(params);
				fetch(url, requestParams).then((response) => {
					
					return response.json();
				}).then((responseJson) => {
					resolve(responseJson);
				}).catch((error) => {
					reject(error);
				});
			}
		);
	}

	static getAuthToken() {
		console.log(global.userData);
		return global.userData.token;
	}

}

module.exports = Base;