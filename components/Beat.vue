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
export default {
  computed: {
    day() {
      return this.$store.state.day.day;
    }
  },
  watch: {
    day() {
      //watch for changes to store object, then reload the card
      this.getSingleDayMenu();
    }
  },

  data() {
    return {
      name: "Beat",
      menu: ""
    };
  },

  created: function() {
    //get menu on first load
    this.getSingleDayMenu();
  },

  methods: {
    getSingleDayMenu() {
      this.menu = "";
      var day = this.$store.state.day.day;
      this.menu = this.$store.state.beatMenu[day].dayMenu.join("\n\n");
    }
  }
};
</script>

<style scoped>
.card-text {
  white-space: pre-line;
}
</style>



