import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      events: this.store.query('event', {limitToLast: 6}),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveEvent3(params) {
      var newEvent = this.store.createRecord('event', params);
      newEvent.save();
      this.transitionTo('index');
    },

    update(event, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          event.set(key,params[key]);
        }
      });
      event.save();
      this.transitionTo('index');
    },

    destroyEvent(event) {
      event.destroyRecord();
      this.transitionTo('index');
    },

    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    }
  }
});
