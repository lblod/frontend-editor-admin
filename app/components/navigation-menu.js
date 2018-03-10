import { computed } from '@ember/object';
import { inject } from '@ember/service';
import Component from '@ember/component';
import layout from '../templates/components/navigation-menu';

/*
  This component created a menu for your routes.
  This component assumes, that the routes were only created by this addon.

  The function, that generates the menu list gets all the route names with a lookup,
  then filters the keys with ".index", as that is always part of the resource, this blueprint generates,
  and takes the strings in front of the ".index".

  The list of indeces are always unique and sorted.
*/
export default Component.extend({
  layout: layout,
  tagName: 'div',
  currentRoute: '',
  router: inject(),

  menus: computed(function() {
    const routeKeys = [
      'agendas',
      'agendapunten',
      'artikels',
      'behandelingen-van-agendapunten',
      'besluiten',
      'bestuurseenheden',
      'bestuursorganen',
      'editor-documents',
      'editor-document-statuses',
      'entiteiten',
      'fracties',
      'geboortes',
      'identificatoren',
      'kandidatenlijsten',
      'lidmaatschappen',
      'lijsttypes',
      'mandatarissen',
      'mandaten',
      'personen',
      'rechtsgronden',
      'rechtsgronden-aanstelling',
      'rechtsgronden-artikel',
      'rechtsgronden-beeindiging',
      'rechtsgronden-besluit',
      'rechtstreekse-verkiezingen',
      'stemmingen',
      'templates',
      'tijdsgebonden-entiteiten',
      'tijdsintervallen',
      'verkiezingsresultaten',
      'zittingen'
    ];
    return routeKeys.uniq().sort();
  }),

  actions: {
    goToPage: function(item) {
      this.set('currentRoute', item);
      this.get('router').transitionTo(item);
    }
  }
});
