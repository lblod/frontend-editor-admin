import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-language-typed-string', 'Integration | Component | edit language typed string', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-language-typed-string}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-language-typed-string}}
      template block text
    {{/edit-language-typed-string}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
