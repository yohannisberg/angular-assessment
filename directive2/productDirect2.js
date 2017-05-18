angular.module('assessment').directive('productDirect', function(){

return {
  restrict: 'E',
  templateUrl: './directive2/direct2.html',


controller:function($scope, mainService){

  $scope.showPic = true;

  $scope.productData=function(){
    mainService.servData().then(function(response){
      $scope.forProdHtml=response;
    })
  }
  $scope.productData();

}


}
});
