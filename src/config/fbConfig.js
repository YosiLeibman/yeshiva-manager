import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
    apiKey: "AIzaSyCM5A7glOuiTwLFhGFmt62Y7h22wo8KqPg",
    authDomain: "react-redux-project-manager.firebaseapp.com",
    databaseURL: "https://react-redux-project-manager.firebaseio.com",
    projectId: "react-redux-project-manager",
    storageBucket: "react-redux-project-manager.appspot.com",
    messagingSenderId: "940120263725"
  }

  firebase.initializeApp(config)

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase

