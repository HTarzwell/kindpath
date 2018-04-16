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
      console.log('Create Item fired in new-item.js')
    }
  }
})
