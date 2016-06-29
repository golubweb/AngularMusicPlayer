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

