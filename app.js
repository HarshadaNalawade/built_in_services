var app = angular.module('Services',[]);
app.controller('testingServices',['$scope','$location','$anchorScroll',function($scope,$location,$anchorScroll){
    $scope.gotoTop = function(){
        $location.hash('top');
        $anchorScroll();
    }
}]);