import Ember from 'ember';

export default Ember.Component.extend({
  categories: {
    "Routine": [
          {caption: 'Message', icon: 'fa-commenting-o', internalType: 'message', hotKey: 'z'},
          {caption: 'LocStat', icon: 'fa-map-marker', internalType: 'loc-stat', hotKey: 'l'},
          {caption: 'Strength State', icon: 'fa-users', internalType: 'strength-state', hotKey: 's'}
    ],
    "Medical": [
          {caption: 'CasEvac', icon: 'fa-ambulance', internalType: 'cas-evac', hotKey: 'c'},
          {caption: 'NotiCas', icon: 'fa-stethoscope', internalType: 'noti-cas', hotKey: 'n'},
          {caption: 'StarlightReq', icon: 'fa-user-md', internalType: 'starlight-req', hotKey: 'r'}
    ],
    "Supply & Logistics": [
          {caption: 'MaintDem', icon: 'fa-cutlery', internalType: 'maint-dem', hotKey: 'm'},
          {caption: 'MoveReq', icon: 'fa-bus', internalType: 'move-req', hotKey: 'v'}
    ],
    "Situational": [
          {caption: 'SitRep', icon: 'fa-check-square', internalType: 'sit-rep', hotKey: 't'},
          {caption: 'IntRep', icon: 'fa-bullseye', internalType: 'int-rep', hotKey: 'i'},
          {caption: 'SentryRep', icon: 'fa-fort-awesome', internalType: 'sentry-rep', hotKey: 'y'}
    ],
  },

});
