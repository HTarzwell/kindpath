import DS from 'ember-data'

export default DS.Model.extend({
  date: DS.attr('date'),
  description: DS.attr('string'),
  energy_needed: DS.attr('string'),
  is_completed: DS.attr('boolean'),
  is_crucial: DS.attr('boolean'),
  user: DS.belongsTo('user')
})
