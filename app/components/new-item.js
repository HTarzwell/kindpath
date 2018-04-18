import Component from '@ember/component'

export default Component.extend({
  newItem: {
    date: '',
    description: '',
    energy_needed: '',
    is_completed: '',
    is_crucial: ''
  },
  actions: {
    createItem () {
      this.sendAction('createItem', this.get('newItem'))
      // .then(() => {
      this.set('newItem.date', '')
      this.set('newItem.description', '')
      this.set('newItem.energy_needed', '')
      this.set('newItem.is_completed', '')
      this.set('newItem.is_crucial', '')
      // })
    }
  }
})
