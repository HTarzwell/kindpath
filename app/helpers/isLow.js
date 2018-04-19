import { helper } from '@ember/component/helper'

export function isLow (params) {
  const energy = params[0].data.energy_needed
  const crucial = params[0].data.is_crucial
  if (energy === 'Low' || crucial === true) {
    return true
  } else {
    return false
  }
}

export default helper(isLow)
