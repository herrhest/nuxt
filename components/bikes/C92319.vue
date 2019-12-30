<template>
  <b-card>
    <b-card
      class="main_image"
      img-src="~/assets/92319/17.jpg"
      overlay
      text-variant="white"
      img-alt="Crescent 92319"
      fluid
      title="Crescent 92319"
      sub-title="Dura Ace AX, 1981"
    ></b-card>
    <br />

    <b-collapse id="readmorebutton" visible>
      <b-button
        class="float-right"
        variant="info"
        v-b-toggle.readmorebutton
        v-b-toggle.bikeinfo
      >Read more</b-button>
    </b-collapse>

    <!--BIKE INFO-->
    <b-collapse id="bikeinfo">
      <b-row align-h="center">
        <p>
          In the early 80's, Crecent's classical fender-friendly frames made way for tighter italian-inspired geometries from the likes of Rossin Record and similar columbus-forged bikes.
          The Crescent top line bikes were now sleek racers, with quicker handling and tighter clearance.
        </p>
      </b-row>
      <br />

      <b-img-lazy fluid src="~/assets/92319/16.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>The frameset of the 92319 anno 1981 was constructed out of Tange Champion No.1 tubing. A double butted steel with similar characteristics of columbus SL, sharing a low weight albeit being stiffer judging by my highly subjective experience.</p>
      </b-row>
      <b-img-lazy fluid src="~/assets/92319/champion-tubes.jpg"></b-img-lazy>
      <b-img-lazy fluid src="~/assets/92319/12.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>Tange Champion No.1 tubing stickers on the seat tube.</p>
      </b-row>
      <b-img-lazy fluid src="~/assets/92319/4.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>Tange Champion No.1 tubing stickers on the fork stays.</p>
      </b-row>

      <b-img-lazy fluid src="~/assets/92319/15.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>The bike was is the vicinity of 9.5kg as displayed, including the pedals.</p>
      </b-row>

      <b-img-lazy fluid src="~/assets/92319/Crescentbroschyr_1981.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>It's quite easy to pin the model year of this specific bike as it's displayed in verbatim in the 1981 Crescent catalogue. The text below the small image tells us the color code was called 96 Mother of pearl / Silver.</p>
      </b-row>

      <b-img-lazy fluid src="~/assets/92319/Crescentbroschyr_1981_22.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>
          On page 22 of the same catalogue, the second column details most of the bike's components. Being a mix of the first generation Dura Ace introduced in the late 70s, and leading edge Dura Ace AX.
          <br />
          <br />Many thanks to the fellow cyclist i bumped into who spotted my classic steel (which was not the 92319 in question, but as we found common ground, it came up in our discussion), he later sent me these catalogues. Sadly, I forgot his name.
        </p>
      </b-row>

      <b-img-lazy center fluid src="~/assets/92319/Duraaceaxbrakes.jpg"></b-img-lazy>
      <b-row align-h="center">
        <p>Some words about the Dura Ace AX brakes. As one of the first aerodynamic delta brakes known to man, it's no fluke that this design did not catch on. While being pleasing to the eye and might have swept certain amounts wind around elongated steel tubes, they did not offer much to slow one down. Moreover, to keep these centered was a chore that lacked the reward of non rubbing and stopping power.</p>
      </b-row>

      <b-row align-h="center">
        <p>
          For more information of the 92319 line, see
          <a
            href="http://www.cykelhobby.com/92319-83.html"
          >@cykelhobby's</a>
          excellent article on the 92319 series.
        </p>
      </b-row>

      <b-button
        class="float-right"
        v-b-toggle.bikeinfo
        v-b-toggle.readmorebutton
        variant="info"
      >Read less</b-button>
    </b-collapse>
    <!--BIKE INFO-->
  </b-card>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: none;
}

.card-subtitle {
  color: white !important;
  font-style: italic !important;
}

img {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}
.main_image {
  padding: none;
}

p {
  overflow: hidden;
  max-width: 75ch;

  font-size: 21px !important;

  margin-bottom: 20px;

  font-weight: 300;
  line-height: 1.4;
}
</style>