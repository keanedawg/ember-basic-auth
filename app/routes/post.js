// app/routes/post.js
export default Ember.Route.extend({
  actions: {
    signInToComment: function(){
      var controller = this.controllerFor('post');
      // The provider name is passed to `open`
      alert(this.get('torii')); //.open('facebook-connect').then(function(authorization){
        // FB.api is now available. authorization contains the UID and
        // accessToken.
 //       controller.set('hasFacebook', true);
 //     });
    }
  }
});