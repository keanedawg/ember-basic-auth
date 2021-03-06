import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.authenticatedRoute('secret-page');
  this.route('login');
  this.route('secret-page');
  this.route('secret-page2');
});

export default Router;
