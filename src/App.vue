<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <router-view/>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
  @import '../node_modules/font-awesome/css/font-awesome.css';
  main {
    margin-top: 52px;
  }
</style>
