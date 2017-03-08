var app=angular.module('myApp',['ngRoute']);
app.controller('MyCtrl',function(){

});
app.config(function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl:'1-testDirective.html'
    }).when('/cate',{
        template:'<h1>我是分类</h1>'
    }).when('/detail',{
        template:'<h1>我是详细信息</h1>'
    }).when('/email',{
        template:'<h1>Email Me</h1>'
    }).otherwise({
        redirectTo:'/start'
    });
});