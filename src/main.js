require('src/css/style.scss')

const db = require('src/js/db')

const moment = require('moment')
const Vue = require('vue')

const vm = new Vue({
  data: {
    messages: {},
    txtName: '',
    txtMessage: ''
  },
  methods: {
    postMessage: function () {
      if (this.txtName === '' || this.txtMessage === '') return
      db.postMessage(this.txtName, this.txtMessage)
      this.txtMessage = ''
    },
    updateMessages: function (snapshot) {
      this.messages = snapshot.val()
    },
    toDate: function (timestamp) {
      return moment(timestamp).format('HH:mm - Do MMM \'YY')
    }
  },
  mounted: function () {
    db.watchMessages(this.updateMessages)
  }
})

vm.$mount('#app')
