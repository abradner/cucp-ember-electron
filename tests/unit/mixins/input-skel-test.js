import Ember from 'ember';
import InputSkelMixin from 'cucp-ember-electron/mixins/input-skel';
import { module, test } from 'qunit';

module('Unit | Mixin | input skel');

// Replace this with your real tests.
test('it works', function(assert) {
  let InputSkelObject = Ember.Object.extend(InputSkelMixin);
  let subject = InputSkelObject.create();
  assert.ok(subject);
});
