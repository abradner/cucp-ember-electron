import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  time: attr('string'),
  location: attr('string'),
  comment: attr('string'),
  evaluation: attr('string')
});
