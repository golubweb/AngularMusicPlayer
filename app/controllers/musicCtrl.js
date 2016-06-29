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
