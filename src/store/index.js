import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import checkout from './checkout'
import quiz from './quiz'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    checkout,
    quiz,
  }
})
