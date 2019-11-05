<template>
  <div class="home">
    <div id="splash" class="container">
      <h1>Hi there</h1>
      <p class="lead">
        Have a look at today's menu:
        <br />
        <br />
        <nuxt-link to="/dailylunchgaarda">
          <b-button variant="info">Dagens lunch Gårda</b-button>
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

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
</style>
