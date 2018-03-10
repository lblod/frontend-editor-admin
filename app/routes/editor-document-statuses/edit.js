import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('editor-document-status', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("editor-document-statuses.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("editor-document-statuses.show", model);
      }).catch( function() {
        alert("Could not save editor-document-status");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "editor-document-statuses");
      }).catch( function() {
        alert("Deletion of editor-document-status failed");
      });
    }
  }
});
