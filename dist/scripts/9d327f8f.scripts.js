"use strict";angular.module("mpApp",[]).config(["$routeProvider",function(a){a.when("",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:""})}]),angular.module("mpApp").controller("MainCtrl",["$scope",function(a){var b=function(){var a=Math.floor(3e6*Math.random()+1).toString(),b=window.SparkMD5.hash(a);return"https://identicons.github.com/"+b+".png"};a.identicons=[];for(var c=0;25>c;c++)a.identicons.push(b());a.rows=[];for(var d=0;25>d;d+=5)a.rows.push(a.identicons.slice(d,d+5))}]);