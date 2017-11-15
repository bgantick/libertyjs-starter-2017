<template>
  <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <span class="icon has-text-info">
          <i class="fa fa-film"></i>
        </span>
        <a href="#">My Movie App</a>
      </div>
      <div class="navbar-item">
        <a href="#">List</a>
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
