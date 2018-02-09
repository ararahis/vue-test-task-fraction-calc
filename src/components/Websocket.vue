<template>
  <div>
    <review v-for="(review, index) in reviews" :key="review.id" v-bind:review="review" v-bind:index="index" v-bind:sendMessage="sendMessage"></review>
  </div>
</template>

<script>
import Socket from '../socket.js'
import Review from './Review.vue'
export default {
  components: {Review},
  name: 'Websocket',
  data () {
    return {
      reviews: [
        {id: 1, name: 'Boris', text: 'I like this SPA', img: require('../assets/avatar.jpg')},
        {id: 2, name: 'Edip', text: 'I like this SPA too', img: require('../assets/avatar.jpg')},
        {id: 3, name: 'John Snow', text: 'I like this SPA', img: require('../assets/avatar.jpg')},
        {id: 4, name: 'Boris', text: 'I like this SPA', img: require('../assets/avatar.jpg')},
        {id: 5, name: 'Edip', text: 'I like this SPA too', img: require('../assets/avatar.jpg')},
        {id: 6, name: 'John Snow', text: 'I like this SPA', img: require('../assets/avatar.jpg')}
      ]
    }
  },
  methods: {
    sendMessage: function (msg) {
      Socket.send(msg)
    },
    handleMessage (msg) {
      this.reviews.splice(msg, 1)
    }
  },
  created () {
    Socket.$on('message', this.handleMessage)
  },
  beforeDestroy () {
    Socket.$off('message', this.handleMessage)
  }
}
</script>

<style scoped>
  .md-card {
    width: 30%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
