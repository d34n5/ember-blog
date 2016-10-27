import DS from 'ember-data';

export default DS.Model.extend({
  band: DS.attr(),
  city: DS.attr(),
  venue: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
