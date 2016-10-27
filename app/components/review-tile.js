import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(review, params) {
      this.sendAction('update', review, params);
    },


   delete(review) {
     if (confirm('Are you sure you want to delete this review?')) {
       this.sendAction('destroyReview', review);
     }
   }
 }
});
