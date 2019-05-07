<template>
  <div id="app">
    <TableComponent msg="Welcome to Your Vue.js App" v-bind:numbers="numbers"/>
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue'
import { getRandomNumbers } from './helpers';

export default {
  name: 'app',
  components: {
   TableComponent
  },
  data() {
    return {
      numbers: this.getNumbers(),
    }
  },
  methods: {
    getNumbers: () => {
      return Array.from(getRandomNumbers());
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
