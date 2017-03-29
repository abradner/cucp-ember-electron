import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('record-sentry-rep', 'Integration | Component | record sentry rep', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{record-sentry-rep}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#record-sentry-rep}}
      template block text
    {{/record-sentry-rep}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
