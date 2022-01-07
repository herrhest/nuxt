<template>
  <div class="home">
    <b-container>
      <b-col class="mx-auto" justify-content="center">
        <h1>Dagens lunch Gårda is no more :(</h1>

       

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
            "This site consists of @yourstruly's attempts of using web components.",
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
