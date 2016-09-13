app.controller('DetailController',['$http','$scope','jsonTodos','jsonTodo','$routeParams',function($http,$scope,jsonTodos,jsonTodo,$routeParams){
id=$routeParams.id;
console.log(id);
jsonTodo.success(function(data){
  alert(data[id]._id);
  console.log(data);
});
$scope.saveTodo= function(id){
  alert($scope.todo._id);
};

}]);
