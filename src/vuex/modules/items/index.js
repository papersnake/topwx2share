import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  categoryList: [],
  loading: false,
  itemList: [],
  hotitemList: []
}

export default{
  state,
  actions,
  getters,
  mutations
}
