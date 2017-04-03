import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  demandNumber: attr('string'),
  priority: attr('number'), 
  quantityRations: attr('number'), 
  quantityWater: attr('number'), 
  quantityFruit: attr('number'), 
  quantityOtherItems: attr('string'),
  deliveryLocation: attr('string'),
  deliveryTime: attr('string'),
  deliveryMode: attr('string'),
  comment: attr('string')
});
