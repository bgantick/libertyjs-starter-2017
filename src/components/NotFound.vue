<template>
  <section class="section">
    <div class="container">
      <div class="notification is-warning">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Not Found',
  data () {
    return {
      title: 'Component not found :('
    }
  }
}
</script>
