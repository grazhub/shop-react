// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB4rJoB9Qvnfi0qH5OOXxILnDuGUCAVO9g",
	authDomain: "mobile-shop-14595.firebaseapp.com",
	projectId: "mobile-shop-14595",
	storageBucket: "mobile-shop-14595.appspot.com",
	messagingSenderId: "347147905767",
	appId: "1:347147905767:web:c9a42d33aeca6eb4961042",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firestore
export const myAppDB = getFirestore(app)