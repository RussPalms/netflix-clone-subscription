// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";
import {firestore} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBoX7l8Yj2meT52r3Hm4AHBtWyeQa7lr-U",
	authDomain: "rpalm-netflix-clone--react.firebaseapp.com",
	projectId: "rpalm-netflix-clone--react",
	storageBucket: "rpalm-netflix-clone--react.appspot.com",
	messagingSenderId: "511506658408",
	appId: "1:511506658408:web:a36bffc0de95bfffdcb7dd",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
