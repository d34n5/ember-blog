import Ember from 'ember';

export default Ember.Component.extend({
  updateEventForm: false,
  actions: {
    updateEventForm() {
      this.set('updateEventForm', true);
    },

    update(event) {
      var params = {
        band: this.get ('band'),
        city: this.get ('city'),
        venue: this.get ('venue'),
        date: this.get ('date'),
        image: this.get ('image'),
      };
      this.set('updateEventForm', false);
      this.sendAction('update', event, params);
    }
  }
});
