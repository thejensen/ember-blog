import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  partners: DS.attr(),
  song: DS.attr(),
  image: DS.attr()
});
