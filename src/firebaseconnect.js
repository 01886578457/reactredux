import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyCj63_q7FEyMIndpMYKlR_u4A9HIkZfFtU",
  authDomain: "notereacttml.firebaseapp.com",
  databaseURL: "https://notereacttml.firebaseio.com",
  projectId: "notereacttml",
  storageBucket: "notereacttml.appspot.com",
  messagingSenderId: "444855257770"
};
firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataForNote');

// var data = firebase.database().ref("dataForNote/note1");
// //put data
//   data.set({
//     id:1,
//     title: "12/07/2018",
//     content: "Demo Put data note"
//   })
//getdata
// data.once("value").then(function(snapshot) {
//   console.log(snapshot.val());
// });
