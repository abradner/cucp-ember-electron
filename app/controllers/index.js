import Ember from 'ember';

const {
  get,
  inject,
  set
} = Ember;

export default Ember.Controller.extend({
  applicationController: inject.controller('application'),
});
