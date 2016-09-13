app.controller('DataController', ['$http','$scope','jsonTodos', function($http,$scope,jsonTodos){
	jsonTodos.success(function(data){
		$scope.todos = data;
	});
	$scope.save=function(){
		alert("test");
	}
}]);
