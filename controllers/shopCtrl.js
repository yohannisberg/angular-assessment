angular.module('assessment').controller('mainCtrl', function($scope,mainService){

  $scope.controlData=function(){
    mainService.servData().then(function(response){
      $scope.forHtml=response;
    })
  }

  $scope.controlData();


})
