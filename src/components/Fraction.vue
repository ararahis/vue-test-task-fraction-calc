<template>
  <div class="md-layout-item">

    <span v-if="isset">
      <input type="text" @keyup="checkNum" v-model="item.numerator"/>
      <hr>
      <input type="text" @keyup="checkNum" v-model="item.denominator"/>
    </span>
    <span v-else>
      <input type="text" @keyup="checkOper" v-model="item.operator"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Fraction',
  props: ['item'],
  computed: {
    isset: function () {
      return typeof this.item.numerator !== 'undefined'
    }
  },
  methods: {
    checkOper: function () {
      this.item.operator = this.item.operator.replace(/[^+*/-]/g, '+')
    },
    checkNum: function () {
      this.item.numerator = this.item.numerator.replace(/[^\d]/g, '1')
    }
  }
}
</script>

<style scoped>

</style>
