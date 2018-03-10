import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('editor-document');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "editor-documents");
      }).catch( function() {
        alert("Creation of editor-document failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "editor-documents");
      }).catch( function() {
        alert("Cancelling creation of editor-document failed");
      });
    }
  }
});
