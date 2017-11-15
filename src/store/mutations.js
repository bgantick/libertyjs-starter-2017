export default {
  ADD_TO_LIST (state, payload) {
    const movie = state.movies.find((movie) => movie.id === payload.id)
    movie.list = true
    state.list.push(movie)
  },
  REMOVE_FROM_LIST (state, payload) {
    const movie = state.movies.find((movie) => movie.id === payload.id)
    movie.list = false
    state.list = state.list.filter(function (item) {
      return item !== movie
    })
  },
  UPDATE_RATING (state, payload) {
    const movie = state.movies.find((movie) => movie.id === payload.id)
    movie.rating = payload.rating
  }
}
