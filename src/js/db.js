const firebase = require('firebase')

firebase.initializeApp({
  apiKey: 'AIzaSyCy5kCSNC3JSIzuFiuFXWp2IRTM1Bxn0yk',
  authDomain: 'student-online-messenger.firebaseapp.com',
  databaseURL: 'https://student-online-messenger.firebaseio.com',
  storageBucket: 'student-online-messenger.appspot.com',
  messagingSenderId: '336757951622'
})

module.exports = {
  postMessage: function (name, message) {
    firebase.database().ref('messages/default').push({
      name: name,
      message: message,
      timestamp: +(new Date())
    })
  },
  watchMessages: function (callback) {
    firebase.database().ref('messages/default').on('value', callback)
  }
}
