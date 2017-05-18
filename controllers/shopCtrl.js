angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams){

  $scope.controlData=function(){
    mainService.servData().then(function(response){
      $scope.forHtml=response;
    })
  }

  $scope.controlData();


})
