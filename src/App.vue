<template>
  <v-app id="app">
    <div id="action-buttons">
      <span>
        <Button v-bind:getNumbers="getNumbers" />
      </span>
    </div>
    <TableComponent msg="Welcome to Your Vue.js App"
                    v-bind:numbers="numbers"/>
  </v-app>
</template>

<script>
import TableComponent from './components/TableComponent.vue'
import Button from './components/Button.vue'
import { getRandomNumbers } from './helpers';

export default {
  name: 'app',
  components: {
   TableComponent,
   Button
  },
  created(){
    this.numbers = getRandomNumbers();
  },
  data() {
    return {
      numbers: [],
    }
  },
  methods: {
    getNumbers: function() {
      this.numbers = getRandomNumbers();
      return ;
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

#action-buttons {
  float: left;
}

#action-buttons span {
  display: inline-block;
}
</style>
