import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'title', 'content', 'context', 'createdOn', 'starred', 'origin']),

  title: attr(),
  content: attr(),
  context: attr(),
  createdOn: attr('datetime'),
  starred: attr(),
  origin: attr(),
  status: belongsTo('editor-document-status', { inverse: null }),
  previousVersion: belongsTo('editor-document', { inverse: 'nextVersion' }),
  nextVersion: belongsTo('editor-document', { inverse: 'previousVersion' }),
  zitting: belongsTo('zitting', { inverse: 'notulen' })
});
