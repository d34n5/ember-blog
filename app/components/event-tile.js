import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(event, params) {
      this.sendAction('update', event, params);
    },
    delete(event) {
      if (confirm('Are you sure you want to delete this event?')) {
        this.sendAction('destroyEvent', event);
      }
    }
  }
});
