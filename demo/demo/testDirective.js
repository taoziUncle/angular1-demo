var app=angular.module('myApp',[]);
app.directive('myDirective',function(){
    return {
        template:'<h1>这是自定义的指令</h1>'
    }
    //默认指令调用的方式是EA，E---元素--自定义的组件，A---属性--扩展已有元素 C---类 M---注释
});
app.directive('myDirective1',function(){
    return {
        restrict:'EAC',
        template:'<h1>我可以以三种方式调用指令EAC</h1>'
    }
});
app.directive('myDirective2',function(){
   return {
       restrict:'M',
       replace:true,
       template:'<h1>我是以注释形式调用的指令</h1>'
   }
});
app.directive('myDirective3',function(){
    return {
        template:'<h1>hello world</h1> \
        <p>this is a test</p>\
        <p>this is kgc</p>\
        '
    }
});
app.directive('myDirective4',function(){
   return {
        templateUrl:'tpl/nav.html'
   }
});