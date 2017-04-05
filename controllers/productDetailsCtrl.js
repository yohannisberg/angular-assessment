angular.module('assessment').controller('productCtrl', function($scope, mainService, $stateParams){

$scope.hi=$stateParams.id;


$scope.productData=function(){
  mainService.forProducts().then(function(response){
    $scope.forProdHtml=response;
  })
}

$scope.productData();





  // $scope.controlData=function(){
  //   mainService.servData().then(function(response){
  //
  //     for(var i=0; i<response.length; i++){
  //       if(response[i].id === parseInt($stateParams.id)){
  //         console.log('hi')
  //           $scope.pleaseWork=response[i];
  //       }
  //     }
  //   })
  // }
  //
  // $scope.controlData();

})
