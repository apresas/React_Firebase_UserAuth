import firebase from "firebase/compat/app"
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAh_cHxs1fC61qq6EFw8cib0R8in-Q1J7A", 

  authDomain: "auth-development-41d09.firebaseapp.com",

  projectId: "auth-development-41d09",

  storageBucket: "auth-development-41d09.appspot.com",

  messagingSenderId: "885027479393",

  appId: "1:885027479393:web:104033046a20b2e72d6f20"
});

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

// const app = initializeApp({
  // apiKey: "AIzaSyAh_cHxs1fC61qq6EFw8cib0R8in-Q1J7A", 

  // authDomain: "auth-development-41d09.firebaseapp.com",

  // projectId: "auth-development-41d09",

  // storageBucket: "auth-development-41d09.appspot.com",

  // messagingSenderId: "885027479393",

  // appId: "1:885027479393:web:104033046a20b2e72d6f20"

// })

// const app = initializeApp(firebaseConfig)

export const auth = app.auth()
export default app