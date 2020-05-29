<template>
  <footer class="bg-light">
    <p class="text-center">©{{year}} ericthewolf</p>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return this.$store.state.date.year;
    }
  }
};
</script>

<style scoped>
footer {
  padding-top: 0.5rem;
}
</style>
