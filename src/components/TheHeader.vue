<template>
  <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <span class="icon has-text-info">
          <i class="fa fa-film"></i>
        </span>
        <router-link :to="{ name: 'index' }">My Movie App</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{ name: 'list' }">List {{ listCount }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    listCount () {
      return this.$store.getters.countList
    }
  }
}
</script>
