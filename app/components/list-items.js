import Component from '@ember/component'

export default Component.extend({
  model () {
    return this.get('store').findAll('item')
  },
  actions: {
    persistItem (newItem) {
      this.sendAction('persistItem', newItem)
    }
  }
})
