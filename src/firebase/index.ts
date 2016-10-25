import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyCCVnoyQksyTlxyn4z44eNO9qngBw9zbEw",
  authDomain: "moneywords-793c7.firebaseapp.com",
  databaseURL: "https://moneywords-793c7.firebaseio.com",
  storageBucket: "moneywords-793c7.appspot.com",
  messagingSenderId: "656792244933"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
