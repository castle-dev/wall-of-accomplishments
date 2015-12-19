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
      .otherwise({
        redirectTo: '/'
      });
  });
// app.constant('FIREBASE_URL', 'https://fiery-torch-5472.firebaseio.com/'); //Testing firebase
app.constant('FIREBASE_URL', 'https://torrid-torch-9438.firebaseio.com/'); //Live firebase
app.controller('viewPost', function ($scope, Post) {
    $scope.posts = Post.all;
    $scope.deletePost = function (post) {
        Post.delete(post);
    };
});
