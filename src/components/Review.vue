<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{review.name}}</div>
        <div class="md-subhead">{{review.text}}</div>
      </md-card-header-text>
      <md-card-media>
        <img :src="review.img" alt="People">
      </md-card-media>
    </md-card-header>
    <md-card-actions>
      <md-button @click="sendMessage(index)">
        Delete
      </md-button>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: 'Review',
  props: ['review', 'index', 'sendMessage']
}
</script>

<style scoped>

</style>
