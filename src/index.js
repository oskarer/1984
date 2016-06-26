import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDAoO8tDIQyD4OKhSgeI85xKR_xy7ouOQg",
  authDomain: "project-3459450342023630592.firebaseapp.com",
  databaseURL: "https://project-3459450342023630592.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
