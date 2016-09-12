app.controller('DetailController',['$http','$scope','getJson','$routeParams',function($http,$scope,getJson,$routeParams){
getJson.success(function(data){
  $scope.todo = data[$routeParams.id];
  console.log(data);
});

}]);
