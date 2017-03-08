var app=angular.module('myApp',[]);
app.directive('myDirective',function(){
    return {
        restrict:'EA',
        template:'<p><a target="_blank" href="http://www.angularjs.cn/">angular</a></p>'

    }
});


app.directive('myDirective1',function(){
    return{
        restrict:'EA',
        scope:{
            myUrl:'@myLinkUrl',
            myText:'@myLinkText'
        },
        template:'<a ng-href="{{myUrl}}" target="_blank">{{myText}}</a>'
    }
});
app.controller('MyCtrl',function($scope){
    $scope.url="http://www.baidu.com";
    $scope.text="百度一下";
});