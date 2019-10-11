<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/">ericthewolf</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="About">About</b-nav-item>
          <b-nav-item to="Dailylunchgaarda">Daily Lunch Gårda</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}
</style>


