app.controller('DataController', ['$http','$rootScope','$scope','jsonTodos', function($http,$rootScope,$scope,jsonTodos){
	$rootScope.url="http://localhost:3000/";
	jsonTodos.get($rootScope.url,0).then(function(data){
		$rootScope.todos = data;
	});
	$rootScope.save=function(todo){
		alert("this is the todo" + $scope.newTodo);
		var test =jsonTodos.post($rootScope.url,$scope.newTodo);
		alert(test);
		console.log(test);
	}
}]);
