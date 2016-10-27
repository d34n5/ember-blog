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
    }
  }
});
