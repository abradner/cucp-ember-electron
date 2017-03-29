import Ember from 'ember';

const { Component, computed } = Ember;
const { match } = computed;

const Inbound = 'inbound';
const Outbound = 'outbound';
const Monitored = 'monitored';

export default Component.extend({

  callsignFrom: null,
  callsignTo: null,
  trafficDirection: null, 

  showCallsignFrom: match('trafficDirection', /^(#{Inbound}|#{Monitored})$/),
  showCallsignTo: match('trafficDirection', /^(#{Outbound}|#{Monitored})$/),

  subpanel: computed('recordType', function() {
    let type = this.get('recordType');
    return "record-"+type;
  }),


});
