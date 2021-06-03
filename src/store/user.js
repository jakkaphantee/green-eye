const state = () => ({
  currentLandingPageComponent: ''
})

const mutations = {
  setCurrentLandingPageComponent: (state, componentName) => {
    state.currentLandingPageComponent = componentName
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
