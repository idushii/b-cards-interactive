<template>
  <div class="container">
    <h1 class="display-4">Интерактивный пример card bootstrap</h1>
    <Card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from './components/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
