import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clicked: function() {
      let name = Ember.get(this, 'name');
      this.attrs.doClick(name);
    }
  }
});
