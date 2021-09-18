import firebase from "firebase/compat";


const firebaseConfig = {
    apiKey: "AIzaSyCqYGt4ujhYdXnEBGYo0ektZBrpp7Vd_VI",
    authDomain: "linkedin-clone-181d9.firebaseapp.com",
    projectId: "linkedin-clone-181d9",
    storageBucket: "linkedin-clone-181d9.appspot.com",
    messagingSenderId: "16580967369",
    appId: "1:16580967369:web:9cc75364502987f4cb8618"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}