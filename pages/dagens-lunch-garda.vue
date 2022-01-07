<template>
  <div class="dagens-lunch-garda">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <h1>Dagens Lunch Gårda, Vecka {{weekNumber}}</h1>
            <h2 class="lead">
              <i>Dagens lunch Gårda</i> Var en daglig inspritationskälla för lunch i Gårda, Göteborg.
              <br />Sidan underhålls inte längre, RIP!
            </h2>
             <video autoplay loop muted preload="auto" poster="false">
          <source src="../assets/racon.mp4" type="video/mp4" />
          <source src="../assets/racon.webm" type="video/webm" />
          <p>
            Your browser doesn't support HTML video. Here is a
            <a href="../assets/racon.mp4">link to the video</a> instead.
          </p>
        </video>
          </div>
        </div>
      </div>

      <div class="float-right" id="lang"></div>

      
      <br />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// //Restraurants

/* import Hildas from "@/components/Hildas.vue";
import Aptitgarden from "@/components/Aptitgarden.vue";
import Matsmak from "@/components/Matsmak.vue";
import Mvg from "@/components/Mvg.vue";
import Vallagat from "@/components/Vallagat.vue";
import Ullevi from "@/components/Ullevi.vue";
import Ulleochvi from "@/components/Ulleochvi.vue";
import UG from "@/components/UG.vue";
import Beat from "@/components/Beat.vue";
import Kathmandu from "@/components/Kathmandu.vue"; */

import axios from "axios";
export default {
  computed: {
    today() {
      return this.$store.state.date.day;
    },
    weekNumber() {
      return this.$store.state.date.week;
    }
  },

  data: function() {
    return {
      activeBtn: ""
    };
  },

  head() {
    return {
      title: "Dagens Lunch Gårda | ericthewolf",
      link: [
        {
          rel: "canonical",
          href: "https://ericthewolf.com" + this.$route.path
        }
      ],
      htmlAttrs: {
        lang: "sv"
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "dagens-lunch-garda",
          name: "description",
          content:
            "Dagens lunch gårda, Göteborg"
        }
      ]
    };
  },

  components: {
   /*  Hildas,
    Aptitgarden,
    Matsmak,
    Mvg,
    Vallagat,
    Beat,
    Ullevi,
    Ulleochvi,
    UG,
    Kathmandu */
  },

  methods: {
    updateDayState(newDay) {
      this.$store.commit("date/updateDay", newDay);
    },
    handler: function(day) {
      this.updateDayState(day);
    }
  }
};
</script>

<style scoped>
.cardrow {
  flex-wrap: wrap;
}

.col {
  padding: 0.5rem;
  min-width: 22rem;
  max-width: 30rem;
}

</style>