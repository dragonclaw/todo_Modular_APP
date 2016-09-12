app.controller('DataController', ['$http','$scope','getJson', function($http,$scope,getJson){
	getJson.success(function(data){
		$scope.todos = data;
	});
}]);