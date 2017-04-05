var app = angular.module('WindowService',[]);
app.controller('WindowController',function($scope,$window)
{
    $scope.showAlert = function()
    {
        $window.alert("This is an alert");
    }
    $scope.showPrompt = function()
    {
        var response = $window.prompt("This is a prompt");
        $window.alert("Your input was "+response);
    }
})
