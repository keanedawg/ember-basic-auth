import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    
    
    actions: {
        doStuff() {
            alert('hi');
        },

        signInToComment: function(){
            var controller = this.controllerFor('button');
            // The provider name is passed to `open`
            this.get('torii').open('facebook-connect').then(function(authorization){
            // FB.api is now available. authorization contains the UID and
            // accessToken.
            controller.set('hasFacebook', true);
      });
    }
    }
});
