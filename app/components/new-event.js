import Ember from 'ember';

export default Ember.Component.extend({
  addNewEvent: false,
  actions: {
    eventFormShow() {
      this.set('addNewEvent', true);
    },

    saveEvent1() {
      var params = {
        band: this.get ('band') ? this.get('band') : "",
        city: this.get ('city') ? this.get('city') : "",
        venue: this.get ('venue') ? this.get('venue') : "",
        date: this.get ('date') ? this.get('date') : "",
        image: this.get ('image') ? this.get('image') : "",
      };
      this.set('addNewEvent', false);
      this.sendAction('saveEvent2', params);
    }
  }
});
