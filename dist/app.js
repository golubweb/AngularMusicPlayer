/***************************
*
* @author: Darko Golubovic
* @date: 27-06-2016
*
***************************/
var myApp = angular.module('myApp', ['ngRoute']);


/***************************
*
* @author: Darko Golubovic
* @date: 19-06-2016
*
***************************/
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {templateUrl: 'app/templates/music-Player.tpl.html', controller: 'mainCtrl'}).
		otherwise({redirectTo: '/'});
}]);


/***************************
*
* @author: Darko Golubovic
* @date: 27-06-2016
*
***************************/
myApp.controller('mainCtrl', ['$scope', function($scope, mainServices, mainFactory){
	
}]);

/***************************
*
* @author: Darko Golubovic
* @date: 27-05-2016
*
***************************/
myApp.directive('div', ['$templateRequest', function($templateRequest) {
	return {
		restrict: 'E',
		scope: true,
		link: function (scope, element, attr) {
			
		}
	};
}]);


/***************************
*
* @author: Darko Golubovic
* @date: 27-05-2016
*
***************************/
myApp.factory('mainFactory', ['$q', function($q) {
	return {
		partHotels: function(allData, start, howMany) {
			var q = $q.defer();

			q.resolve(scopeData);
				
			return q.promise;
		}
	};
}]);


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


