import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuOdCI2PxiIdX3LDsT2EaDzj5b-mQsBGo",
  authDomain: "whatsapp-2-ac636.firebaseapp.com",
  projectId: "whatsapp-2-ac636",
  storageBucket: "whatsapp-2-ac636.appspot.com",
  messagingSenderId: "155663841422",
  appId: "1:155663841422:web:9a95524395eb1153d671df",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
