import { collect } from '@ember/object/computed';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'geplandeStart', 'opLocatie']),

  geplandeStart: attr('datetime'),
  gestartOpTijdstip: attr('datetime'),
  geeindigdOpTijdstip: attr('datetime'),
  opLocatie: attr(),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: null }),
  secretaris: belongsTo('mandataris', { inverse: null }),
  voorzitter: belongsTo('mandataris', { inverse: null }),
  notulen: belongsTo('editor-document', { inverse: null }),
  behandeldeAgendapunten: hasMany('behandeling-van-agendapunt', { inverse: null }),
  aanwezigenBijStart: hasMany('mandataris', { inverse: null }),
  agenda: belongsTo('agenda', { inverse: null })
});
