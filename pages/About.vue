<template>
  <div class="about">
    <b-container>
      <b-col class="mx-auto" justify-content="center">
        <h1>A study in using modern web components.</h1>

        <b-img alt src="../assets/doge.webp" />
        <br />
        <br />

        
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
          <i>other</i>, don't hesitate to contact me.
        </p>
        <p>
          <a href="mailto:yourstruly@ericthewolf.com">
            <b-img thumbnail src="../assets/yourstruly.jpg"></b-img>
          </a>
          <br />
          <i>Yours sincerely, yourstruly, {{month}}, {{year}}.</i>
        </p>
      </b-col>
    </b-container>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
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
p {
  font-size: 21px !important;

  margin-bottom: 20px;

  font-weight: 300;
  line-height: 1.4;
}
</style>
