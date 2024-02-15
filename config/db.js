const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCHQfHIO5w8n-Fcgo3Cqj82Vf993o5ms90",
  authDomain: "student-df1be.firebaseapp.com",
  projectId: "student-df1be",
  storageBucket: "student-df1be.appspot.com",
  messagingSenderId: "500494378979",
  appId: "1:500494378979:web:84fe76340fbd6aa30ea2d6",
  measurementId: "G-B00VK09F8V",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

module.exports = db ;
