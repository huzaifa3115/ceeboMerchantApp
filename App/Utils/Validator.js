import {_} from 'lodash';

export class Validator {

	static isEmail(value) {
		let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    	return regEx.test(String(value).toLowerCase());
	}

	static isEmpty(value) {
		return _.trim(value) == '';
	}

	static isMatched(value1, value2) {
		return value1 === value2;
	}

	static minError(value, length) {
		return value.length < length;
	}
}