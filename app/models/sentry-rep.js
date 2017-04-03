import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  numberPlate: attr('string'),
  status: attr('string'),
  passengers: attr('string'),
  destination: attr('string'),
  estimatedReturn: attr('string'),
  comment: attr('string')
});
