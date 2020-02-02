<template>
  <div id="app">
    <NavBar />
    <div style="text-align: center; margin: 50px; font-size: 20px;">
      <p>Sivulla voi seurata Kuopion alueen sähköpyörien käyttöä. Sivu arvioi myös tulevaa sähköpyörien tarvetta ennustettujen sääolosuhteiden pohjalta. Tarvittavien pyörien määrä on mahdollista ennustaa viiden päivän päähän.</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import WeatherCard from './components/WeatherCard.vue';
import NavBar from './components/base/NavBar.vue';
import Charttipaska from './components/Charttipaska.vue';
import HeatMap from './components/HeatMap.vue';
import Heattia from './components/Heattia';

export default {
  name: 'app',
  components: {
    WeatherCard,
    NavBar,
    Charttipaska,
    HeatMap,
    Heattia
  }
};
</script>

<style></style>
