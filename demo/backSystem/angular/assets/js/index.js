var app=angular.module('myApp',['ngRoute']);
app.controller('MyCtrl',function($scope){
      $scope.indexActive=true;
});
app.config(function($routeProvider){
    $routeProvider.when('/main',{
        templateUrl:'main.html'
    }).when('/ui',{
        templateUrl:'ui.html'
    }).when('/chart',{
        templateUrl:'chart.html'
    }).when('/table',{
        templateUrl:'table.html'
    }).otherwise({
        redirectTo:'/main'
    });
});
app.controller('tableDemo',function($scope){
    $scope.col="id";
    $scope.des= 0;
    $scope.usersInfo=[
        {id:1,username:'Geek',age:42,salary:1234},
        {id:2,username:'TOM',age:52,salary:2345.64},
        {id:3,username:'King',age:51,salary:8888},
        {id:4,username:'QuEEN',age:12,salary:6663},
        {id:5,username:'JACK',age:13,salary:4567},
        {id:6,username:'KGC',age:15,salary:9870.123},
        {id:7,username:'rose',age:23,salary:3456.78},
        {id:8,username:'john',age:78,salary:6234},
        {id:9,username:'lily',age:56,salary:7234},
        {id:10,username:'hello',age:34,salary:8234},
        {id:11,username:'james',age:58,salary:9234}
    ];
   

});
