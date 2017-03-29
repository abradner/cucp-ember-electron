import Ember from 'ember';
const ModeTransmission = 'transmission';
const ModeMemo = 'memo';

const {
  computed,
  get,
  set
} = Ember;
const {
  equal,
  not
} = computed;


export default Ember.Controller.extend({
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
      //do new record
    },

    cancelRecord() {
      //Transmissions
      this.set('recordType', null);
      this.set('trafficDirection', null);
      //Memos
      this.set('memoType', null);

      //Operation
      this.set('mode', null);
    }
  }
});
