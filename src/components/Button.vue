<template>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12 sm3>
            <v-slider
              id="min"
              v-model="form.min"
              :rules="rules.min"
              color="orange"
              label="Min"
              hint="Min should be less than Max"
              min="10000000"
              max="99999998"
              thumb-label
            ></v-slider>
          </v-flex>
          <v-flex xs12 sm3>
            <v-slider
              id="max"
              v-model="form.max"
              :rules="rules.max"
              color="orange"
              label="Max"
              hint="Max should be greate than Min"
              min="10000001"
              max="99999999"
              thumb-label
            ></v-slider>
          </v-flex>
          <v-flex xs12 sm4>
            <v-slider
              id="quantity"
              v-model="form.quantity"
              :rules="rules.quantity"
              color="orange"
              label="Quantity"
              min="1"
              max="10000"
              thumb-label
            ></v-slider>
          </v-flex>
          <v-flex xs12 sm1>
            <v-btn
              :disabled="!formIsValid"
             round 
              class="btn-generate"
              color="normal"
              type="submit"
            >Generate</v-btn>
            </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12 sm3>
            <span v-if="form.min">Min - 07{{ form.min }}</span>
            <span v-else>Min - 07{{ min }}</span>
          </v-flex>
          <v-flex xs12 sm3>
            <span v-if="form.max">Max - 07{{ form.max }}</span>
            <span v-else>Max - 07{{ max }}</span>
          </v-flex>
          <v-flex xs12 sm3>
            <span v-if="form.quantity">{{ form.quantity }} Phone Numbers</span>
            <span v-else>{{ quantity }} Phone Numbers</span>
          </v-flex>
          <v-flex xs12 sm3>
            <download-csv
              :data   = "numbers"
              name    = "filename.csv">
              <v-btn round color="normal" dark>Download CSV</v-btn>
            </download-csv>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
</template>
<script>
export default {
  props: {
    getNumbers: Function,
    numbers: Array,
    max: Number,
    min: Number,
    quantity: Number
  },
  data () {
      const defaultForm = Object.freeze({
        quantity: null,
        max: null,
        min: null
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          quantity: [
            val => val > 10 || `I don't believe you!`
          ],
          min: [
            val => val < this.form.max || `Minimum should be less than Max!`
          ],
          max: [
            val => val > this.form.min || `Max should be greater than Min!`
          ],
        },
        defaultForm
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.quantity &&
          this.form.max &&
          this.form.min &&
          this.form.min < this.form.max
        )
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        const max = this.form.max;
        const min = this.form.min;
        const quantity = this.form.quantity;
        this.resetForm()
        this.getNumbers(min, max, quantity);
      }
    }
}
</script>
