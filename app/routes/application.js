import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
      if(!this.get('session.isAuthenticated')) {
        this.transitionTo('login');
      }
      return this.get('session').fetch().catch(function() {});
  },
  actions: {
    accessDenied: function() {
      this.transitionTo('login');
    }
  }
});