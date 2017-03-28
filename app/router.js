import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('activity');
  this.route('log');
  this.route('memos');
  this.route('settings');
});

export default Router;
