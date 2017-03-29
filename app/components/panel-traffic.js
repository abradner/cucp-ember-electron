import Ember from 'ember';

export default Ember.Component.extend({
  //<p><small>Radio Transmission</small></p>
// {{button-action caption="Incoming" icon="fa-sign-in" doClick=(action this.attrs.startActivity "transmission" "incoming")}}
// {{button-action caption="Outgoing" icon="fa-sign-out" doClick=(action this.attrs.startActivity "transmission" "outgoing")}}
// {{button-action caption="Monitored" icon="fa-headphones" doClick=(action this.attrs.startActivity "transmission" "monitored")}}
// <p><small>Other Activity</small></p>
// {{button-action caption="Memo" icon="fa-sticky-note-o" doClick=(action this.attrs.startActivity  "memo" "normal")}}
// {{button-action caption="Scheduled Memo" icon="fa-bell" flavour="btn-warning" doClick=(action this.attrs.startActivity "memo" "scheduled")}}
// {{button-action caption="Critical Memo" icon="fa-exclamation-triangle" flavour="btn-danger" doClick=(action this.attrs.startActivity "memo" "critical")}}

  categories: {
    "Radio Transmission": [
          {caption: 'Incoming', icon: 'fa-sign-in', mode: 'transmission', operation: 'incoming', hotKey: '0'},
          {caption: 'Outgoing', icon: 'fa-sign-out', mode: 'transmission', operation: 'outgoing', hotKey: '-'},
          {caption: 'Monitored', icon: 'fa-headphones', mode: 'transmission', operation: 'monitored', hotKey: '='}
    ],
    "Memo": [
          {caption: 'Memo', icon: 'fa-sticky-note-o', mode: 'memo', operation: 'normal', hotKey: '['},
          {caption: 'Scheduled Memo', icon: 'fa-bell', flavour: 'btn-warning', mode: 'memo', operation: 'scheduled', hotKey: ']'},
          {caption: 'Critical Memo', icon: 'fa-exclamation-triangle',  flavour: 'btn-danger', mode: 'memo', operation: 'critical', hotKey: '\\'}
    ]
  },
});
