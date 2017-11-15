<template>
  <section class="hero is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="column is-two-thirds">
          <h1 class="title is-bold is-1">{{ movie.title }}</h1>
          <p class="subtitle is-4">{{ movie.synopsis }}</p>
           <router-link
            :to="{ name: 'movie', params: { id: movie.id } }"
            class="button is-primary is-inverted is-outlined"
            >See More</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheFeatured',
  computed: {
    movie () {
      return this.$store.getters.featuredMovie
    }
  }
}
</script>
