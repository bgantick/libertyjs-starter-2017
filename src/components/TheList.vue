<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline" v-if="movies.length > 0">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :director="movie.director"
          :thumbnail="movie.thumbnail"
          :list="movie.list"
          :rating="movie.rating"
        >
        </MovieCard>
      </div>
      <div v-else class="notification is-info">
        <p>
          No movies in your list...
          <router-link :to="{ name: 'index' }">Add More</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'TheList',
  components: {
    MovieCard
  },
  computed: {
    movies () {
      return this.$store.getters.listMovies
    }
  }
}
</script>
