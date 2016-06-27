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

