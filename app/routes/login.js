import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    },
    signInPW: function(provider, username, password) {
      alert(this.get('username'));
       this.get('session').open('firebase', {
        provider: provider,
        email: username,
        password: password
       }).then(function(data) {
        console.log(data.currentUser);
      });
    }
  }
});