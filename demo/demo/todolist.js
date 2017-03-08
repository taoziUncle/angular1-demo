var app=angular.module('myApp',[]);
app.controller('MyCtrl',function($scope){
$scope.task='';
    $scope.tasks=[];
    $scope.addTask=function(){
        if($scope.task){
            $scope.tasks.push($scope.task);
            $scope.task='';
        }

    }
});
//ng-if ng-show ng-hide