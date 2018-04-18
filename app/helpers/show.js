import { helper } from '@ember/component/helper'

export function show () {
  this.toggleProperty('isVisible')
}

export default helper(show)
