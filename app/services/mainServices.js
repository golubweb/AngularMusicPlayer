/***************************
*
* @author: Darko Golubovic
* @date: 27-06-2016
*
***************************/
myApp.service('mainServices', ['$http', function($http){
	return {
		getData: function(url) {

			return $http({
				method: 'GET',
				url: url
			});
		}
	};
}]);


