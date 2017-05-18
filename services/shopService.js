angular.module('assessment').service('mainService', function($http, $stateParams){

this.servData=function(){
  return $http.get('https://practiceapi.devmountain.com/products').then(function(response){
  return response.data;
})

}

this.forProducts=function(){
  return $http.get('https://practiceapi.devmountain.com/products/'+$stateParams.id).then(function(response){
    return response.data;
  })
}

});
