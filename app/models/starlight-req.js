import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  rvCallsign: attr('string'),
  rvLocation: attr('string'),
  injury: attr('string'),
  rvLandmark: attr('string'),
  comment: attr('string')
});
