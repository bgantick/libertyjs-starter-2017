export default {
  countList: function (state) {
    return state.list.length
  },
  featuredMovie: function (state) {
    return state.movies.find((movie) => movie.featured === true)
  },
  listMovies: function (state) {
    return state.list
  },
  movies: function (state) {
    return state.movies
  }
}
