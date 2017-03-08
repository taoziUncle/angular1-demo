既然是从无到有构建angular1 的框架，就要首先从angular的基本知识说起，本文将从以下几个方面介绍：

 1. Angularjs 技术框架 
 2. 指令集
 3. Service、Route 
 4. Application
 
 由于angular1和angular2是完全不同的两个框架，angular2在性能提升等方面都做了很多改进，有想了解ng2朋友可以查看博客：[从无到有构建Angular2 后台管理系统的前端架构](http://blog.csdn.net/franktaoge/article/details/60769501)博客中提供了源码地址可以直接下载运行。

### 一、Angularjs 技术框架
1、Angular.js 概述

 - 致力于Single Page Application (SPA)
 - 易于构建页面的CURD操作，以数据为中心
 - 操作思路与Dom及jQuery的先查找元素再操作元素不   同，它一切以数据为中心
 
2、四大特性

2.1 MVC

      1.1.1 MVC介绍
      
               Model：模型，业务数据，存储于特定作用范围内变量
                      controller中声明模型数据，可以实现module与view的分离
               VIEW：   视图，HTML+directive
               Controller：控制器
     1.1.2 MVC步骤
               1、声明自定义模块
                   angular.module('模块名'，[依赖列表])
               2、把自定义的模块注册给当前的应用
                   ng-app='模块'
               3、模块中声明控制器函数
                   module.controller('控制器名'，function(){...})
               4、调用控制器函数、创建控制器对象
                   <div controller='控制器名'></div>
               5、在控制器中增删改查数据
                   $scope.a=b;
               6、在View中呈现数据
                   {{a}}
     

  2.2 数据双向绑定

```
digest循环以及dirty-checking，包括watch,digest,和$apply
1.每次你绑定一些东西到你的UI上时你就会往$watch队列里插入一条$watch。$watch就是那个可以检测model变化的东西。
2.当浏览器接收到事件时，Angular使用$apply将事件添加到angular context（事件循环机制）中
3.digest循环就会触发。digest将会遍历我们的$watch，然后询问它是否有属性和值的变化，直$watch队列都检查过。
```
2.3 依赖注入

```
angular.module(‘myApp’, []) 
.controller(‘Ctl’, function ($scope) { 
    $scope.name = ‘leonwgc’;
}); 
上面这段代码就用到了angular的依赖注入，代码首先创建了一个myApp模块，然后在此模块中创建了Ctl控制器，创建控制器函数的第二个参数则是控制器的构造函数， 构造函数声明了对$scope和$log服务的依赖。 当构造函数执行时， 即可获得$scope和$log服务实例，进行操作。
```
2.4 模块化设计
 
```
Angular.module(name,[,requires])
ng–app = “name”
1.作用：
定义一个应用程序
模块是应用程序中不同部分的容器
模块是应用控制器的容器，控制器必须属于一个模块

2、优点
保持全局命名空间整洁
使应用可以按照任意顺序加载代码
```
### 二、指令集

 - 内置Directive
 - 自定义Directive
 - 内置filter
 - 自定义filter
#### 1 内置Directive
最常用的内置Directive有：（更多查看官网）

```
1、ng-bind
2、ng-repeat
3、ng-if
4、ng-class
5、ng-click
```
具体使用请查看示例代码
#### 2 自定义Directive

```
属性：
1、restrict：“EACM”
       E:元素  <my-directive></my-directive>
       A:属性  <div my-directive></div>
       C:类    <div class=“my-directive”></div>
       M:注释<!– directive: my-directive -- >
2、template
3、templateUrl
```
具体使用请查看示例代码
#### 3 内置filter

```
1、number
2、currency
3、date
4、uppercase
5、lowercase
6、filter
7、json
8、limitTo
```
具体使用请查看示例代码

#### 4 自定义filter

```
示例：
app.filter('toFixedTwo', function () {
return function (text) {
    if(!text){
        return "0.00";
    }else{
        var data = parseFloat(text);
        return data.toFixed(2);
    }
}
```
具体使用请查看示例代码
### 三、路由
请查看示例代码

### 四、angular1 application
请查看示例代码

