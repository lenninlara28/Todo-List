import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('incompleted-tasks', { path: '/' } );
  this.route('completeds');
});

export default Router;
