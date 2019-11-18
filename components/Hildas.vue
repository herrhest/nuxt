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
      return this.$store.state.date.day;
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
      name: "Hildas",
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
      var day = this.$store.state.date.day;
      this.menu = this.$store.state.hildasMenu[day].dayMenu.join("\n\n");
    }
  }
};
</script>

<style scoped>
.card-text {
  white-space: pre-line;
}
</style>


