angular.module('assessment').service('mainService', function($http,$stateParams){


this.servData=function(){
  return $http.get('http://practiceapi.devmounta.in/products').then(function(response){
  return response.data;
})

}

this.forProducts=function(){
  return $http.get('http://practiceapi.devmounta.in/products/'+$stateParams.id).then(function(response){
    return response.data;
  })
}

});
