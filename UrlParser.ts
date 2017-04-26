/**
 * Semih ERDOGAN <semih.erdogan@vidizayn.com>
 */

class UrlParser {

	private wl;

	constructor(){
		this.wl = window.location;
	}

	segments(){
		let _split = this.wl.pathname.split('/').filter(function (i) {
			return i !== '';
		});
		_split.unshift('/');
		return _split;
	}

	parameters(){
		let query = this.wl.search.substr(1);
		if (query === '')
			return;

		let result = {};
		query.split('&').forEach(function (i) {
			let item = i.split('=');
			result[item[0]] = decodeURIComponent(item[1]);
		});
		return result;
	}

	segment(i: number){
		try {
			return this.segments()[i];
		}
		catch (e) {
			return null;
		}
	}
	
	parameter(p: string){
		try {
			return this.parameters()[p];
		}
		catch (e) {
			return null;
		}
	}

	uriString(){
		return this.segments().join('/').substring(1);
	}
}