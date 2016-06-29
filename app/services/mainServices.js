/***************************
*
* @author: Darko Golubovic
* @date: 29-06-2016
*
***************************/
myApp.service('mainServices', ['$http', '$resource', function($http, $resource){
	return {
		getMusic: function() {
			return $http({
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				method: 'GET',
				url: 'http://demo3291712.mockable.io/tracks'
			});
		},
		
		getLogin: function(email, password) {
			var tokenIdent = {};

			this.tokenIdent = $http.post('http://demo3291712.mockable.io/authenticate',
			 	$.param({email: email, password: password}), {
				headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			});

			return this.tokenIdent;
		},
		
		putLike: function(token) {
			return $resource('http://demo3291712.mockable.io/tracks/like', {}, {
				update: {method:'PUT', params: {trackId: token}}
			});
		}
	};
}]);


