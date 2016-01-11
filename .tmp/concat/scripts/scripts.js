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
  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/display.html',
        controller: 'viewPost'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
// app.constant('FIREBASE_URL', 'https://fiery-torch-5472.firebaseio.com/'); //Testing firebase
app.constant('FIREBASE_URL', 'https://torrid-torch-9438.firebaseio.com/'); //Live firebase
app.controller('viewPost', ["$scope", "Post", function ($scope, Post) {
    $scope.posts = Post.all;
    $scope.deletePost = function (post) {
        Post.delete(post);
    };
}]);


//controller for post submission
app.controller('enterPost', ["$scope", "Post", function ($scope, Post) {
    'use strict';
    $scope.posts = Post.all;

    $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
          var form = document.getElementById('addPost');
          form.reset();
          $scope.post.name = null;
          $scope.post.accomplishment = null;
          $scope.post.who = null;
        });
    };

    $scope.deletePost = function (post) {
        Post.delete(post);
    };
}]);

app.factory('Post', ["$firebase", "FIREBASE_URL", function ($firebase, FIREBASE_URL) { //jshint ignore:line
  var ref = new Firebase(FIREBASE_URL); //jshint ignore:line
  var posts = $firebase(ref.child('posts')).$asArray();
  var Post = {
      all: posts,
      create: function (post) {
          var temp = new Date();
          var TIMESTAMP = temp.getTime();
          post.createAt = TIMESTAMP;
          post.who = 'by: ' + post.who;
          return posts.$add(post);

      },
      get: function (postId) {
          return $firebase(ref.child('posts').child(postId)).$asObject();
      },
     delete: function (post) {
          return posts.$remove(post);
     }
  };
  return Post;
}]);
