import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'title', 'matches', 'body', 'contexts', 'disabledInContexts']),

  title: attr(),
  matches: attr('string-set'),
  body: attr(),
  contexts: attr('uri-set'),
  disabledInContexts: attr('uri-set')
});
