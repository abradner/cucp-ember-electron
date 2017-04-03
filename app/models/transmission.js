import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS

export default Model.extend({
  dutyOfficer: attr('string'),
  direction: attr('string'),
  callsignSender: attr('string'),
  callsignReceiver: attr('string'),
  recordType: attr('string'),
  record: belongsTo('record', {
    async: true,
    autoSave: true,
    polymorphic: true
  }),
  //  transmissionDate: attr('date'),
  createdAt: attr('date', {
    defaultValue() {
      return new Date();
    }
  })
});
