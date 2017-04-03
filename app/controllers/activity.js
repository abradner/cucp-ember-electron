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
  applicationController: inject.controller('application'),
  mode: null,
  trafficDirection: null,
  recordType: null,

  callsigns: {
    sender: null,
    receiver: null
  },

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

        // prefill the callsigns
        let myCallsign = get(this, 'applicationController.callsign');
        if (operation === 'incoming' ) {
          set(this, 'callsigns.receiver', myCallsign);        
        } else if (operation === 'outgoing') {
          set(this, 'callsigns.sender', myCallsign);                  
        }

      } else {
        this.set('memoType', operation)
      }
    },
    selectType(recordType) {
      set(this, 'recordType', recordType)
      // let newModel = this.get('store')
      // this.set('currentModel', newModel);
      //do new record
    },

    saveRecord(recordType, values, callsigns, print=false) {
      // console.log(recordType, values, callsigns, print);

      let expectedRecordType = get(this, 'recordType');
      if (recordType !== expectedRecordType) {
        alert(`was expecting ${expectedRecordType} but got ${recordType}. I can still save it and everything will be fine but this is a bug!`);
      }

      let transmissionData = {
        dutyOfficer: get(this, 'applicationController.dutyOfficer'),
        direction: get(this, 'trafficDirection'),
        callsignSender: callsigns.sender,
        callsignReceiver: callsigns.receiver,
        recordType: recordType
      }
      
      let transmission = this.store.createRecord('transmission', transmissionData);
      transmission.save();

      values.type=recordType;
      values.transmission = transmission;
      let record = this.store.createRecord(recordType, values);
      
      // transmission.record = record;
      record.save();

      if (print) {
        alert('Printing OMG!');
      }

      this.send('clearRecord');

    },

    saveMemo() {
      alert("Not implimented")
    },

    clearRecord() {
      //Transmissions
      this.set('recordType', null);
      this.set('trafficDirection', null);
      this.set('callsigns.sender', null);
      this.set('callsigns.receiver', null);

      //Memos
      this.set('memoType', null);

      //Operation
      this.set('mode', null);

      // //Data
      // this.set('currentModel', null);
    }
  }
});
