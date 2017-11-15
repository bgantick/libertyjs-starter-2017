<template>
  <form>
    <rating :items="items" :value="rating" @change="updateRating"></rating>
  </form>
</template>

<script>
import Rating from 'vue-bulma-rating'

export default {
  name: 'StarRating',
  props: {
    id: String,
    rating: Number
  },
  components: {
    Rating
  },
  data () {
    return {
      items: [
        {
          title: '5 Stars',
          value: 5
        },
        {
          title: '4 Stars',
          value: 4
        },
        {
          title: '3 Stars',
          value: 3
        },
        {
          title: '2 Stars',
          value: 2
        },
        {
          title: '1 Star',
          value: 1
        }
      ]
    }
  },
  methods: {
    updateRating (val) {
      return this.$store.dispatch('UPDATE_RATING', {
        id: this.id,
        rating: val
      })
    }
  }
}
</script>
