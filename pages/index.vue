<template>
  <div class="home">
    <b-container>
      <b-col class="mx-auto" justify-content="center">
        <h1>A study in using modern web components. And bikes.</h1>
        <p>This site is yourstruly's training ground for very small scale full stack development. And bikes.</p>
        <b-img class="fixed-ratio-resize" alt src="../assets/doge.webp" />
        <br />
        <br />
        <p>
          Check out
          <nuxt-link to="/dagens-lunch-garda">today's menu</nuxt-link>,
          or check out some of
          <nuxt-link to="/Bikes">my bikes</nuxt-link>.
        </p>
        <h2>Tech used for the menu page</h2>
        <p>
          Backend:
          <br />
          <a href="https://www.raspberrypi.org/">@raspberrypi</a> running
          <a href="https://nodejs.org/en/">@nodeJS</a>.
          <br />Using
          <a href="http://cheerio.js.org/">@cheerio</a> as a collector to feed a
          <a href="https://vuex.vuejs.org/">@vuex</a> store through a local
          <a href="https://github.com/axios/axios">@axios</a> api.
        </p>

        <p>
          Frontend:
          <br />
          <a href="https://nuxtjs.org/">@nuxt</a> and
          <a href="https://bootstrap-vue.js.org/">@bootstrap-vue</a>.
        </p>

        <p>
          If you have questions, improvements or
          <i>other</i>, don't hesitate to <a href="mailto:yourstruly@ericthewolf.com">
           
          contact me</a>.
        </p>
        <p>
                    
          <i>Yours sincerely, yourstruly, {{month}}, {{year}}.</i>
        </p>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    month() {
      return this.$store.state.date.month;
    },
    year() {
      return this.$store.state.date.year;
    }
  },

  head() {
    return {
      title: "Home | ericthewolf",
      link: [
        {
          rel: "canonical",
          href: "https://ericthewolf.com" + this.$route.path
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work

        {
          hid: "ericthewolf_home",
          name: "description",
          content:
            "This site consists of @yourstruly's attempts of using modern web components. Have a look at today's lunch menu if you want to eat @ Gårda, Göteborg."
        }
      ]
    };
  }
};
</script>

<style scoped>
p {
  overflow: hidden;
  max-width: 75ch;

  font-size: 21px !important;

  margin-bottom: 20px;

  font-weight: 300;
  line-height: 1.4;
}
.fixed-ratio-resize {
  max-width: 100%;
  height: auto;
  width: auto\9;
  }
</style>
