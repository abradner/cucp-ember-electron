import Ember from 'ember';

export default Ember.Mixin.create({
  tagName: 'span',
  // attributeBindings: ['href'],

  actions: {
    changed: function(name) {
      this.attrs.changed(name);
    }
  }
});
