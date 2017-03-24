import {
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_ITEM_LIST_SUCCESS,
  GET_HOT_ITEM_LIST_SUCCESS,
  START_LOADING,
  FINISH_LOADING
} from './mutation-type'

const mutations = {
  // 获取分类列表
  [FETCH_CATEGORY_LIST_SUCCESS] (state, data) {
    state.categoryList = data
  },
  [FETCH_ITEM_LIST_SUCCESS] (state, data) {
    state.itemList = data
  },
  [GET_HOT_ITEM_LIST_SUCCESS] (state, data) {
    state.hotitemList = data
  },
  [START_LOADING] (state) {
    state.loading = true
  },
  [FINISH_LOADING] (state) {
    state.loading = false
  }
  // 获取即将上映电影列表
  // [FETCH_NOW_PLAYING_SUCCESS] (state, data) {
  //  state.nowPlayingFilms = data.films
  // },
  // 获取电影详情
  // [FETCH_DETAIL_SUCCESS] (state, data) {
  //  state.detail = data.film
  // },
  // 获取广告列表
  // [FETCH_BANNER_SUCCESS] (state, data) {
  //  state.billboards = data.billboards
  // }
}

export default mutations
