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