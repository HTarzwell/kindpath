import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  // tagName: 'h4',
  classNameBindings: ['crossoff'],
  crossoff: computed.alias('item.is_completed'),
  actions: {
    crossOff () {
      this.toggleProperty('item.is_completed')
      this.sendAction('saveComplete', this.get('item'))
    },
    deleteItem (item) {
      this.sendAction('deleteItem', item)
    },
    updateItem (item) {
      this.sendAction('updateItem', item)
    }
  }
})
