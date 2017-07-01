import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCxglKZJ9Bsv3p8Hf4gaBnn-A7Y6C8V6ms",
    authDomain: "testowyprojekt-laczeniezbaza.firebaseapp.com",
    databaseURL: "https://testowyprojekt-laczeniezbaza.firebaseio.com",
    projectId: "testowyprojekt-laczeniezbaza",
    storageBucket: "testowyprojekt-laczeniezbaza.appspot.com",
    messagingSenderId: "809178013655"
    // i know that ;p
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
