app.factory('Post', function ($firebase, FIREBASE_URL) { //jshint ignore:line
  var ref = new Firebase(FIREBASE_URL); //jshint ignore:line    
  var posts = $firebase(ref.child('posts')).$asArray();
  
  var Post = {
      all: posts,
      create: function (post) {
          var temp = new Date();
          var TIMESTAMP = temp.getTime();
          post.createAt = TIMESTAMP;
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

});