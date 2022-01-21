// import * as firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { auth } from "firebase/auth";
// import { auth } from "firebase/compat/auth";
// import {firestore} from 'firebase/firestore';
// import { getFirestore } from "firebase/firestore/lite";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = auth();

export { auth };
export default db;
