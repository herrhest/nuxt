<template>
  <div class="dailylunchgarda">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <h1>Daily Lunch Gårda, Week {{weekNumber}}</h1>
            <h2 class="lead">
              <i>Dagens lunch Gårda</i> is your daily source of inspiration for a delicious snack in Gårda, Göteborg.
              <br />The restaurants below is listed in ascending distance from a certain office somewhere at Vädursgatan.
            </h2>
          </div>
        </div>
      </div>

      <!-- Hide if its weekend -->

      <div v-if="today <0 || today >4">
        <b-jumbotron bg-variant="info" text-variant="white">
          <h1 class="display-3">No food today :(</h1>
          <hr class="my-2" />
          <p class="lead">Check back tomorrow</p>
        </b-jumbotron>
      </div>
      <!-- show below if it is weekday -->
      <div v-else>
        <b-tabs
          align="center"
          v-model="today"
          content-class="mt-3"
          active-nav-item-class="text-dark "
        >
          <b-tab title-link-class="text-secondary" title="Monday" @click="handler(0)"></b-tab>
          <b-tab title-link-class="text-secondary" title="Tuesday" @click="handler(1)"></b-tab>
          <b-tab title-link-class="text-secondary" title="Wednesday" @click="handler(2)"></b-tab>
          <b-tab title-link-class="text-secondary" title="Thursday" @click="handler(3)"></b-tab>
          <b-tab title-link-class="text-secondary" title="Friday" @click="handler(4)"></b-tab>
        </b-tabs>

        <div class="cardrow d-inline-flex justify-content-center flex-row">
          <b-col>
            <Hildas />
          </b-col>

          <b-col>
            <Aptitgarden />
          </b-col>

          <b-col>
            <Mvg />
          </b-col>

          <b-col>
            <Matsmak />
          </b-col>

          <b-col>
            <Vallagat />
          </b-col>

          <b-col>
            <Beat />
          </b-col>

          <b-col>
            <Ullevi />
          </b-col>

          <b-col>
            <UG />
          </b-col>

          <b-col>
            <Ulleochvi />
          </b-col>
        </div>
      </div>
      <div class="col-auto" id="language">
      <b-button size="sm" class variant="outline-light">
        <nuxt-link to="/dagens-lunch-garda">
          <country-flag country="se" size="normal" />
        </nuxt-link>
      </b-button>

      <b-button size="sm" class="active" variant="outline-light">
        <nuxt-link to="/dailylunchgaarda">
          <country-flag class country="gb" size="normal" />
        </nuxt-link>
      </b-button>
    </div>
    <br>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
// //Restraurants
import CountryFlag from "vue-country-flag";
import Hildas from "@/components/Hildas.vue";
import Aptitgarden from "@/components/Aptitgarden.vue";
import Matsmak from "@/components/Matsmak.vue";
import Mvg from "@/components/Mvg.vue";
import Vallagat from "@/components/Vallagat.vue";
import Ullevi from "@/components/Ullevi.vue";
import Ulleochvi from "@/components/Ulleochvi.vue";
import UG from "@/components/UG.vue";
import Beat from "@/components/Beat.vue";

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
      title: "Daily Lunch Gårda | ericthewolf",
      link: [
        {
          rel: "canonical",
          href: "https://ericthewolf.com" + this.$route.path
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "ericthewolf_dailylunchgaarda",
          name: "description",
          content:
            "Daily lunch Gårda, Göteborg. Your daily source of inspiration for a delicious snack in Gårda, Göteborg"
        }
      ]
    };
  },

  components: {
    Hildas,
    Aptitgarden,
    Matsmak,
    Mvg,
    Vallagat,
    Beat,
    Ullevi,
    Ulleochvi,
    UG,
    CountryFlag
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

