<template>
  <div class="about">
    <div class="container">
      <h1>About</h1>

      <p class="lead">
        This site consists of
        <a href="mailto:yourstruly@ericthewolf.com">@yourstruly</a>'s attempts of using modern web components.
      </p>

      <img alt src="../assets/doge.webp">

      <hr>
      <h4>Tech used for the menu page</h4>

      <p>
        Backend:
        <a href="https://www.raspberrypi.org/">@raspberrypi</a> running
        <a href="https://nodejs.org/en/">@nodeJS</a>.
        , exposing an API built with
        <a href="http://cheerio.js.org/">@cheerio</a>,
        <a href="https://vuex.vuejs.org/">@vuex</a> and
        <a href="https://github.com/axios/axios">@axios</a>.
      </p>

      <p>
        Frontend:
        <a href="https://nuxtjs.org/">@nuxt</a> and
        <a href="https://bootstrap-vue.js.org/">@bootstrap-vue</a>.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },

  head() {
    return {
      title: "About | ericthewolf",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "ericthewolf_About",
          name: "ericthewolf | About",
          content:
            "This site consists of @yourstruly's attempts of using modern web components."
        }
      ]
    };
  },

  components: {},
  created: function() {},

  methods: {}
};
</script>


<style scoped>
</style>
