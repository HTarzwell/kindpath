import Route from '@ember/routing/route'

export default Route.extend({
  // model (params) {
  // go get the necessary list
    // return this.get('store').findRecord('items', params.list_id)
  // },
  model () {
    return this.get('store').findAll('item')
  },
  actions: {
    createItem (newItem) {
      this.get('store').createRecord('item', newItem)
      .save()
      console.log('new item in items.js is', newItem)
    },
    deleteItem (item) {
      item.destroyRecord()
    },
    updateItem (item) {
      item.save()
      console.log('item in items js is ', item)
      // update item needs to get the item properties from uihbs (done already?)
      // update item needs to set those item properties to THIS specific item
      // update item needs to save this new thing
    }
  }
})
