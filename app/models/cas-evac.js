import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  priority: attr('number'), 
  patientID: attr('string'),
  quantityStretcher: attr('number'), 
  quantitySitting: attr('number'),
  specialEquipment: attr('string'),
  rvLocation: attr('string'),
  rvContact: attr('string'),
  comment: attr('string'),
  currLocationGR: attr('string')
});
