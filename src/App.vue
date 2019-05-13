<template>
  <v-app id="app">
  <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Random Phone Number Generator</span>
                <v-card-title>
                  <div>
                     <p>1. Generate Phone Numbers by selecting Min, Max and
                              Quantity. Then hit generate button when it is
                              active.</p>
                     <p>2. You can sort phone numbers
                       by clicking on the table column name i.e Phone
                       Numbers. Whe arrow up, items are sort by
                       ascending order.</p>
                  </div>
                </v-card-title>
                <Button
                  v-bind:getNumbers="getNumbers"
                  v-bind:numbers="numbers"
                  v-bind:max="max"
                  v-bind:min="min"
                  v-bind:quantity="quantity"
                  />
              </v-flex>
            </v-layout>
          </v-container>
        <TableComponent v-bind:numbers="numbers" />
      </v-card>
    </v-flex>
  </v-layout>
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
    this.numbers = getRandomNumbers(this.min, this.max, this.quantity);
  },
  data() {
    return {
      numbers: [],
      min: 10000000,
      max: 99999999,
      quantity: 10
    }
  },
  methods: {
    getNumbers: function(min, max, quantity) {
      this.min = min;
      this.max = max;
      this.quantity = quantity;
      this.numbers = getRandomNumbers(min, max, quantity);
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

.v-card__title div {
  text-align: left;
  font-size: .7rem;
  margin-bottom: 1px;
}

.v-form {
  border-style: outset;
}
</style>
