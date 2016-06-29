/***************************
*
* @author: Darko Golubovic
* @date: 29-05-2016
*
***************************/
myApp.factory('mainFactory', ['$q', function($q) {
	return {
		getIdent: function() {
			return localStorage.getItem('userIdent');
		},
		
		setIdent: function(token) {
			localStorage.setItem('userIdent', token);
		},
		
		removeIdent: function() {
			localStorage.removeItem('userIdent');
		}
	};
}]);

