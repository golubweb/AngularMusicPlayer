/***************************
*
* @author: Darko Golubovic
* @date: 29-06-2016
*
***************************/
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);


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


/***************************
*
* @author: Darko Golubovic
* @date: 29-06-2016
*
***************************/
myApp.controller('loginCtrl', ['$scope', '$location', '$http', 'mainServices', 'mainFactory', function($scope, $location, $http, mainServices, mainFactory){
	$scope.msgText = 'Please enter valid email and any password';

	
	$scope.loginFrm = function(email, pass){
		if(email !=='' && pass !==''){			
			mainServices.getLogin(email, pass).then(function(response){
				mainFactory.setIdent( response.data.token );
				$location.path('/music');
			});
		} else {
			$scope.msgText = 'ERROR LOGIN';			
		}
	};
}]);
/***************************
*
* @author: Darko Golubovic
* @date: 29-06-2016
*
***************************/
myApp.controller('musicCtrl', ['$scope', '$location', 'mainServices', 'mainFactory', function($scope, $location, mainServices, mainFactory){
	if(mainFactory.getIdent()){
		mainServices.getMusic().then(function(response){
			$scope.music = response.data;
			$scope.active = $scope.music[0];
		});		
	} else {
		$location.path('/');
	}
	
	$scope.previous = function(id){
		var prevID = id;
		
		angular.forEach($scope.music, function(item, key) {
			if(item.id === prevID){
				if($scope.music[key - 1] !== undefined){
					$scope.active = $scope.music[key - 1];
				}
			}
		});		
	};
	
	$scope.next = function(id){
		var nextID = id;
		
		angular.forEach($scope.music, function(item, key) {
			if(item.id === nextID){
				if($scope.music[key + 1] !== undefined){
					$scope.active = $scope.music[key + 1];
				}
			}
		});	
	};
	
	$scope.logoutFrm = function() {
		mainFactory.removeIdent();
		$location.path('/');
	};
	
	$scope.like = function(id) {
		var likeID = id, token = mainFactory.getIdent();
		
		if(mainFactory.getIdent()){
			mainServices.putLike(token);
			
			angular.forEach($scope.music, function(item, key) {
				if(item.id === likeID){
					item.liked = true;
				}
			});	
		}
	};
}]);

/***************************
*
* @author: Darko Golubovic
* @date: 29-05-2016
*
***************************/
myApp.directive('tplJs', ['$parse', '$compile', function($parse, $compile){
	return {
		restrict: 'A',
		terminal: true,
		link: function(scope, element, attr){
			if(element == 'script'){
				var domElem = '<script src="' + attr.ngSrc + '" type="text/javascript"></script>';
				$(element).append($compile(domElem)(scope));
			}
		}
	};
}]);


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


