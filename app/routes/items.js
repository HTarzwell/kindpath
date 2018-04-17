import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findAll('item')
  },
  actions: {
    createItem (newItem) {
      this.get('store').createRecord('item', newItem)
      .save()
      .then(() => {
        this.get('flashMessages')
          .success('You created a new item!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    deleteItem (item) {
      item.destroyRecord()
      .then(() => {
        this.get('flashMessages')
          .warning('You deleted this item!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    updateItem (item) {
      item.save()
      .then(() => {
        this.get('flashMessages')
          .success('You updated this item!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    showUpdateForm () {
      this.toggleProperty('isVisible')
    }
  }
})
