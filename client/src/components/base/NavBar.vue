<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">CityBike Prediction</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav> </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Sääennuste</b-nav-item>
        <b-nav-item href="#/heatmap">Käyrät</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style></style>
