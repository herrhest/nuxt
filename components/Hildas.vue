<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{name}}</h4>
      <p class="card-text">{{menu}}</p>
      <b-spinner v-if="menu === '' " label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
var url = "https://ericthewolf.com/hildas";

export default {
  computed: {
    day() {
      return this.$store.state.day.day;
    }
  },
  watch: {
    day() {
      //watch for changes to store object, then reload the card
      this.fetchMenu();
    }
  },

  data() {
    return {
      name: "Hildas",
      menu: ""
    };
  },

  created: function() {
    //get menu on first load
    this.fetchMenu();
  },

  methods: {
    fetchMenu() {
      this.menu = "";
      //get day from the store
      var day = this.$store.state.day.day;

      this.$axios
        .get(url)
        .then(response => (this.menu = response.data[day].dayMenu.join("\n\n")))
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.card-text {
  white-space: pre-line;
}
</style>


