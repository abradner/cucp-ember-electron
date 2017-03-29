import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('record-cas-evac', 'Integration | Component | record cas evac', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{record-cas-evac}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#record-cas-evac}}
      template block text
    {{/record-cas-evac}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
