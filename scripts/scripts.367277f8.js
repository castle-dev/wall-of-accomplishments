"use strict";var app=angular.module("woaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/display.html",controller:"viewPost"}).when("/submit",{templateUrl:"views/submit.html",controller:"enterPost"}).otherwise({redirectTo:"/"})}]),app.constant("FIREBASE_URL","https://fiery-torch-5472.firebaseio.com"),app.controller("enterPost",["$scope","Post",function(a,b){a.derp="derp",a.posts=b.all,a.submitPost=function(){b.create(a.post).then(function(){})},a.deletePost=function(a){b["delete"](a)}}]),app.factory("Post",["$firebase","FIREBASE_URL",function(a,b){var c=new Firebase(b),d=a(c.child("posts")).$asArray(),e={all:d,create:function(a){var b=new Date,c=b.getTime();return a.createAt=c,d.$add(a)},get:function(b){return a(c.child("posts").child(b)).$asObject()},"delete":function(a){return d.$remove(a)}};return e}]);