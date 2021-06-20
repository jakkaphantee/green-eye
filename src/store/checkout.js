const state = () => ({
  cart: []
})

const getters = {
  totalCost: (state) => {
    let totalPrice = 0
    state.cart.map(item => {
      let totalItemPrice = item.price
      if (item.amount > 1) {
        totalItemPrice = item.price * item.amount
      }
      totalPrice += totalItemPrice
    })
    return totalPrice
  }
}

const mutations = {
  addToCart: (state, item) => {
    const findItem = state.cart.find(cartItem => cartItem.id === item.id)
    if (findItem) {
      const newCart = state.cart.map(cartItem => {
        if (cartItem.id === item.id) {
          if (cartItem.amount < 5) {
            return {
              ...cartItem,
              amount: cartItem.amount += 1
            }
          }
        }
        return cartItem
      })
      state.cart = newCart
    } else {
      state.cart.push({
        ...item,
        amount: 1
      })
    }
  },
  changeItemAmount: (state, { itemId, amount }) => {
    const newCart = state.cart.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          amount
        }
      }
      return item
    })
    state.cart = [...newCart]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
