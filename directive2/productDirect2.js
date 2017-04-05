angular.module('assessment').directive('productDirect', function(){

return {
  restrict: 'E',
  templateUrl: './directive2/direct2.html'
},
controller:function($scope, mainService){

    $scope.productData=function(){
      mainService.forProducts().then(function(response){
        $scope.forHtml=response;
      })
    }

    $scope.productData();


},
});
