var app = angular.module('Cookie',['ngCookies']);
app.controller('cookieController',['$scope','$cookies','$cookieStore',function($scope,$cookies,$cookieStore)
{
    $scope.writeCookie = function()
    {
        $cookieStore.put('TestCookies',$scope.cookieName);
    }
    $scope.readCookie = function()
    {
        console.log($cookieStore.get());
        $scope.cookie = $cookieStore.get('TestCookies');
    }
    $scope.removeCookies = function()
    {
        console.log($cookieStore);
        $cookieStore.remove('TestCookies');
    }
}]);