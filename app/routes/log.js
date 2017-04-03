import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
    return this.store.query('transmission', {})
    // .then(function(source) {
    //   return source.get('topics');
    // });
  }
});
