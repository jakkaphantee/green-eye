const state = () => ({
  currentLandingPageComponent: '',
  isHamburgerShow: true
})

const mutations = {
  setCurrentLandingPageComponent: (state, componentName) => {
    state.currentLandingPageComponent = componentName
  },
  setIsHamburgerShow: (state, value) => {
    state.isHamburgerShow = value
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
