import Component from '@ember/component'

export default Component.extend({
  // model (params) {
    // return this.get('store').findRecord('items', params.this.item)
  // },
  // attributeBindings: ['isVisible:updateForm'],
  actions: {
    updateItem () {
      this.sendAction('updateItem', this.get('item'))
    }
  }
})
