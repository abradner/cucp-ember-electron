import Ember from 'ember';

export default Ember.Component.extend({
  fields: [
    {serial: 'A', type: 'text', name: 'location', label: 'Location (GR)', placeholder: '012987'},
    {serial: 'B', type: 'checkbox', name: 'moving', label: 'Moving?', helpBlock: 'Ticked if moving, cleared if halted'},
    {serial: 'C', type: 'text', name: 'comment', label: 'Direction of movement - or - length of halt', placeholder: 'eg "NW" or "5m"'},
  ],

  // actions: {
  //   change(field, ev) {
  //     alert(this.get(field)); // useful!
  //   }
  // }
});
