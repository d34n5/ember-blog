import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var event = params.event;
      event.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return event.save();
      });
      this.transitionTo('event', event);
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('event');
    },
    destroyEvent(event) {
      var review_deletions = event.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return event.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
