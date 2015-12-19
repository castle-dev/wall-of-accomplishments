
//controller for post submission
app.controller('enterPost', function ($scope, Post) {
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
});
