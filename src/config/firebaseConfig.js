import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDUMuJj7wrJKi9v9OQfNslGlH4OxjJ2H_c",
    authDomain: "pgo-website-60890.firebaseapp.com",
    databaseURL: "https://pgo-website-60890.firebaseio.com",
    projectId: "pgo-website-60890",
    storageBucket: "pgo-website-60890.appspot.com",
    messagingSenderId: "433665765102",
    appId: "1:433665765102:web:e61316e9cca720d6de4dff",
    measurementId: "G-YMRTE1DWYP",
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

// export const ref = firebase.database().ref('shopping-cart');
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
