import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  own: attr('number'),
  attachments: attr('number'), 
  staff: attr('number'),
  expectedAttachments: attr('number'),
  expectedDetachments: attr('number'),
  total: attr('number')
});
