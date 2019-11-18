<template>
  <div class="bikes">
    <b-container>
      <b-col class="mx-auto" justify-content="center">
        <h1>My (road) bikes</h1>
        <p>
          <i>Here you'll find some of the bikes I own or have owned.</i>
          <br />
        </p>
        <C92319></C92319>
      </b-col>
    </b-container>
  </div>
</template>
<script>
import C92319 from "@/components/bikes/C92319.vue";

export default {
  data: function() {
    return {};
  },

  head() {
    return {
      title: "Bikes | ericthewolf",
      link: [
        {
          rel: "canonical",
          href: "https://ericthewolf.com" + this.$route.path
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "ericthewolf_Bikes",
          name: "description",
          content:
            "This site consists of @yourstruly's attempts of using modern web components."
        }
      ]
    };
  },

  components: {
    C92319
  },
  created: function() {},

  methods: {}
};
</script>


<style scoped>
p {
  font-size: 21px ;

  margin-bottom: 20px;

  font-weight: 300;
  line-height: 1.4;
}
</style>
