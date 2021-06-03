const state = () => ({
  currentPage: ''
})

const mutations = {
  setCurrentPage: (state, page) => {
    state.currentPage = page
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
