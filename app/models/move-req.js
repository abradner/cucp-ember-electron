import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  rvCallsigns: attr('string'),
  rvLandmark: attr('string'),
  rvLocation: attr('string'),
  quantityPassengers: attr('number'), 
  configuration: attr('string'),
  cargo: attr('string'),
  cargoVehicles: attr('string'),
  hasLoadingCrew: attr('boolean'),
  pickupTime: attr('string'),
  pickupLandmark: attr('string'),
  pickupLocation: attr('string')
});
