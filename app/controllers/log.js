import Ember from 'ember';

const {
  computed,
  Controller,
  get,
  inject,
  set
} = Ember;


export default Controller.extend({
  activeTransmission: null,
  highlightTransmission(transmissionId) {
    return (transmissionId === get(this, 'activeTransmission'));
  },
  
  activeRecord: null,
  activeRecordFields: Ember.computed('activeRecord', function() {
    let attrNames = [];
    let activeRecord = get(this, 'activeRecord');

    // Get attributes
    activeRecord.eachAttribute((name) => attrNames.push(name));

    var attrs = Ember.getProperties(activeRecord, attrNames);
    return attrs;
  }),

  store: inject.service(),

  actions: {
    showDetails(transmissionId) {
      set(this, 'activeTransmission', transmissionId);
      let recordPromise = this.store.queryRecord('transmission', {filter: {id: transmissionId}}).then((transmission) => {
        return this.store.queryRecord(get(transmission,'recordType'), {filter: {id: get(transmission,'record.id')}}); // rewrite to use polymorphic lookup
      });

      set(this, 'activeRecord', null); 
      let activeRecord = recordPromise.then((rec) => {
        set(this, 'activeRecord', rec); 
        // debugger
      });

    }
  }
});
