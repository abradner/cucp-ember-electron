import Ember from 'ember';

const {
  get,
  inject,
  set
} = Ember;

export default Ember.Controller.extend({
  applicationController: inject.controller('application'),
  disableSubmit: Ember.computed('applicationController.callsign', 'applicationController.dutyOfficer', function() {
    let callsign = get(this, 'applicationController.callsign');
    let dutyOfficer = get(this, 'applicationController.dutyOfficer');

    if (callsign && dutyOfficer) {
      return false;
    }
    return true;
 })

});
