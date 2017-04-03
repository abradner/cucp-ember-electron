import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  location: attr('string'),
  moving: attr('boolean'), 
  comment: attr('string')
});
