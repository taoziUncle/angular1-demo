var app=angular.module('myApp',[]);
app.controller('MyCtrl',function($scope){
$scope.today=new Date();
    $scope.users=['Geek','kgc','king','queen','rose','Tom'];
    $scope.isCapitalized=function(str){
       return str[0]==str[0].toUpperCase();
    }
    $scope.test={
        username:'kgc',
        title:'最大的IT在线教育',
        desc:'welcome to kgc'
    }
    $scope.test1='helloworld';
    $scope.usersInfo=[
        {id:11,username:'akgc1',age:12},
        {id:60,username:'fkgc1',age:72},
        {id:24,username:'bkgc1',age:32},
        {id:13,username:'ckgc1',age:42},
        {id:45,username:'dkgc1',age:52},
        {id:25,username:'ekgc1',age:62},

    ];
});
//ng-if ng-show ng-hide