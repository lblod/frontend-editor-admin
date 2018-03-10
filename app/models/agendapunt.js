import { collect } from '@ember/object/computed';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'titel', 'beschrijving', 'geplandOpenbaar', 'type']),

  type: attr('string-set'),
  beschrijving: attr(),
  geplandOpenbaar: attr(),
  heeftOntwerpbesluit: attr(),
  titel: attr(),
  vorigeAgendapunt: belongsTo('agendapunt', {inverse: null }),
  referenties: hasMany('agendapunt', {inverse: null }),
  agenda: belongsTo('agenda', {inverse: null })
});
