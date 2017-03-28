import Ember from 'ember';

const {
  shell
} = requireNode('electron');

export default Ember.Component.extend({
    tagName: 'a',
    attributeBindings: ['href'],

    click(ev) {
      ev.preventDefault(); // Capture the click
      let href = this.get('href');
      if (href) {  // make sure we actually have a url passed in
        shell.openExternal(this.get('href')); // open it in your external browser
      } else { // no url?
        alert("Url not specified. this is a bug."); // complain!
      }
    }
});
