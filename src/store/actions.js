// Fake asynchronous call to server
function delay (t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t)
  })
}

export default {
  ADD_TO_LIST ({ commit }, payload) {
    return delay(500).then(() => {
      return commit('ADD_TO_LIST', payload)
    })
  },
  REMOVE_FROM_LIST ({ commit }, payload) {
    return delay(500).then(() => {
      return commit('REMOVE_FROM_LIST', payload)
    })
  },
  UPDATE_RATING ({ commit }, payload) {
    return delay(500).then(() => {
      return commit('UPDATE_RATING', payload)
    })
  }
}
