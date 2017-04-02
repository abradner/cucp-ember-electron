import Ember from 'ember';
import InputSkel from 'cucp-ember-electron/mixins/input-skel';

export default Ember.Component.extend(InputSkel, {
  actions: {
    change(ev) { // Workaround to transmit checked state upward like the other input- components do
      this.set('value', ev.target.checked)
      this.attrs.changed();
    }
  }
});
