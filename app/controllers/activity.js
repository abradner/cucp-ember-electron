import Ember from 'ember';
const ModeTransmission = 'transmission';
const ModeMemo = 'memo';

const {
  computed,
  get,
  inject,
  set
} = Ember;
const {
  equal,
  not
} = computed;


export default Ember.Controller.extend({
  store: inject.service(),
  mode: null,
  trafficDirection: null,
  recordType: null,

  // template conditionals
  showTypes: computed('mode', function() { //Show record types *unless* we're doing a memo
    let mode = this.get('mode');
    return (mode !== ModeMemo); // True if mode is anything except 'memo'
  }), 

  trafficDisabled: Ember.computed('trafficDirection', 'memoType', function() { // disable the traffic buttons if we're in the middle of a record
    let memo = this.get('memoType');
    let radio = this.get('trafficDirection');

    return (memo || radio); // True if either memoType or trafficDirection is set to something
  }),

  typesDisabled: Ember.computed('trafficDirection', function() {  // disable the record type buttons if we're not yet in a record
    let direction = this.get('trafficDirection');

    return !(direction); //True unless mode is 'transmission' and direction is not null
  }),

  // labels
  recordHeader: Ember.computed('trafficDirection', function() {
    let direction = this.get('trafficDirection');
    if (direction) {
      return (direction + " Transmission");
    } else {
      return "select a mode";
    }
  }),

  contentHeader: Ember.computed('recordType', function() {
    let type = this.get('recordType');
    return type; //make this more human readible in the future
  }),


  actions: {
    startActivity(mode, operation) {
      this.set('mode', mode)

      if (mode === ModeTransmission) {
        this.set('trafficDirection', operation)
      } else {
        this.set('memoType', operation)
      }
    },
    selectType(recordType) {
      this.set('recordType', recordType)
      // let newModel = this.get('store')
      // this.set('currentModel', newModel);
      //do new record
    },

    saveRecord(recordType, values, print=false) {
      let expectedRecordType = get(this, 'recordType');
      if (recordType !== expectedRecordType) {
        alert(`was expecting ${expectedRecordType} but got ${recordType}. I can still save it and everything will be fine but this is a bug!`);
      }
      if (print) {
        alert('Printing OMG!');
      }
      console.log(values);
      this.send('clearRecord');
    },

    saveMemo() {
      alert("Not implimented")
    },

    clearRecord() {
      //Transmissions
      this.set('recordType', null);
      this.set('trafficDirection', null);
      //Memos
      this.set('memoType', null);

      //Operation
      this.set('mode', null);

      //Data
      this.set('currentModel', null);
    }
  }
});
