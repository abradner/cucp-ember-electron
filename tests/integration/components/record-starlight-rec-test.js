import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('record-starlight-rec', 'Integration | Component | record starlight rec', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{record-starlight-rec}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#record-starlight-rec}}
      template block text
    {{/record-starlight-rec}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
