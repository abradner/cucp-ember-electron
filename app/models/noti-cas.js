import DS from 'ember-data';
import Record from 'cucp-ember-electron/models/record';

const {
  attr,
} = DS

export default Record.extend({
  patientID: attr('string'),
  patientRank: attr('string'),
  patientName: attr('string'),
  injuryDetails: attr('string'),
  injuryLocation: attr('string'),
  injuryTime: attr('string'),
  treatment: attr('string'),
  currLocationDesc: attr('string'),
  currLocationGR: attr('string')
});
