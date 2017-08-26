<template>
  <div id="app">{{SSOT}}</div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    SSOT () {
      return this.$store.state.SSOT
    }
  }
}
</script>

