import DS from 'ember-data';
import Record from 'record';

const {
  attr,
} = DS

export default Record.extend({
  body: attr('string'),
});
