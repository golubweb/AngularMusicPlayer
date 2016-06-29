/***************************
*
* @author: Darko Golubovic
* @date: 29-06-2016
*
***************************/
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {templateUrl: 'app/templates/login.tpl.html', controller: 'loginCtrl'}).
		when('/music', {templateUrl: 'app/templates/music-Player.tpl.html', controller: 'musicCtrl'}).
		otherwise({redirectTo: '/'});
}]);

