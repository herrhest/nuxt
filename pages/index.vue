<template>
  <div class="home">
    <b-container>
      <b-col class="mx-auto" justify-content="center">

        <h1>
          Dagens lunch Gårda is just one
          <nuxt-link to="/dagens-lunch-garda">click</nuxt-link> away.
        </h1>

        <p>
          Check out
          <nuxt-link to="/dagens-lunch-garda">today's menu</nuxt-link> to see
          lunch offers in Gårda, Göteborg, Sweden, Earth.
        </p>

        <b-img
          class="fixed-ratio-resize"
          alt
          src="../assets/custom_raspberry_pi_case.jpg"
        />
        <br />
        <br />
        <p></p>

        <p>
          Stuff used:
          <br />
          <br />
          <a href="https://www.raspberrypi.org/">Raspberry pi 3b+</a> running
          <a href="https://ubuntu.com/download/server">ubuntu server</a>. Using
          <a href="http://cheerio.js.org/">cheerio</a> as a collector to feed a
          <a href="https://vuex.vuejs.org/">vuex</a>/<a
            href="https://nuxtjs.org/"
            >nuxt</a
          >
          store through a <a href="https://nodejs.org/en/">node</a> server side
          <a href="https://github.com/axios/axios">axios</a> api.
          <a href="https://bootstrap-vue.js.org/">Bootstrap-vue</a> is used to
          make stuff look somewhat presentable.
        </p>
        <p>
          <i
            >Yours sincerely,
            <a href="mailto:yourstruly@ericthewolf.com"> @yourstruly</a></i
          >.
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
    },
  },
  head() {
    return {
      title: "Home | ericthewolf",
      link: [
        {
          rel: "canonical",
          href: "https://ericthewolf.com" + this.$route.path,
        },
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "ericthewolf_home",
          name: "description",
          content:
            "This site consists of @yourstruly's attempts of using modern web components. Have a look at today's lunch menu if you want to eat @ Gårda, Göteborg.",
        },
      ],
    };
  },
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