<template>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-content">
        <img :src="thumbnail" :alt="alternative" />
        <h2 class="title is-5">{{ title }}</h2>
        <p class="subtitle is-5">{{ director }}</p>
        <StarRating :id="id" :rating="rating"></StarRating>
        <footer class="card-footer">
          <p class="card-footer-item">
            <router-link
             :to="{ name: 'movie', params: { id: id } }"
             >See More</router-link>
          </p>
          <p class="card-footer-item">
            <Update
              :id="id"
              :list="list"
            >
            </Update>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating'
import Update from '@/components/Update'

export default {
  name: 'MovieCard',
  props: {
    id: String,
    title: String,
    director: String,
    thumbnail: String,
    list: Boolean,
    rating: Number,
    alternative: String
  },
  components: {
    StarRating,
    Update
  }
}
</script>
