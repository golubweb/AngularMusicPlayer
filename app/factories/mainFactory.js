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

