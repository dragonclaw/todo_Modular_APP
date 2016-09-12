app.factory('getJson', ['$http', function($http){
	return $http.get('assets/js/services/todos.json').success(function(data){
		return data;
	});
}]);