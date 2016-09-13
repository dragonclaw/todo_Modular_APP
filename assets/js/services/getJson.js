
app.factory('jsonTodos', ['$http', function($http){
	return $http.get('http://localhost:3000/todos').success(function(data){
		return data;
	});
}]);

app.factory('jsonCreate',['$http',function($http){
return $http({
                        method : 'POST',
                        url : 'http://localhost:3000/todos',
                        data : {"name":newTodo,
												"completed":false
												},
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }).then( _success, _error );
}]);

app.factory('jsonTodo',['$http', function($http){
	return $http.get('http://localhost:3000/todos/:id').success(function(data){
		return data;
	});
}]);
