import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(event) {
      if (confirm('Are you sure you want to delete this event?')) {
        this.sendAction('destroyEvent', event);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
