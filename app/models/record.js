import DS from 'ember-data';

const {
  attr,
  Model,
  belongsTo
} = DS;

export default Model.extend({
  type: attr(),
  transmission: belongsTo({
    async: true,
    autoSave: true
  }),
});