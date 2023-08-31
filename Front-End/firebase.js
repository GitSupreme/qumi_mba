// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTYDmYgTxCWYWpcjidLXCuhrsnzTv6j2I",
  authDomain: "qmsapp-6b513.firebaseapp.com",
  projectId: "qmsapp-6b513",
  storageBucket: "qmsapp-6b513.appspot.com",
  messagingSenderId: "556063858179",
  appId: "1:556063858179:web:b64817571109b6057d7836"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };