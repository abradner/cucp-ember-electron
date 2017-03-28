import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      callsign: null,
      dutyOfficer: null
    }
  }
});
