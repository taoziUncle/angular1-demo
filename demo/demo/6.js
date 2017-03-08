var app = angular.module('myApp', ['ngRoute']);
app.controller('MyCtrl', function () {

});
app.config(function ($routeProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'tpl/start.html',
        controller: 'StartController'
    }).when('/main', {
        templateUrl: 'tpl/main.html',
        controller: 'MainController'
    }).when('/detail/:id/:username', {
        templateUrl: 'tpl/detail.html',
        controller: 'DetailController'
    }).otherwise({
        redirectTo: '/start'
    });
});
app.controller('StartController', function ($scope, $location) {
    $scope.username = 'geek';
    $scope.test1 = 'this is a test1';
    $scope.jump = function (url) {
        $location.path(url);
    }
})
.controller('MainController', function ($scope, $location) {
    $scope.test1 = 'hello main.html';
    $scope.jump = function (url) {
        $location.path(url);
    }
}).controller('DetailController', function ($scope, $location, $routeParams) {
    console.log($routeParams);
    $scope.test1 = 'hello detail.html';
    $scope.jump = function (url) {
        $location.path(url);
    }
});