<template>
  <button :class="classObject">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'Update',
  data () {
    return {
      loading: false
    }
  },
  props: {
    id: String,
    list: Boolean
  },
  computed: {
    classObject () {
      return `button ${(this.list ? 'is-danger' : 'is-primary')} ${(this.loading ? 'is-loading' : '')}`
    },
    buttonText () {
      return this.list ? 'Remove' : 'Add'
    }
  }
  // TODO Add methods for add/remove
}
</script>
