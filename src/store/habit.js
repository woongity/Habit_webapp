import axios from 'axios'

export default {
  // module
  namespaced: 'true',
  // data
  state: () => ({
    habits: []
  }),
  // computed
  getters: {},
  // methods
  // mutations를 통해서만 data 수정 가능
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetHabits(state) {
      state.habits = []
    }
  },
  // 비동기
  actions: {
    async searchHabits(context, payload) {
      const OMDB_API_KEY = '629d18fc'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=habit`)
      const { Search, totalResults } = res.data
      context.commit('updateState',{
        habits: Search
      })
    }
  }
}