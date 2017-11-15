<template>
  <button :class="classObject" @click="manageCommit">{{ buttonText }}</button>
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
  },
  methods: {
    manageCommit () {
      this.loading = true
      if (this.list) {
        return this.removeFromList()
          .then(() => {
            this.loading = false
          })
      } else {
        return this.addToList()
          .then(() => {
            this.loading = false
          })
      }
    },
    addToList () {
      return this.$store.dispatch('ADD_TO_LIST', {
        id: this.id
      })
    },
    removeFromList () {
      return this.$store.dispatch('REMOVE_FROM_LIST', {
        id: this.id
      })
    }
  }
}
</script>
