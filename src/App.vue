<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary mb-3">
      <a class="navbar-brand" href="#">Интерактивный пример card</a>
    </nav>
    <div class="container">
      <Card />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "./components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
