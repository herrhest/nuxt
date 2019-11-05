<template>
  <div class="about">
    <div class="container">
      

      <h1>
        <a href="mailto:yourstruly@ericthewolf.com">@yourstruly</a>'s attempts of using modern web components.
      </h1>

      <img alt src="../assets/doge.webp" />

      <hr />
      <h2>Tech used for the menu page</h2>

      <p>
        Backend:<br>
        <a href="https://www.raspberrypi.org/">@raspberrypi</a> running
        <a href="https://nodejs.org/en/">@nodeJS</a>. <br>
        Using <a href="http://cheerio.js.org/">@cheerio</a> as a collector to feed a <a href="https://vuex.vuejs.org/">@vuex</a> store through a local <a href="https://github.com/axios/axios">@axios</a> api.
      </p>

      <p>
        Frontend:<br>
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
      link: [
        {
          rel: "canonical",
          href: "https://ericthewolf.com" + this.$route.path
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "ericthewolf_About",
          name: "description",
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
