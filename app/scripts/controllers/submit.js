
//controller for submit page
app.controller('enterPost', function ($scope, Post) {
    'use strict';
    $scope.derp = 'derp';
    $scope.posts = Post.all;

    $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
          console.log('stuff being created');
          var form = document.getElementById('addPost');
          form.reset();
          $scope.post.name = null;
          $scope.post.accomplishment = null;
        });
    };

    $scope.deletePost = function (post) {
        Post.delete(post);
    };


});
