<template>
  <div id="app" class="d-flex flex-column" height="100%">
    <Navbar/>
    <nuxt />
     <div id="filler" class="flex-fill"></div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>


<style>
#app {
  height: 100vh;
}
#filler {
  height: stretch;
}
</style>
