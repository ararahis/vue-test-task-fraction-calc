import Vue from 'vue'

const socket = new WebSocket('ws://echo.websocket.org')

const emitter = new Vue({
  methods: {
    send (message) {
      if (socket.readyState === 1) {
        socket.send(message)
      }
    }
  }
})

socket.onmessage = function (msg) {
  emitter.$emit('message', msg.data)
}
socket.onerror = function (err) {
  emitter.$emit('error', err)
}

export default emitter
