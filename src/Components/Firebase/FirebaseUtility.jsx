// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbVR3EJYEwhSoIh9W0zntCKyB2M57GT_Q",
  authDomain: "sa-computers-academy.firebaseapp.com",
  projectId: "sa-computers-academy",
  storageBucket: "sa-computers-academy.appspot.com",
  messagingSenderId: "953109687348",
  appId: "1:953109687348:web:24bea09822f3e916cc6e61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// .................Firebase Database................//

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, name) => {
  const userRef = doc(db, "users", userAuth.uid); //Path to the document
  //   console.log("Uid:", userRef);
  const userData = await getDoc(userRef);
  // console.log (userData);
  const displayName = name || userAuth.displayName || "";
  {
    const email = userAuth.email || "";

    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
      console.log("DisplayName", displayName);
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userData;
};
export const SignInForm = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Sign-in was successful, you can return a success message or user data if needed
    return userCredential.user;
  } catch (error) {
    // Handle the sign-in error here
    console.error("Sign-in error:", error);
    return null;
  }
};

export const SignUpForm = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Sign-in was successful, you can return a success message or user data if needed
    return userCredential.user;
  } catch (error) {
    // Handle the sign-Up error here
    console.error("Sign-Up error:", error);
    return null;
  }
};

export const checkEmailExists = async (email) => {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    if (signInMethods && signInMethods.length > 0) {
      console.log("Email is already registered.");
    } else {
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
  }
};
