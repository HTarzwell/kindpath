import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('item')
  },
  actions: {
    createItem (newItem) {
      this.get('store').createRecord('item', newItem)
      .save()
      console.log('new item in items.js is', newItem)
    }
  }
})
