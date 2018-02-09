<template>
  <div>
    <h1>Fraction</h1>
    <div class="calc-container">
      <div class="md-layout md-gutter md-alignment-center-center">
        <fraction  v-for="item in items" :key="item.id" v-bind:item="item"></fraction>
        <div class="md-layout-item equal-operator">
        <span>=</span>
        </div>
        <div class="md-layout-item">
        <span>
          <input type="text" v-model="result.numerator"/>
          <hr>
          <input type="text" v-model="result.denominator"/>
        </span>
        </div>
      </div>
      <md-button class="md-raised md-primary" @click="addFraction">ADD FRACTION</md-button>
    </div>
  </div>
</template>

<script>
import Fraction from './Fraction'
export default {
  name: 'FractionCalc',
  components: {
    Fraction
  },
  data () {
    return {
      items: [
        {id: 1, numerator: 2, denominator: 5},
        {id: 2, operator: '+'},
        {id: 3, numerator: 3, denominator: 4}
      ]
    }
  },
  methods: {
    round: function (n) {
      return Math.round(n * 100) / 100
    },
    addFraction: function () {
      this.items.push({id: this.items.length + 1, operator: ''}, {id: this.items.length + 2, numerator: '', denominator: ''})
    }
  },
  computed: {
    result: function () {
      let res = 0
      let tempOperator = '+'
      let operators = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        '*': function (a, b) { return a * b },
        '/': function (a, b) { return a / b }
      }

      this.items.forEach(function (item, i, arr) {
        if (item.numerator && item.denominator) {
          let preRes = item.numerator / item.denominator
          if (!operators[tempOperator]) return {numerator: NaN, denominator: NaN}
          res = Math.round(operators[tempOperator](res, preRes) * 100) / 100
        } else if (item.operator) {
          tempOperator = item.operator
        }
      })

      let decimal = ('' + res).split('.')[1].length
      let numerator = (res * Math.pow(10, decimal)).toFixed(0)
      let denominator = Math.pow(10, decimal)
      console.log(res)
      for (var i = 2; i <= numerator; i++) {
        if (numerator % i === 0 && denominator % i === 0) {
          numerator = numerator / i
          denominator = denominator / i
        }
      }

      return {numerator: numerator, denominator: denominator}
    }
  }
}
</script>

<style>
  .calc-container .md-layout-item {
    max-width: 97px;
    text-align: center;
  }
  .calc-container input {
    width: 100%;
    text-align: center;
    border: 2px solid;
    border-radius: 10px;
    padding: 5px;
    font-weight: bold;
  }
  hr {
    border: 1px solid;
  }
  .md-layout-item.equal-operator {
    max-width: 10px;
    font-weight: bold;
  }
</style>
