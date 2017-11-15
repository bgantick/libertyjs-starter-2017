<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <img :src="movie.thumbnail" :alt="movie.alternative" />
      </div>
      <div class="column is-three-quarters">
        <small :class="tagClassObject">{{ tagText }}</small>
        <h1 class="title is-1">{{ movie.title }}</h1>
        <StarRating :id="movie.id" :rating="movie.rating"></StarRating>
        <h2 class="title is-5">{{ movie.director }}</h2>
        <p class="content">{{ movie.synopsis }}</p>
        <Update
          :id="movie.id"
          :list="movie.list"
        />
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from '@/components/StarRating'
import Update from '@/components/Update'

export default {
  name: 'TheShow',
  components: {
    StarRating,
    Update
  },
  computed: {
    tagClassObject () {
      return `tag ${(this.movie.list ? `is-primary` : 'is-black')}`
    },
    tagText () {
      return this.movie.list ? `In List` : `Not In List`
    },
    movie () {
      let id = this.$route.params.id
      return this.$store.state.movies.find((movie) => movie.id === id)
    }
  }
}
</script>
