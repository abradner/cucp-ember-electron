import Ember from 'ember';


export default Ember.Component.extend({

  // positionalParams: ['model'],
  actions : {
    switchCss(theme) {
      this.sendAction('switchCss', theme);
    }
  }
});
