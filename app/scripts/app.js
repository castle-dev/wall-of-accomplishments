'use strict';

/**
 * @ngdoc overview
 * @name woaApp
 * @description
 * # woaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('woaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/display.html',
        controller: 'viewPost'
      })
      .when('/submit', {
        templateUrl: 'views/submit.html',
        controller: 'enterPost'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_URL', 'torrid-torch-9438.firebaseio.com');
app.controller('viewPost', function ($scope, Post) {
    $scope.derp = 'derp';
    $scope.posts = Post.all;
    $scope.deletePost = function (post) {
        Post.delete(post);
    };
});
